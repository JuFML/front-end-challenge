import { useState } from 'react';

import { Text } from '$/components/Text';

import { Container, SearchInput } from './styles';

import USESWR from 'swr'
import axios from 'axios'

function HomeView(): JSX.Element {

  const [fetchSongs, setFetchSongs] = useState([])
  
  const QUERY = `
    query {
      songs {
        songs {
          id
          audio {
            url
          }
          genre
          image
          name
          author {name}
          description
        }
      }
    }
  `
  const fetcher = (query:string) => 
    axios
      .post('https://api-frontend-challenge.herokuapp.com/graphql', { query })
      .then(res => {
        let data = res.data.data.songs.songs

        const favSongs = localStorage.getItem("favSongs")?.split(",").map(song => Number(song)) || []
        const songs = data.map( (song: Song) => ({
          ...song, favMusic: favSongs.includes(song.id)
        }) )

        setFetchSongs(songs)
      })
  
  USESWR(QUERY, fetcher)
  

  const changeFavStatus = (idClickedSong: number) => {
    const songs = fetchSongs.map( (song: Song) => (
      song.id == idClickedSong ? ({...song, favMusic: !song.favMusic}) : song
    ))
      
    setFetchSongs(songs)

    const favMusics = songs
      .filter( song => song.favMusic)
      .map( song => song.id)

    console.log(favMusics)
    localStorage.setItem("favSongs", favMusics)

    
  }

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
    </Container>
  );
}

export default HomeView;
