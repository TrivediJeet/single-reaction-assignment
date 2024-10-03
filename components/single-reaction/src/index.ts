export interface Reaction {
  unicode: string;
  count: number;
  reacted: boolean;
}

export const defaultReactions: Reaction[] = [
  {
    unicode: "+",
    count: -1,
    reacted: false,
  },
];

export const unicodeEmojiMapping = {
  Happy: "😀",
  "Heart Eyes": "😍",
  Joy: "🤣",
  Celebrate: "🎉",
  Thinking: "🤔",
  Indifferent: "😐",
  Embarrassed: "😳",
  Sad: "😢",
  Wow: "😮",
  Shocked: "😱",
  Distressed: "😫",
  Pleading: "🥺",
  "Thumbs Up": "👍",
  "Thumbs Down": "👎",
  "Thank you": "🙏",
  Wave: "👋",
  "Raised Hands": "🙌",
  Strong: "💪",
  Eyes: "👀",
  Rainbow: "🌈",
  Luck: "🍀",
  Love: "❤️",
  Sparkles: "✨",
  Unicorn: "🦄",
  Fire: "🔥",
  Money: "💵",
  Idea: "💡",
  Done: "✅",
  "Not Done": "❌",
  Caution: "⚠️",
};

export type ReactionsMap = Map<string, Reaction>;

export const reactions: ReactionsMap = new Map(
  Object.entries(unicodeEmojiMapping).map(([name, unicode]) => [
    name,
    {
      unicode,
      count: 0,
      reacted: false,
    },
  ])
);
