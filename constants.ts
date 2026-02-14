import { PlantData } from './types';

// Images from the provided HTML source
export const IMAGES = {
  SEED: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF34Ii0plS7mdXWwWl1j-6Hu6oO6VoP8ARIDrctcTCFpMwHWs0Btgpd9w-V3RA8F0uh2BXPy1epLCRc7MnYZ68_a7eYRBr2a0rlHsjbFRuHq5AvhI9eWORCXHZUC2kNzcjCJ2dMmbIDmfTRB5Z7bz0eessgS-Nf-dqUbqc4Y6MEl1Y73eb8rBQaNAqrTbwnJSoOmWFYRniZfHqw2QDLTMaGubBwvLpLwl6e9W5c5mIotl4JXm6_nEzhH0IZnPIQctUDeiWVkEXNLw9",
  CACTUS: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEM-qbcyRXYlPXv93XmvhABcYik8DYRUaPUkq2FlA35zC0P_2kDl_hwA0XejOtXs5IHehdi6btKbV2fUFfg60bUW2_bCsz8QTMqMo1ENfFV-i0TtLHW7mwaAqLPDZshCMiItKb1OHcXJKPusqElJijOGcQ1zKmgHytJxK6sQX4CmjdnhS-iE9lUQrvf_WzcMO1PX2-InpajrbGn0saeJfL9OSOfxf2EzvnUhAq3zeFjcbbQ_amA-klbHIdcrHVSMVZenHaCbid50Tz",
  // Using high-quality 3D fluent emojis as placeholders for other plants to match the vibe
  MIMOSA: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals%20Nature/Potted%20Plant.png",
  MONSTERA: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals%20Nature/Leaf%20Fluttering%20in%20Wind.png", 
  ROSE: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals%20Nature/Rose.png",
  TEXTURE_CUBES: "https://www.transparenttextures.com/patterns/cubes.png",
  TEXTURE_DIAMONDS: "https://www.transparenttextures.com/patterns/diagmonds-light.png"
};

export const SOUNDS = {
  // Subtle Pop/Click for UI interactions
  CLICK: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
  // Water splash for the main action
  WATER: "https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3",
  // Success/Magic chime for reveal
  SUCCESS: "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3",
};

export const PLANT_RESULTS: PlantData[] = [
  {
    id: 'cactus-01',
    name: '暴躁仙人掌',
    image: IMAGES.CACTUS,
    number: '0824',
    tags: [
      {
        type: 'energy',
        text: '你的今日植被',
        icon: 'zap'
      },
      {
        type: 'taboo',
        text: '忌 · 随便抱抱',
        icon: 'shield-alert'
      }
    ],
    description: '浑身是刺不是你的错，是世界太挤了。保持距离产生美，今天谁惹你你就扎谁。'
  },
  {
    id: 'mimosa-02',
    name: '社恐含羞草',
    image: IMAGES.MIMOSA,
    number: '1021',
    tags: [
      { type: 'energy', text: '高敏感预警', icon: 'eye' },
      { type: 'taboo', text: '忌 · 过度社交', icon: 'stop-circle' }
    ],
    description: '稍有风吹草动就想闭关。在此声明：我不是高冷，我只是在进行光合作用时需要绝对安静。'
  },
  {
    id: 'monstera-03',
    name: '躺平龟背竹',
    image: IMAGES.MONSTERA,
    number: '0315',
    tags: [
      { type: 'energy', text: '光合作用MAX', icon: 'sun' },
      { type: 'taboo', text: '忌 · 毫无意义的卷', icon: 'coffee' }
    ],
    description: '只要叶子开得够大，就能挡住更多的烦恼。今天的目标是：像植物一样静止，像光一样自由。'
  },
  {
    id: 'rose-04',
    name: '戏精红玫瑰',
    image: IMAGES.ROSE,
    number: '0520',
    tags: [
      { type: 'energy', text: 'C位出道', icon: 'star' },
      { type: 'taboo', text: '忌 · 被当成背景板', icon: 'camera' }
    ],
    description: '我不带刺怎么保护我的美丽？生活不仅需要光合作用，更需要一点点drama和很多很多的掌声。'
  }
];