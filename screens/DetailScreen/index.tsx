import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Picker } from "@react-native-picker/picker"
import React, { useState, useCallback, useEffect } from "react"
import { Text, View, Image, Pressable, FlatList, Alert, Button, ImageBackground } from "react-native"
import EpisodeItem from "../../components/EpisodeItem"
import styles from "./styles"
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from "@react-navigation/core"



// {
//   "backdrop_path": "/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg",
//   "created_by": [
//       {
//           "id": 1757552,
//           "credit_id": "602c5041cedac4003f4ff8ec",
//           "name": "Jonathan Igla",
//           "gender": 2,
//           "profile_path": "/qZEOruWxWZZMGXPnQcSDC38w1R2.jpg"
//       }
//   ],
//   "episode_run_time": [
//       50
//   ],
//   "first_air_date": "2021-11-24",
//   "genres": [
//       {
//           "id": 10759,
//           "name": "Action & Adventure"
//       },
//       {
//           "id": 18,
//           "name": "Drama"
//       }
//   ],
//   "homepage": "https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l",
//   "id": 88329,
//   "in_production": true,
//   "languages": [
//       "en"
//   ],
//   "last_air_date": "2021-12-08",
//   "last_episode_to_air": {
//       "air_date": "2021-12-08",
//       "episode_number": 4,
//       "id": 3301367,
//       "name": "Partners, Am I Right?",
//       "overview": "Secrets are revealed and hard truths emerge, culminating in a battle against two opposing forces.",
//       "production_code": "",
//       "season_number": 1,
//       "still_path": "/3K3CPASP9NhbxPwkSvCskRpmzTL.jpg",
//       "vote_average": 7.286,
//       "vote_count": 7
//   },
//   "name": "Hawkeye",
//   "next_episode_to_air": {
//       "air_date": "2021-12-15",
//       "episode_number": 5,
//       "id": 3301368,
//       "name": "",
//       "overview": "",
//       "production_code": "",
//       "season_number": 1,
//       "still_path": null,
//       "vote_average": 0,
//       "vote_count": 0
//   },
//   "networks": [
//       {
//           "name": "Disney+",
//           "id": 2739,
//           "logo_path": "/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png",
//           "origin_country": "US"
//       }
//   ],
//   "number_of_episodes": 6,
//   "number_of_seasons": 1,
//   "origin_country": [
//       "US"
//   ],
//   "original_language": "en",
//   "original_name": "Hawkeye",
//   "overview": "Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a superhero. The two are forced to work together when a presence from Barton’s past threatens to derail far more than the festive spirit.",
//   "popularity": 5678.655,
//   "poster_path": "/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
//   "production_companies": [
//       {
//           "id": 420,
//           "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//           "name": "Marvel Studios",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "seasons": [
//       {
//           "air_date": "2021-11-24",
//           "episode_count": 6,
//           "id": 122165,
//           "name": "Season 1",
//           "overview": "",
//           "poster_path": "/rp378be6RvDNGuPWn4eNCCCxXbE.jpg",
//           "season_number": 1
//       }
//   ],
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Returning Series",
//   "tagline": "This holiday season, the best gifts come with a bow.",
//   "type": "Miniseries",
//   "vote_average": 8.6,
//   "vote_count": 650
// }

export default function DetailScreen() {
  const route = useRoute()
  const [mediaDetails, setMediaDetails] = useState({})
  const [cast, setCast] = useState([])


  const [selectedSeason, setSelectedSeason] = useState('s1')
  const [playing, setPlaying] = useState(false)
  //@ts-ignore


  const { id, poster_path, name, title, release_date, vote_average, adult, overview }: any = route.params.movieDetails
  //@ts-ignore
  const typeOfContent = route.params.type
  const BASE_URL = "https://api.themoviedb.org/3"
  const API_KEY = "2d2a7a9eecb1625b6c46e99b817621a4"
  const TV_DETAIL = BASE_URL + `/tv/${id}?append_to_response=videos&api_key=` + API_KEY
  const MOVIE_DETAIL = BASE_URL + `/movie/${id}?append_to_response=videos&api_key=` + API_KEY
  const MOVIE_CREDITS = BASE_URL + `/movie/${id}/credits?api_key=` + API_KEY
  const TV_CREDITS = BASE_URL + `/tv/${id}/credits?api_key=` + API_KEY


  useEffect(() => {
    fetchMediaDetails()
    fetchCast()
  }, [])

  const fetchMediaDetails = async () => {
    const tv = typeOfContent === 'tv'
    const MEDIA_DETAIL = tv ? TV_DETAIL : MOVIE_DETAIL
    const response = await fetch(MEDIA_DETAIL, {
      method: 'GET',
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    setMediaDetails(json)

  }

  const fetchCast = async () => {
    const tv = typeOfContent === 'tv'
    const CAST = tv ? TV_CREDITS : MOVIE_CREDITS
    const response = await fetch(CAST, {
      method: 'GET',
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    setCast(json.cast)

  }


  const { created_by, number_of_seasons, videos }: any = mediaDetails

  const ageStyles = {
    backgroundColor: adult ? '#ff2400' : '#e6e229'
  };

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  },
    []);

  const seasons = []
  for (let i = 0; i < number_of_seasons; i++) {
    seasons.push({ value: 's' + (i + 1), label: 'Season ' + (i + 1) })
  }



  return (
    <View>
   
      <ImageBackground style={styles.blurImage} source={{ uri: 'http://image.tmdb.org/t/p/w500' + poster_path }} blurRadius={30} >
      {playing && <YoutubePlayer
        height={250} play={playing} videoId={videos.results[0].key} onChangeState={onStateChange} />}
        {!playing && <Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + poster_path }} />}
        {/* Play Button */}
        {videos?.results.length === 0 ? null : <Pressable onPress={() => { setPlaying(!playing) }} style={styles.play}>
          <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="white" /> {playing ? "Pause" : "Play Trailer"}</Text>
        </Pressable>
        }

      </ImageBackground>
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
      <FlatList
        data={movies}
        style={{ marginBottom: 250 }}
        contentContainerStyle={{ paddingBottom: 220 }}
        //@ts-ignore
        renderItem={({ item }) => {
          return typeOfContent === "tv" ? <EpisodeItem key={item.id} episode={item} /> : null
        }}

        ListHeaderComponent={(
          <View>

            <View style={{ padding: 12 }} >
              <Text style={styles.title}>{name ? name : title}</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.vote_average}>Score: {vote_average} </Text>
                <Text style={styles.year}> {release_date} </Text>

                <View style={styles.ageContainer}>
                  <Text style={[styles.age, ageStyles]}> {adult ? '18+' : '12+'} </Text>
                </View>
                {typeOfContent === 'tv' && number_of_seasons > 0 && <Text style={styles.seasons}> {number_of_seasons > 1 ? number_of_seasons + ' Seasons' : number_of_seasons + ' Season'} </Text>}
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
            </View>



            {/* Play Button
            {videos?.results.length === 0 ? null : <Pressable onPress={() => { setPlaying(!playing) }} style={styles.play}>
              <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="black" /> {playing ? "Pause" : "Play Trailer"}</Text>
            </Pressable>
            }
            


            //Download Button
            <Pressable onPress={() => { console.warn('Download') }} style={styles.download}>
              <Text style={styles.download_text}> <AntDesign style={{ color: 'white', marginRight: 5 }} name="download" size={16} color="black" /> {' '}Download </Text>
            </Pressable>  */}

            <View style={styles.overview}>
              <Text style={styles.overviewText}> {overview}</Text>
            </View>

            <View style={styles.mediaCast}>
              <Text style={styles.castText}> Cast: {cast.slice(0, 5).map((item: any, index) => {

                const intialItem = index !== cast.slice(0, 5).length - 1
                if (intialItem) {
                  return `${item.name}, `
                } else {
                  return `${item.name}`
                }

              })}</Text>
            </View>


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

            {typeOfContent === 'tv' && <Picker
              selectedValue={selectedSeason}
              dropdownIconColor="white"
              onValueChange={(itemValue, itemIndex) => { setSelectedSeason(itemValue) }}
              style={styles.pickerStyle}
            >
              {seasons.map((item) => {
                const { label, value } = item
                return <Picker.Item key={value} label={label} value={value} />
              })}
            </Picker>}
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
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.asnfjkdnafkjdnjfndkfjdanjfkadsnkjfndsakjnc dsnfjdsanfjkdasnkfnsdak n naskjfnjkasdnf jknf a',
    video: 'string'
  },
  {
    id: 2,
    title: 'The dangerous',
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
  {
    id: 2,
    title: 'The dangerous',
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
  {
    id: 3,
    title: 'The dangerous',
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
  {
    id: 4,
    title: 'The dangerous',
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2019/12/kgf-chapter-2-first-look-out-yash-takes-the-story-forward-on-his-shoulders-literally-001.jpg',
    duration: '25:00',
    plot: 'This is a great episode where murder is held and everybody dies.',
    video: 'string'
  },
]
