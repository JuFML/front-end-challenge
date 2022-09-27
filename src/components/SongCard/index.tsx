import React, { useState } from 'react';

import {
  Container,
  HeartIcon,
  Image,
  MusicInfos,
  PlayButton,
  PlayControl,
  TagGenre,
} from './styles';
import { SongsCard } from './types';

export const SongCard: React.FC<SongsCard> = ({
  image,
  name,
  author,
  desc,
  genre,
  id,
  audio,
  favMusic,
  changeFavStatus,
}) => {
  const [heartMusic, setHeartMusic] = useState(false);

  const changeHeart = () => {
    setHeartMusic(!heartMusic);
  };

  const handleClick = (id: number) => {
    changeHeart();
    changeFavStatus(id);
  };

  return (
    <Container>
      <div className="upper-card-mob">
        <Image src={image} />
        <HeartIcon fav={favMusic} onClick={() => handleClick(id)}>
          <div className="heart-icon-mob"></div>
        </HeartIcon>
      </div>
      <MusicInfos>
        <h3>{name}</h3>
        <p className="author">{author}</p>
        <p className="desc">{desc}</p>
        <PlayControl>
          <PlayButton id="player" controls controlsList="nodownload">
            <source src={audio} type="audio/mp3" />
          </PlayButton>
          <TagGenre>{genre}</TagGenre>
        </PlayControl>
      </MusicInfos>
      <HeartIcon fav={favMusic} onClick={() => handleClick(id)}>
        <div className="heart-icon-desk"></div>
      </HeartIcon>
    </Container>
  );
};
