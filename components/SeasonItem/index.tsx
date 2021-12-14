import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import EpisodeItem from '../EpisodeItem'
import styles from './styles'


function SeasonItem({seasonDetails, tvId, poster}: any) {
  

  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    getSeason()
  }, [seasonDetails])

  const getSeason =  async() => {
    const MEDIA_DETAIL = `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonDetails.season_number}?append_to_response=episodes&api_key=2d2a7a9eecb1625b6c46e99b817621a4`
    const response = await fetch(MEDIA_DETAIL, {
      method: 'GET',
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    setEpisodes(json.episodes)
  }


  return (
    <View>
      {episodes?.map((item) =>   <EpisodeItem key={item.id} episode={item} poster={poster}/>)}
    </View>
  )
}

export default SeasonItem
