"use client";

import { useEffect, useRef, useState } from "react";
import { choose, createGame, getChoices, getScene } from "@/engine/game";
import type { GameState, Story } from "@/engine/types";
import { NpcPanel } from "./NpcPanel";
import { StatsPanel } from "./StatsPanel";

const SAVE_KEY = "nextxian:save:v1";

/** Reads a saved game. Returns null when storage is unavailable or the save is unusable. */
function readSave(story: Story): GameState | null {
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GameState;
    return parsed && typeof parsed.sceneId === "string" && story.scenes[parsed.sceneId] ? parsed : null;
  } catch {
    return null;
  }
}

/** Writes the game to storage. Returns false when storage is blocked, so play continues without it. */
function writeSave(state: GameState): boolean {
  try {
    window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function GameView({ story }: { story: Story }) {
  const [game, setGame] = useState<GameState>(() => createGame(story));
  const [notice, setNotice] = useState<string | null>(null);
  const logEnd = useRef<HTMLDivElement>(null);

  const scene = getScene(story, game.sceneId);
  const choices = getChoices(scene, game);
  const ended = scene.ending !== undefined;
  const lastNpcLine = [...game.log].reverse().find((e) => e.kind === "npc")?.text;

  useEffect(() => {
    logEnd.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [game.log.length]);

  function pick(choiceId: string) {
    const next = choose(story, game, choiceId);
    setGame(next);
    setNotice(writeSave(next) ? null : "Progress is not being saved in this browser.");
  }

  function restart() {
    const fresh = createGame(story);
    setGame(fresh);
    setNotice(writeSave(fresh) ? null : "Progress is not being saved in this browser.");
  }

  function load() {
    const saved = readSave(story);
    if (saved) {
      setGame(saved);
      setNotice("Loaded your last saved game.");
    } else {
      setNotice("No saved game was found in this browser.");
    }
  }

  return (
    <div className="shell">
      <header className="masthead">
        <div>
          <p className="eyebrow">A xianxia tale</p>
          <h1>{story.title}</h1>
        </div>
        <div className="actions">
          <button type="button" className="ghost" onClick={load}>
            Load save
          </button>
          <button type="button" className="ghost" onClick={restart}>
            New game
          </button>
        </div>
      </header>

      <div className="layout">
        <main className="story" aria-label="Story">
          <div className="log">
            {game.log.map((entry, i) => {
              switch (entry.kind) {
                case "heading":
                  return (
                    <h2 key={i} className="scene-title">
                      {entry.text}
                    </h2>
                  );
                case "narration":
                  return (
                    <p key={i} className="narration">
                      {entry.text}
                    </p>
                  );
                case "player":
                  return (
                    <p key={i} className="player-line">
                      <span className="marker" aria-hidden="true">
                        You
                      </span>
                      {entry.text}
                    </p>
                  );
                case "npc":
                  return (
                    <figure key={i} className="npc-line">
                      <figcaption>{entry.speaker}</figcaption>
                      <blockquote>{entry.text}</blockquote>
                    </figure>
                  );
              }
            })}
            <div ref={logEnd} />
          </div>

          {ended ? (
            <div className="ending card">
              <p className="eyebrow">The End</p>
              <p className="ending-title">{scene.ending}</p>
              <button type="button" onClick={restart}>
                Play again
              </button>
            </div>
          ) : (
            <section className="choices" aria-label="Your options">
              <p className="eyebrow">What do you do?</p>
              <ol>
                {choices.map(({ choice, available, hint }) => (
                  <li key={choice.id}>
                    <button
                      type="button"
                      onClick={() => pick(choice.id)}
                      disabled={!available}
                      aria-describedby={hint ? `hint-${choice.id}` : undefined}
                    >
                      {choice.label}
                    </button>
                    {hint && (
                      <p id={`hint-${choice.id}`} className="hint">
                        {hint}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {notice && (
            <p className="notice" role="status">
              {notice}
            </p>
          )}
        </main>

        <aside className="side" aria-label="Characters and stats">
          <NpcPanel profile={story.npc} npc={game.npc} lastLine={lastNpcLine} />
          <StatsPanel stats={game.stats} />
        </aside>
      </div>
    </div>
  );
}
