import { PlantData } from './types';

// Images replaced with reliable Unsplash sources for better stability and CORS support
export const IMAGES = {
  // A small sprout in soil
  SEED: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
  // Cactus
  CACTUS: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
  // Mimosa/Fern (using a fern-like plant)
  MIMOSA: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
  // Monstera Leaf
  MONSTERA: "https://images.unsplash.com/photo-1637967886160-fd78dc39b8dc?q=80&w=800&auto=format&fit=crop",
  // Rose
  ROSE: "https://images.unsplash.com/photo-1548565495-a69251842c3b?q=80&w=800&auto=format&fit=crop",
  
  // Abstract Textures (Replacing http transparenttextures with Unsplash abstract for better HTTPS support)
  TEXTURE_CUBES: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
  TEXTURE_DIAMONDS: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=1000&auto=format&fit=crop"
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