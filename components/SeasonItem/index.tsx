import React from 'react'
import { View } from 'react-native'
import EpisodeItem from '../EpisodeItem'
import styles from './styles'


function SeasonItem({seasonDetails}: any) {
  console.log(seasonDetails)
  return (
    <View>
      <EpisodeItem />
    </View>
  )
}

export default SeasonItem
