import styled from 'styled-components';

import HeartGrey from '$/assets/icons/icon-heart-grey.png';
import HeartPink from '$/assets/icons/icon-heart-pink.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  margin-top: 30px;

  @media (max-width: 1060px) {
    flex-direction: column;
    height: auto;
    // align-items: center;

    div.upper-card-mob {
      display: flex;
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 12px;
`;

export const MusicInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

  @media (max-width: 1060px) {
    padding-left: 0;
    width: 100%;
  }

  h3 {
    font-size: 16px
    margin-bottom: 3px;
    font-weight: 700;
    line-height: 24px;
  }

  p.author {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  p.desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 5px
  }
`;

export const PlayControl = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1060px) {
    margin-top: 10px;
  }

  @media (max-width: 510px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const PlayButton = styled.audio`
  margin-right: 15px;
  height: 35px;
`;

export const TagGenre = styled.div`
  padding: 0 8px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1f4fb;
  font-size: 12px;
  font-weight: 400;
  border-radius: 47px;

  @media (max-width: 510px) {
    margin-bottom: 10px;
  }
`;

export const HeartIcon = styled.div<{ fav: boolean }>`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1060px) {
    .heart-icon-desk {
      display: none;
    }
  }

  @media (min-width: 1060px) {
    .heart-icon-mob {
      display: none;
    }
  }

  div {
    width: 25px;
    height: 25px;
    background-image: url(${({ fav }) => (fav ? HeartPink : HeartGrey)});
    background-repeat: no-repeat;
  }
`;
