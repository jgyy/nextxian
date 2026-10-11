import { REALMS } from "@/engine/cultivation";
import { parseRemarks } from "@/engine/markup";
import type { ItemDef, Remark } from "@/engine/types";

/**
 * Unprompted remarks about the purse, the pack and the holdings. The Elder says each once, a few decisions after it becomes true.
 * None names a place, so they fit the mountain and the road alike.
 */
const FIXED = String.raw`
% su_first_holding | holdings>=1 & decisions>=10 | elder | You hold a lease now. A cultivator with an income answers to no one’s alms, and a cultivator with a debt answers to everyone’s. Make sure you know which you have signed.
% su_holdings_three | holdings>=3 | elder | Three holdings, and each one pays on the same day. I have watched sects with fewer collapse over a late rent. Be a better landlord than the Law Hall.
% su_rich | wealth>=90 & decisions>=40 | elder | You are carrying more spirit stones than most sects pay out in a year. I do not ask where they came from. I ask only that you spend them on something that makes you faster, and not on something that makes you loved.
% su_unfed | unfed & decisions>=30 | elder | I have been counting your breaths for a day. They are shorter than they should be for your realm. You are Unfed. Eat, or earn, and do not tell me that cultivation is its own food.
% su_quick | speed>=130 & decisions>=60 | elder | You cultivate a third faster than you did on the mountain. Whatever you are carrying or holding, it has done what a dozen sermons did not. Do not mistake the speed for the road.
% su_quicker | speed>=150 & decisions>=120 | elder | Half again as fast as the plain rate. I would call it luck, but luck has not the discipline to hold a lease. You have been working, and the work has been paying.
% su_shared | count:reckoning_>=1 | elder | You put your own coin into the common box when you could have kept it. I noticed, and so did the others. A company is mostly the small sums that nobody counts aloud.
% su_shared_often | count:reckoning_>=3 | elder | Three times now you have paid into the common box and said nothing of it. I begin to think the Law is not the only thing that keeps accounts.
% su_empty_purse | wealth<=0 & realm>=3 & decisions>=80 | elder | You have no spirit stones, and you are a Core cultivator or better. In my experience that combination ends in one of two ways. I would prefer you to find the third.
`;

/** The Elder’s word on a pill, for each pill in the story: what it is for, and when to eat it. */
function pillRemark(item: ItemDef): Remark {
  const realm = REALMS[item.aid!].name;
  return {
    id: `su_pill_${item.id}`,
    when: [{ kind: "item", item: item.id }, { kind: "decisions", min: 8 }],
    line: `You carry the ${item.name}. It is cut for ${realm}, and it opens a door, not a house. Eat it when your qi is nearly there, and not a day before: a pill taken early is only a bitter meal.`,
  };
}

export function economyRemarks(items: Record<string, ItemDef>): Remark[] {
  return [...parseRemarks(FIXED, "economy/remarks"), ...Object.values(items).filter((i) => i.aid !== undefined).map(pillRemark)];
}
