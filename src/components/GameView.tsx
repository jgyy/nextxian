"use client";

import { useEffect, useRef, useState } from "react";
import { choose, createGame, currentBeat, getChoices, getScene } from "@/engine/game";
import { mannerOf } from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { TONE_INFO } from "@/engine/tone";
import type { GameState, LogEntry, Story } from "@/engine/types";
import { chapters } from "@/story";
import { NpcPanel } from "./NpcPanel";
import { StatsPanel } from "./StatsPanel";
import { ToneLegend } from "./ToneLegend";

const SAVE_KEY = "nextxian:save:v1";

/** Reads a saved game. Returns null when storage is unavailable or the save is unusable. */
function readSave(story: Story): GameState | null {
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    return raw ? restoreGame(JSON.parse(raw), story) : null;
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

/** Renders one log entry. The same markup serves the stage and the backlog. */
function Entry({ entry }: { entry: LogEntry }) {
  switch (entry.kind) {
    case "heading":
      return <h2 className="scene-title">{entry.text}</h2>;
    case "narration":
      return <p className="narration">{entry.text}</p>;
    case "player":
      return (
        <p className="player-line">
          <span className="marker" aria-hidden="true">
            You
          </span>
          {entry.text}
        </p>
      );
    case "npc":
      return (
        <figure className="npc-line">
          <figcaption>{entry.speaker}</figcaption>
          <blockquote>{entry.text}</blockquote>
        </figure>
      );
  }
}

export function GameView({ story }: { story: Story }) {
  const [game, setGame] = useState<GameState>(() => createGame(story));
  const [notice, setNotice] = useState<string | null>(null);
  const [showBacklog, setShowBacklog] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const backlogEnd = useRef<HTMLDivElement>(null);

  const scene = getScene(story, game.sceneId);
  const choices = getChoices(scene, game);
  const ended = scene.ending !== undefined;
  const beat = currentBeat(game.log);
  const chapterName = chapters.find((c) => c.scenes.some((s) => s.id === scene.id))?.name.split(":")[0];
  const lastNpcLine = [...game.log].reverse().find((e) => e.kind === "npc")?.text;

  // Each new beat starts at the top of the stage.
  useEffect(() => {
    stage.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [game.log.length]);

  useEffect(() => {
    if (showBacklog) backlogEnd.current?.scrollIntoView({ block: "end" });
  }, [showBacklog, game.log.length]);

  function pick(choiceId: string) {
    const next = choose(story, game, choiceId);
    setGame(next);
    setNotice(writeSave(next) ? null : "Progress is not being saved in this browser.");
  }

  function restart() {
    const fresh = createGame(story);
    setGame(fresh);
    setShowBacklog(false);
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
        <div className="title-block">
          <span className="seal-stamp" aria-hidden="true">
            赤渊
          </span>
          <div>
            <p className="eyebrow">A xianxia tale</p>
            <h1>{story.title}</h1>
          </div>
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
        <main className="novel" aria-label="Story">
          <div className="stage-frame">
            <div className="stage-bar">
              <p className="stage-chapter">{chapterName}</p>
              <button
                type="button"
                className="ghost small"
                aria-expanded={showBacklog}
                aria-controls="backlog"
                onClick={() => setShowBacklog((open) => !open)}
              >
                {showBacklog ? "Close backlog" : "Backlog"}
              </button>
            </div>

            {showBacklog ? (
              <div id="backlog" className="backlog" role="log" aria-label="Full story so far">
                {game.log.map((entry, i) => (
                  <Entry key={i} entry={entry} />
                ))}
                <div ref={backlogEnd} />
              </div>
            ) : (
              <div ref={stage} className="stage" aria-live="polite">
                {beat.map((entry, i) => (
                  <Entry key={i} entry={entry} />
                ))}
              </div>
            )}
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
              <ToneLegend />
              <ol>
                {choices.map(({ choice, available, hint }) => (
                  <li key={choice.id}>
                    <button
                      type="button"
                      data-tone={choice.tone}
                      onClick={() => pick(choice.id)}
                      disabled={!available}
                      aria-describedby={hint ? `hint-${choice.id}` : undefined}
                    >
                      <span className="choice-label">{choice.label}</span>
                      {choice.tone && <span className="tone-tag">{TONE_INFO[choice.tone].name}</span>}
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
          <NpcPanel profile={story.npc} npc={game.npc} lastLine={lastNpcLine} manner={mannerOf(game.tones)} />
          <StatsPanel stats={game.stats} tones={game.tones} />
        </aside>
      </div>
    </div>
  );
}
