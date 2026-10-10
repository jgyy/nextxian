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
import { forge } from "./b3/forge";
import { house } from "./b3/house";
import { sixth } from "./b3/sixth";
import { lotus } from "./b3/lotus";
import { tidedoor } from "./b3/tidedoor";
import { stacks } from "./b3/stacks";
import { pao } from "./b3/pao";
import { fifth } from "./b3/fifth";
import { ninesails } from "./b3/ninesails";
import { frame4 } from "./b4/frame";
import { chain } from "./b3/chain";
import { border } from "./b4/border";
import { stones } from "./b4/stones";
import { glass } from "./b4/glass";
import { caravan } from "./b4/caravan";
import { storm } from "./b4/storm";
import { camp } from "./b4/camp";
import { wolves } from "./b4/wolves";
import { bone } from "./b4/bone";
import { vigil } from "./b4/vigil";
import { court } from "./b4/court";
import { kurultai } from "./b4/kurultai";
import { roots } from "./b4/roots";
import { tomb } from "./b4/tomb";

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
    arcs: [frame3, coast, mender, harbour, mourning, ferry, lamp, ward, keeners, forge, house, sixth, lotus, tidedoor, stacks, pao, fifth, ninesails, chain],
  },
  {
    id: "b4",
    name: "Book Four: The Ash Steppe",
    arcs: [frame4, border, stones, glass, caravan, storm, camp, wolves, bone, vigil, court, kurultai, roots, tomb],
  },
];
