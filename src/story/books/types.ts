/** One arc of a book: a run of about forty scenes written in the story markup, with the scenarios, remarks and echoes that go with it. */
export interface Arc {
  /** Short snake_case id, also the prefix of the arc's scene ids and flags. */
  id: string;
  /** The arc's heading, shown in the chapter list and the word-count report. */
  name: string;
  /** Scenes, in the markup `parseScenes` reads. */
  scenes: string;
  /** NPC scenarios, in the markup `parseScenarios` reads. */
  scenarios?: string;
  /** Unprompted remarks, in the markup `parseRemarks` reads. */
  remarks?: string;
  /** Echoes added to scenes elsewhere, in the markup `parseEchoes` reads. */
  echoes?: string;
}

export interface Book {
  id: string;
  name: string;
  arcs: Arc[];
}
