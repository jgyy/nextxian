import type { Craft } from "./lexicon-craft";

/**
 * What lies in the hidden room, by craft: three paragraphs, one for each scene of the hidden route. The road’s element is added after each
 * (see ELEMENT_DEEP). The last paragraph of every craft ends on the thing the keeper kept from the sect, and the goods the road sells are the
 * lesser copy of it. Slots: kname, kthey, ktheir, place, relic, secret.
 */
export const CRAFT_DEEP: Record<Craft, [string, string, string]> = {
  alchemy: [
    "Shelves of sealed jars line the room, each marked with a year and a name. These are the ones {kname}’s teachers could not sell, and could not bring themselves to pour away.",
    "A single pill rests on a square of silk in the centre of the room, and it is the wrong colour for any pill you know. Its label says only what it was made to cure, and the illness is one the registers say no longer exists.",
    "A notebook beside it records the long failure of a lifetime: ninety-one attempts, each with a date, each marked with a small neat cross, except the last, which has a circle.",
  ],
  forging: [
    "A forge no bigger than a cupboard stands cold in the middle of the room, its bellows rotted to lace. The walls are hung with moulds, each for a blade no register has a record of.",
    "On the anvil lies a half-made sword, its tang unfinished and its edge not yet drawn. It has been left like that for decades, and the dust on it is smooth as a sleeve.",
    "Under the anvil, in a tin box, is a ledger of every blade that came out of this room. The last entry is dated the year of the Sealing, and the buyer’s column is blank.",
  ],
  talisman: [
    "A long table is covered with sheets of paper, each written in a script that is no longer taught. They are stacked with care and the top sheet is weighted with a stone smoothed by a thumb.",
    "In a drawer there is a single talisman, folded in four, whose ink has not faded. {Kname} says it is the one thing in the room that was ever finished, and that finishing it cost the writer {ktheir} eyes.",
    "Beneath the drawer a flat box holds the writer’s brush. It is worn to a stub, and there is a thread tied round the handle, and on the thread are knotted forty names.",
  ],
  formation: [
    "The floor of the room is a single great array, scratched into the stone and filled with white powder. It has been walked across so often that the lines have a sheen.",
    "At its heart a small stone stands upright in a socket cut for it. It is the one stone of the pattern that is not placed, and it hums, a note so low that it comes up through the knees.",
    "On the wall is a diagram of the array as it ought to have been laid, with notes in two hands: the first confident, the second doubtful, and the last a single word, “enough”.",
  ],
  beast: [
    "The room is a nest. Straw lies in drifts in the corners, and the walls are scored with claw-marks of a creature the size of an ox. Whatever lived here was fed with care and never caged.",
    "On a shelf stands a row of tiny carved figures, each a different beast, each with a ribbon about its neck. {Kname} says they are the ones that came back, and that there are fewer than there ought to be.",
    "At the back a harness is hung on a peg, too wide for any animal that is bred now. The leather is soft with oil, and the buckle is polished by a hand that still comes here.",
  ],
  sword: [
    "A long bare room, floored with sand, lined with racks of swords. None bears a maker’s mark, and every one is worn at the grip to the exact shape of a different hand.",
    "On the far wall a single sword hangs in its scabbard, with a strip of white cloth tied about the hilt. The cloth is a mourning band, and the knot is the one tied for the dead.",
    "Beneath it is a bench and a notebook. It records, over sixty years, a single stroke, drawn again and again, from every angle, in a hand that grows steadily older and steadily more exact.",
  ],
  healing: [
    "The room is a ward of six cots, each made up with clean linen as if for someone arriving that evening. Each has a name on the bedhead, in a hand you do not know, and a date a little in the future.",
    "A cabinet against the wall holds remedies that no healer would sell: a dozen small stoppered bottles, each labelled with the name of a sickness that has no cure and a dose that is not meant to cure it.",
    "On the cabinet’s lowest shelf lies a plain wooden box. It holds a book of the cases that went wrong, in {kname}’s teacher’s hand, and the last page is a long apology to someone whose name has been scratched out.",
  ],
  fate: [
    "Every wall of the room is hung with slips of paper, each sealed with wax, each bearing a date. Thousands. They have been arranged by the date they are to be opened, and the first is next week.",
    "A plain table in the centre holds a single bowl of stalks, laid in a pattern that has not been disturbed in years. {Kname} says it is a reading that took seven years to finish and has not yet been understood.",
    "At the end of the room a sealed slip lies apart from the rest. It bears your name, and a date: not a future one. It is today’s, and the wax is still faintly warm.",
  ],
};
