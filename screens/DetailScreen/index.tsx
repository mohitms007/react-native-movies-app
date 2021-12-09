import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Picker } from "@react-native-picker/picker"
import React, { useState, useCallback } from "react"
import { Text, View, Image, Pressable, FlatList, Alert, Button } from "react-native"
import EpisodeItem from "../../components/EpisodeItem"
import styles from "./styles"
import YoutubePlayer from "react-native-youtube-iframe";

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

  const [selectedSeason, setSelectedSeason] = useState('s1')
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  },
    []);

  return (
    <View>
      {playing ? <YoutubePlayer
        height={250} play={playing} videoId={"iee2TATGMyI"} onChangeState={onStateChange} /> : <Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + movie.poster_path }} />}
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      <FlatList
        data={movies}
        style={{ marginBottom: 250 }}
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
            <Pressable onPress={() => { setPlaying(!playing) }} style={styles.play}>
              <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="black" /> {playing ? "Pause" : "Play"}</Text>
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

            <Picker
              selectedValue={selectedSeason}
              dropdownIconColor="white"
              onValueChange={(itemValue, itemIndex) => { setSelectedSeason(itemValue) }}
              style={styles.pickerStyle}
            >
              {seasons.map((item) => {
                const { label, value } = item
                return <Picker.Item key={value} label={label} value={value} />
              })}
            </Picker>
          </View>
        )}
      />
    </View>

  )

}


const seasons = [{ label: 'Season 1', value: 's1' }, { label: 'Season 2', value: 's2' }, { label: 'Season 3', value: 's3' }, { label: 'Season 4', value: 's4' }]


const movies = [
  {
    id: 1,
    title: 'The upbringingh',
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.asnfjkdnafkjdnjfndkfjdanjfkadsnkjfndsakjnc dsnfjdsanfjkdasnkfnsdak n naskjfnjkasdnf jknf a',
    video: 'string'
  },
  {
    id: 2,
    title: 'The dangerous',
    poster: 'http://image.tmdb.org/t/p/w500' + movie.poster_path,
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
]
