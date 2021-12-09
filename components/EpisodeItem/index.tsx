import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../Themed'
import styles from './styles'

const episode = {
  id: 1,
  title: 'The upbringing',
  poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
  duration: '25:00',
  plot: 'This is a great episode where murder is held and everybody dies.',
  video: 'string'
}

export default function EpisodeItem() {
  return (
    <View style={{margin: 10}}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: episode.poster}} />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {episode.title} </Text>
          <Text style={styles.duration}> {episode.duration} </Text>
        </View>

        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  )
}