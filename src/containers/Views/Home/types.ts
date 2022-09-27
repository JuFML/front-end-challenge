export type Song = {
  id: number;
  audio: {url: string};
  genre: string;
  image: string;
  name: string;
  author: {name: string};
  description: string;
  favMusic: boolean
};
