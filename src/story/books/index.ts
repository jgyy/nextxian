import type { Book } from "./types";
import { censors } from "./b2/censors";
import { departure } from "./b2/departure";
import { frame } from "./b2/frame";
import { willow } from "./b2/willow";
import { assize } from "./b2/assize";
import { pagoda } from "./b2/pagoda";
import { barge } from "./b2/barge";
import { fever } from "./b2/fever";
import { silk } from "./b2/silk";
import { nine } from "./b2/nine";
import { lanterns } from "./b2/lanterns";
import { stairs } from "./b2/stairs";
import { vault } from "./b2/vault";
import { assembly } from "./b2/assembly";
import { reserve } from "./b2/reserve";
import { frame3 } from "./b3/frame";
import { coast } from "./b3/coast";
import { mender } from "./b3/mender";
import { harbour } from "./b3/harbour";
import { mourning } from "./b3/mourning";
import { ferry } from "./b3/ferry";
import { lamp } from "./b3/lamp";
import { ward } from "./b3/ward";
import { keeners } from "./b3/keeners";

/**
 * The books after the first, in reading order. Each book lists its arcs; the story index parses them, adds their scenes
 * to the chapter list, and merges their scenarios, remarks and echoes into the story.
 */
export const books: Book[] = [
  {
    id: "b2",
    name: "Book Two: The River of Ledgers",
    arcs: [frame, censors, departure, willow, assize, pagoda, barge, fever, silk, nine, lanterns, stairs, vault, assembly, reserve],
  },
  {
    id: "b3",
    name: "Book Three: The Drowned Library",
    arcs: [frame3, coast, mender, harbour, mourning, ferry, lamp, ward, keeners],
  },
];
