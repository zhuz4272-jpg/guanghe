export interface PlantData {
  id: string;
  name: string;
  image: string;
  tags: {
    type: 'taboo' | 'energy'; // 'taboo' is red/yellow warning, 'energy' is black/lime
    text: string;
    icon?: string;
  }[];
  description: string;
  number: string;
}

export type AppState = 'landing' | 'generating' | 'result';
