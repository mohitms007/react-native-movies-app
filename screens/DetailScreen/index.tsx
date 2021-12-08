import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { Text, View, Image, Pressable, FlatList } from "react-native"
import EpisodeItem from "../../components/EpisodeItem"
import styles from "./styles"

const movie = {
  "backdrop_path": "/pkOSjcllDSs4WP9i8DGkw9VgF5Q.jpg",
  "first_air_date": "2015-07-06",
  "genre_ids": [
    10764,
    10751
  ],
  "id": 63452,
  "name": "Friends",
  "origin_country": [
    "DE"
  ],
  "original_language": "de",
  "original_name": "Friends",
  "overview": "",
  "popularity": 777.538,
  "poster_path": "/abKjah96esLWObidBcWmvKJv61E.jpg",
  "vote_average": 8,
  "vote_count": 7
}




export default function DetailScreen() {

  return (
    <View>
      <Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + movie.poster_path }} />
      <FlatList
        data={movies}
        style={{marginBottom: 250}}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        ListHeaderComponent={(
          <View>
            <View style={{ padding: 12 }} >
              <Text style={styles.title}>{movie.name}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.vote_average}>Score: {movie.vote_average} </Text>
                <Text style={styles.year}> {movie.first_air_date} </Text>

                <View style={styles.ageContainer}>
                  <Text style={styles.age}> 12+ </Text>
                </View>
                <Text style={styles.seasons}> 9 Seasons </Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
            </View>



            {/* Play Button */}
            <Pressable onPress={() => { console.warn('Plage 1') }} style={styles.play}>
              <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="black" /> Play </Text>
            </Pressable>


            {/* Download Button */}
            <Pressable onPress={() => { console.warn('Download') }} style={styles.download}>
              <Text style={styles.download_text}> <AntDesign style={{ color: 'white', marginRight: 5 }} name="download" size={16} color="black" /> {' '}Download </Text>
            </Pressable>


            {/* Row with icon buttons */}
            <View style={{ flexDirection: 'row', marginTop: 20 }} >
              <View style={styles.socials}>
                <AntDesign style={styles.add} name="plus" size={22} color="white" />
                <Text style={styles.addText}> Add to My List</Text>
              </View>
              <View style={styles.socials}>
                <Feather style={styles.rate} name="thumbs-up" size={22} color="white" />
                <Text style={styles.rateText}> Rate </Text>
              </View>
              <View style={styles.socials}>
                <Ionicons style={styles.share} name="share-social" size={22} color="white" />
                <Text style={styles.shareText}> Share </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>

  )

}





const movies = [
  {
    id: 1,
    title: 'The upbringingh',
    poster: 'https://lh3.googleusercontent.com/proxy/gft5ACBD9PcEYPzQU2Bw7WCNkQbqyc3qQH3xKwTnoBQDAbnLgdbnU7e9RQ40onaMQCYUKRUjJ5L4dqWiawIrpjHSQkpKN4Rrh1SLXDQESHsDDiOs4ADrQNPyRZt5ECt448ot7AfBOcRV--SZncsz6cFZcpG6n4xF7GAiKFYkhs0AsVMAedP880IueoRrRBEii9BcnEAlfpEnKh6oZc71bK8aBZUhqEKhsqyFLM1NdKW6fgPLIxeGc10',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.asnfjkdnafkjdnjfndkfjdanjfkadsnkjfndsakjnc dsnfjdsanfjkdasnkfnsdak n naskjfnjkasdnf jknf a',
    video: 'string'
  },
  {
    id: 2,
    title: 'The dangerous',
    poster: 'https://lh3.googleusercontent.com/proxy/gft5ACBD9PcEYPzQU2Bw7WCNkQbqyc3qQH3xKwTnoBQDAbnLgdbnU7e9RQ40onaMQCYUKRUjJ5L4dqWiawIrpjHSQkpKN4Rrh1SLXDQESHsDDiOs4ADrQNPyRZt5ECt448ot7AfBOcRV--SZncsz6cFZcpG6n4xF7GAiKFYkhs0AsVMAedP880IueoRrRBEii9BcnEAlfpEnKh6oZc71bK8aBZUhqEKhsqyFLM1NdKW6fgPLIxeGc10',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
  {
    id: 3,
    title: 'The third',
    poster: 'https://lh3.googleusercontent.com/proxy/gft5ACBD9PcEYPzQU2Bw7WCNkQbqyc3qQH3xKwTnoBQDAbnLgdbnU7e9RQ40onaMQCYUKRUjJ5L4dqWiawIrpjHSQkpKN4Rrh1SLXDQESHsDDiOs4ADrQNPyRZt5ECt448ot7AfBOcRV--SZncsz6cFZcpG6n4xF7GAiKFYkhs0AsVMAedP880IueoRrRBEii9BcnEAlfpEnKh6oZc71bK8aBZUhqEKhsqyFLM1NdKW6fgPLIxeGc10',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
  {
    id: 4,
    title: 'The fourth',
    poster: 'https://lh3.googleusercontent.com/proxy/gft5ACBD9PcEYPzQU2Bw7WCNkQbqyc3qQH3xKwTnoBQDAbnLgdbnU7e9RQ40onaMQCYUKRUjJ5L4dqWiawIrpjHSQkpKN4Rrh1SLXDQESHsDDiOs4ADrQNPyRZt5ECt448ot7AfBOcRV--SZncsz6cFZcpG6n4xF7GAiKFYkhs0AsVMAedP880IueoRrRBEii9BcnEAlfpEnKh6oZc71bK8aBZUhqEKhsqyFLM1NdKW6fgPLIxeGc10',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  }
]
