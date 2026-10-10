import type { NpcScenario } from "@/engine/types";

/**
 * The Elder’s reactions to the five newest side paths: the foothill village, the quarry, the
 * healer’s hall, the eastern peak and the Cloud Gap bridge. Each path has a request or a report,
 * and where her memory matters, a memory line reads the flags the player set on the way.
 */
export const elderSuSidePaths: Record<string, NpcScenario> = {
  REQUEST_VILLAGE: {
    id: "REQUEST_VILLAGE",
    summary: "The player asks leave to visit the foothill village where Gu Hanzhen was born.",
    delta: { trust: -1, suspicion: 3 },
    lines: {
      hostile: "You want leave to walk down to a village of the condemned, while the mist rises under my hall. Go, if you must. The Law will count every hour you spend walking away from the abyss.",
      wary: "The village where Gu Hanzhen was born. I know what is there, Wanderer, and I would rather not hear it from you on the road. Go and look, if you must, and come back with a clear mind rather than a farmer’s grievance.",
      neutral: "The village under the foothills. Take your leave, but be quick about it. The mist does not wait for villages, and neither does the bell. Bring back what you learn, and bring it honestly.",
      warm: "You ask leave instead of taking it. I notice that. Go to the foothill village and see the people the Law has forgotten. I would rather you knew them before you stood in judgment over their sons.",
      devoted: "Go, and go gladly. I have sent disciples down that road before, and few of them thought to ask whose mother still sings at the gate. Learn her name, Wanderer. Then come back and tell me what it was.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "knows_gu_name" }],
        line: "My gate disciple tells me you asked after Gu Hanzhen by name, and now you ask to see where he was born. The Law can spare you an afternoon. It cannot spare you the question of why you want one.",
      },
    ],
  },

  REPORT_VILLAGE: {
    id: "REPORT_VILLAGE",
    summary: "The player reports the levy, the names and the mother of Gu Hanzhen from the village.",
    delta: { trust: 3, fear: 2 },
    lines: {
      hostile: "The levy. Of course it was the levy. You come back from the foothills with a mother’s grief in your mouth and a list in your sleeve, and you expect me to think the Law is the one who needs defending. I will hear you, Wanderer. I will not agree.",
      wary: "A village of names, a levy of children, a mother who sang at the gate. I have read all of this before in the archive ledgers. Tell me what the village had that the ledgers did not.",
      neutral: "The levy took children from the mountain for the seal, and the seal was paid for in names. You have told me the price. I do not yet know what you think I should do with it.",
      warm: "A mother and a village that remember the names the Law forgot. You have carried their grief up the steps without dropping it. That is a kind of carrying the Law has never learned.",
      devoted: "You went down to the village and came back with the levy in your hands and the names in your mouth. I should have gone there myself, fifteen years ago. Thank you for doing what I could not.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "read_gu_letter" }],
        line: "Gu’s letter says the mountain knows which half it has been given. I have been unsure for fifteen years whether that is a threat or a plea. You read it, and now I must decide which it was.",
      },
      {
        when: [{ kind: "flag", flag: "found_hidden_list" }, { kind: "flag", flag: "took_hidden_list" }],
        line: "You found the second list in the niche and took it with you. Give it to me, Wanderer. It has my hand on it, and I would rather be the one who reads my own shame aloud.",
      },
    ],
  },

  REPORT_QUARRY: {
    id: "REPORT_QUARRY",
    summary: "The player reports the quarry, the cut, the wage ledger and the second shard.",
    delta: { trust: 2, fear: 3 },
    lines: {
      hostile: "You have been digging in my mountain, and you come to me with stone dust on your sleeve and a dead man’s wages in your mouth. The seal is not yours to measure, Wanderer. Put the shard down before you tell me anything else.",
      wary: "The vein beneath the archive. Half kept, half given, the carvings say. I know about the cut. I know less about who cut it, and what they were paid to forget.",
      neutral: "The quarry holds the other half of the jade, or something very like it. Tell me where the cut is, and what the wage ledger says about the men who made it.",
      warm: "You found the place where the jade was cut, and you told me the truth about it without being asked twice. That is rarer than gold in the quarry, and I will remember it when the tribunal argues over the seal.",
      devoted: "Half kept, half given. You have found the sentence that ruined my hall and carried it up to me in your hands. Keep the shard, if you can. Put it back in the mountain only when I am sure the mountain has forgiven us.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "quarry_found_heart" }],
        line: "The second shard glowed for you in the socket, as it once glowed for my sister. I have spent fifteen years trying to make the jade keep still for me. It has never once answered me.",
      },
      {
        when: [{ kind: "flag", flag: "quarry_rescued_miner" }],
        line: "You pulled a miner out from under a fall and then told me about the cut. You did both in one afternoon, and neither of them was for the Law. I am not sure what to make of that.",
      },
    ],
  },

  REPORT_HEALER: {
    id: "REPORT_HEALER",
    summary: "The player reports the healer’s hall, the calm dust and the ledger.",
    delta: { trust: 2, suspicion: -2 },
    lines: {
      hostile: "A calm dust for the disciples who hear the names. You come to me with the healer’s tale and the wardens’ purse, and you expect me to weigh them evenly. I have counted every dose, Wanderer. Do not stand in my hall and pretend you were the only one who knew.",
      wary: "Calm dust, bought for the disciples who hear the names. The healer would not sell it, you say, yet the wardens bought it from her. Tell me which of those two things you believe.",
      neutral: "The dust is real, then, and the sect has been paying for quiet. I want the ledger, Wanderer, and I want every dose written beside its name, not only the ones the healer is willing to show you.",
      warm: "A healer who refused a purse and would rather burn her ledger than let the Law read it. I have known few people so careful with names. I would like you to learn from her, as I have tried to.",
      devoted: "Master Yao is the best healer the Law Hall has ever ignored. You have carried her refusal up my steps, and that is how the sect should remember her, if it remembers anything at all.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "took_elders_note" }],
        line: "You took a note from the root cellar, in my own hand. For the wardens of the abyss path, twice a month. I wrote it. Give it back to me before you read it aloud to the masters, Wanderer, because I have not yet decided how to answer it.",
      },
      {
        when: [{ kind: "flag", flag: "took_dust_page" }],
        line: "You tore a page from the dust ledger. Do not think I cannot count the pages that are missing from it. I can count everything, and I have counted everything for fifteen years.",
      },
    ],
  },

  ASK_HERMIT: {
    id: "ASK_HERMIT",
    summary: "The player decides to climb the eastern peak to the old master who taught the Su sisters.",
    delta: { suspicion: 4, fear: 2 },
    lines: {
      hostile: "The old man on the eastern peak. You would climb his steps with the abyss open behind you and the bell silent in my hall. He taught my sister her first breath. Go, then, and ask him why he would not teach her the last one.",
      wary: "The eastern peak. Lu Ming has not come down his steps in fifteen years, and I have not gone up them. If you find him, tell him that I am still counting the lessons I learned from him, and that the sum is not yet paid.",
      neutral: "You want to climb to the hermit. He will tell you what he told us both: that the eighth method is a bargain. Listen to him. He knows more about the mist than the masters ever did.",
      warm: "Go to the old man on the peak. He was the only teacher who never asked me to choose between my sister and the sect. He will not ask you either, though he will make you listen to the wind for an hour first.",
      devoted: "You want to climb to Lu Ming’s hut. Take my blessing with you, Wanderer, which is a thing I do not give easily. Tell him the girl who shouted at the mountain is grown, and that she is afraid of what she has become.",
    },
    memory: [
      {
        when: [{ kind: "tone", tone: "deceit", min: 3, within: 4 }],
        line: "You have lied in nearly every answer lately, and now you want the one teacher who will see through every one of them. Go, if you are brave enough to be seen so clearly.",
      },
    ],
  },

  REPORT_HERMIT: {
    id: "REPORT_HERMIT",
    summary: "The player reports the teaching of breath, the bells and the old master’s bargain.",
    delta: { trust: 2, respect: 2 },
    lines: {
      hostile: "Lu Ming taught my sister the breath, and taught me the same, and neither of us listened. You come back down the steps with his tea in your belly and his bargain in your mouth. I have heard the bargain. I do not want to hear it again.",
      wary: "The old man’s breath, the bells on the ridge, a mirror that shows what is not there. You have described a teacher I half remember and half fear. Tell me exactly what he said about the eighth method, word for word.",
      neutral: "Lu Ming still refuses the eighth method, and the mist still wants a name in return. I had hoped he would have changed his mind by now. Tell me what he gave you to carry down the steps.",
      warm: "You listened to the wind on the peak, and to the old man when it was not comfortable to listen. That is the lesson he always gave, and the one I failed to learn. Thank you for coming back down with it.",
      devoted: "The breath of the mountain, the names on the bells, and a master who still believes a counted name can be called back. I never believed it, Wanderer. You have made me want to.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "heard_lu_ming_sisters" }],
        line: "Lu Ming told you which of us was which. He told everyone that. He never once told anyone which of us was braver, and I have never asked him, because I was afraid of the answer.",
      },
      {
        when: [{ kind: "flag", flag: "took_first_page" }],
        line: "You carried the first page of the sutra down the mountain, the one without the red ink. It says the mist asks only to be counted. I have wanted to read that line for fifteen years.",
      },
    ],
  },

  REPORT_BRIDGE: {
    id: "REPORT_BRIDGE",
    summary: "The player reports the Cloud Gap bridge, the tokens, the names and the disciples who crossed.",
    delta: { trust: 3, respect: 2 },
    lines: {
      hostile: "You went out on the Cloud Gap bridge with a fistful of tokens and a boy’s grief, and you expect me to thank you for the bells. Tokens are cheap, Wanderer. Names are not. Give me back the one you took, or I will have the wardens search your sleeves before the tribunal.",
      wary: "Tokens on the rail, a name off the list, a boy who could not cross. I have seen the bridge from the Law Hall windows and wondered what the disciples were doing there. Now you tell me, and I find I am not sure I wish to know.",
      neutral: "The bridge holds the names of those the Law did not count. You say one of them crossed alone. Tell me his name again, slowly, so that I can write it down myself this time.",
      warm: "You caught a falling disciple, carried a frightened boy across the middle of the span, and came to me afterward with the names. That is the work I should have been doing for fifteen years, and it is good to see it done by someone else’s hands.",
      devoted: "You have crossed the Cloud Gap for the living and the dead. Hold on to the rope, Wanderer. When the tribunal bell rings, I will count your steps across it, and I will not be ashamed of what I find.",
    },
    memory: [
      {
        when: [{ kind: "flag", flag: "bridge_helped_boy" }, { kind: "flag", flag: "bridge_caught_fall" }],
        line: "You helped a frightened boy across, and caught a proud one before he fell. I have never done either with my own hands. I hope the tribunal sees that, and I hope I do too.",
      },
      {
        when: [{ kind: "flag", flag: "carries_lu_ping_token" }],
        line: "A token with a name that was never counted, and you kept it for me. Show it to the masters at the tribunal. Let them explain to the disciples why one name was left off the list.",
      },
    ],
  },
};
