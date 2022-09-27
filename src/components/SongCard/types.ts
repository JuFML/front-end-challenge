export type SongsCard = {
  key: number;
  id: number;
  image: string;
  name: string;
  author:string;
  desc: string;
  genre: string;
  audio: string;
  favMusic: boolean;
  changeFavStatus: (id:number) => void
};
