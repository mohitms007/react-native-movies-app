import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../Themed'
import styles from './styles'

// const episode = {
//   id: 1,
//   title: 'The upbringing',
//   poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
//   duration: '25:00',
//   plot: 'This is a great episode where murder is held and everybody dies.',
//   video: 'string'
// }

export default function EpisodeItem({ episode, poster }: any) {

  return (
    <View key={episode.id} style={{ margin: 10 }}>
      <View>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + (episode.still_path ? episode.still_path : poster) }} />

          <View style={styles.titleContainer}>
            <Text style={styles.title}> {episode.name} </Text>
            <Text style={styles.duration}> {episode.air_date} </Text>
          </View>

          <AntDesign name="download" size={24} color="white" />
        </View>
        <Text style={styles.plot}>{episode.overview}</Text>
      </View>
    </View>
  )
}