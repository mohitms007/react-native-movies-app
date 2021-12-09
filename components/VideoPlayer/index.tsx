import React from 'react'
import { View } from 'react-native'

interface VideoPlayerProps {
  episode: {
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot: string,
    video: string,
  }
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <View>


    </View>
  )
}
