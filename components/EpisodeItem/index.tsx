import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { Text, View } from '../Themed'
import styles from './styles'

const episode = {
  id: 1,
  title: 'The upbringing',
  poster: 'https://lh3.googleusercontent.com/proxy/gft5ACBD9PcEYPzQU2Bw7WCNkQbqyc3qQH3xKwTnoBQDAbnLgdbnU7e9RQ40onaMQCYUKRUjJ5L4dqWiawIrpjHSQkpKN4Rrh1SLXDQESHsDDiOs4ADrQNPyRZt5ECt448ot7AfBOcRV--SZncsz6cFZcpG6n4xF7GAiKFYkhs0AsVMAedP880IueoRrRBEii9BcnEAlfpEnKh6oZc71bK8aBZUhqEKhsqyFLM1NdKW6fgPLIxeGc10',
  duration: '25:00',
  plot: 'This is a great episode where murder is held and everybody dies.',
  video: 'string'
}

export default function EpisodeItem() {
  return (
    <View style={{marginVertical: 7}}>
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