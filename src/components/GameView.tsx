"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { choose, createGame, currentBeat, getChoices, getScene } from "@/engine/game";
import { personalise, type Hero } from "@/engine/hero";
import { mannerOf } from "@/engine/npc";
import { restoreGame } from "@/engine/save";
import { TONE_INFO } from "@/engine/tone";
import type { GameState, LogEntry, Story } from "@/engine/types";
import { chapters } from "@/story";
import { Creation } from "./Creation";
import { CultivationPanel } from "./CultivationPanel";
import { HeroPanel } from "./HeroPanel";
import { REALMS } from "@/engine/cultivation";
import { NpcPanel } from "./NpcPanel";
import { PursePanel } from "./PursePanel";
import { priceTag } from "@/engine/economy";
import { StatsPanel } from "./StatsPanel";
import { WitnessPanel } from "./WitnessPanel";
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

/** Turns `*like this*` into italics, as the books write a card, a note or a remembered line. */
function withEmphasis(text: string): ReactNode[] {
  return text.split(/\*([^*]+)\*/).map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

/** Renders one log entry. The same markup serves the stage and the backlog. */
function Entry({ entry }: { entry: LogEntry }) {
  switch (entry.kind) {
    case "heading":
      return <h2 className="scene-title">{entry.text}</h2>;
    case "realm":
      return (
        <p className="realm-line" role="status">
          {entry.text}
        </p>
      );
    case "ledger":
      return (
        <p className="ledger-line" role="status">
          {entry.text}
        </p>
      );
    case "strain":
      return (
        <p className="strain-line" role="status">
          {entry.text}
        </p>
      );
    case "narration":
      return <p className="narration">{withEmphasis(entry.text)}</p>;
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
          <blockquote>{withEmphasis(entry.text)}</blockquote>
        </figure>
      );
  }
}

function Masthead({ story, children }: { story: Story; children?: ReactNode }) {
  return (
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
      {children}
    </header>
  );
}

export function GameView({ story }: { story: Story }) {
  // No game until the player has made a character, or loaded one.
  const [game, setGame] = useState<GameState | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function begin(hero: Hero) {
    const fresh = createGame(story, hero);
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

  if (!game) {
    return (
      <div className="shell">
        <Masthead story={story} />
        <Creation onBegin={begin} onLoad={load} />
        {notice && (
          <p className="notice" role="status">
            {notice}
          </p>
        )}
      </div>
    );
  }
  return (
    <Play
      story={story}
      game={game}
      setGame={setGame}
      notice={notice}
      setNotice={setNotice}
      onLoad={load}
      onNewCharacter={() => {
        setGame(null);
        setNotice(null);
      }}
    />
  );
}

interface PlayProps {
  story: Story;
  game: GameState;
  setGame: (g: GameState) => void;
  notice: string | null;
  setNotice: (n: string | null) => void;
  onLoad: () => void;
  onNewCharacter: () => void;
}

function Play({ story, game, setGame, notice, setNotice, onLoad, onNewCharacter }: PlayProps) {
  const [showBacklog, setShowBacklog] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const backlogEnd = useRef<HTMLDivElement>(null);

  const scene = getScene(story, game.sceneId);
  const choices = getChoices(scene, game);
  const ended = scene.ending !== undefined;
  const beat = currentBeat(game.log);
  const chapterName = chapters.find((c) => c.scenes.some((s) => s.id === scene.id))?.name.split(":")[0];
  const lastNpcLine = [...game.log].reverse().find((e) => e.kind === "npc")?.text;

  // Each new beat starts at the top of the stage, and the page is brought back to the stage if the player had scrolled down to the options.
  const frame = useRef<HTMLDivElement>(null);
  const options = useRef<HTMLElement>(null);
  useEffect(() => {
    stage.current?.scrollTo({ top: 0, behavior: "smooth" });
    options.current?.scrollTo({ top: 0 });
    const top = frame.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) frame.current?.scrollIntoView({ block: "start" });
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
    // The same character begins again from the gate.
    const fresh = createGame(story, game.hero);
    setGame(fresh);
    setShowBacklog(false);
    setNotice(writeSave(fresh) ? null : "Progress is not being saved in this browser.");
  }

  return (
    <div className="shell play">
      <Masthead story={story}>
        <div className="actions">
          <button type="button" className="ghost" onClick={onLoad}>
            Load save
          </button>
          <button type="button" className="ghost" onClick={restart}>
            Restart
          </button>
          <button type="button" className="ghost" onClick={onNewCharacter}>
            New character
          </button>
        </div>
      </Masthead>

      <div className="layout">
        <main className="novel" aria-label="Story">
          <div className="stage-frame" ref={frame}>
            <div className="stage-bar">
              <p className="stage-chapter">{chapterName}</p>
              {notice && (
                <p className="notice stage-notice" role="status">
                  {notice}
                </p>
              )}
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
            <section className="choices" aria-label="Your options" ref={options}>
              <p className="eyebrow">What do you do?</p>
              <ToneLegend />
              <ol>
                {choices.map(({ choice, available, hint, strain }) => {
                  const price = priceTag(choice.effects);
                  const dao = (choice.effects ?? []).reduce((n, e) => (e.kind === "addDao" ? n + e.amount : n), 0);
                  return (
                  <li key={choice.id}>
                    <button
                      type="button"
                      data-tone={choice.tone}
                      onClick={() => pick(choice.id)}
                      disabled={!available}
                      aria-describedby={hint ? `hint-${choice.id}` : undefined}
                    >
                      <span className="choice-label">{personalise(choice.label, game.hero)}</span>
                      {choice.tone && <span className="tone-tag">{TONE_INFO[choice.tone].name}</span>}
                      {price.cost > 0 && <span className="price-tag" data-kind="cost">Costs {price.cost} spirit stones</span>}
                      {price.gain > 0 && <span className="price-tag" data-kind="gain">Earns {price.gain} spirit stones</span>}
                      {dao > 0 && game.hero.dao !== "none" && <span className="price-tag" data-kind="dao">Dao +{dao}</span>}
                      {choice.needsRealm !== undefined && (
                        <span className="realm-tag" data-strain={strain ? "yes" : "no"}>
                          {REALMS[choice.needsRealm].name}
                          {strain ? " · beyond you" : ""}
                        </span>
                      )}
                    </button>
                    {hint && (
                      <p id={`hint-${choice.id}`} className="hint">
                        {hint}
                      </p>
                    )}
                  </li>
                  );
                })}
              </ol>
            </section>
          )}

        </main>

        <aside className="side" aria-label="Characters and stats">
          <HeroPanel hero={game.hero} realm={game.realm} />
          <NpcPanel profile={story.npc} npc={game.npc} lastLine={lastNpcLine} manner={mannerOf(game.tones)} />
          <CultivationPanel game={game} />
          <PursePanel story={story} game={game} />
          <WitnessPanel game={game} />
          <section className="card side-legend" aria-label="What each choice colour means">
            <p className="eyebrow">Colours of choice</p>
            <ToneLegend />
          </section>
          <StatsPanel stats={game.stats} tones={game.tones} />
        </aside>
      </div>
    </div>
  );
}
