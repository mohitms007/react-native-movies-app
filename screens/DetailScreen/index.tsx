import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { Picker } from "@react-native-picker/picker"
import React, { useState, useCallback, useEffect } from "react"
import { Text, View, Image, Pressable, FlatList, Alert, Button, ImageBackground, ScrollView } from "react-native"
import EpisodeItem from "../../components/EpisodeItem"
import styles from "./styles"
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from "@react-navigation/core"
import SeasonItem from "../../components/SeasonItem"



export default function DetailScreen() {
  const route = useRoute()
  const [mediaDetails, setMediaDetails] = useState({})
  const [cast, setCast] = useState([])
  const [seasons, setSeasons] = useState([])
  const [currentSeason, setCurrentSeason] = useState({})
  const [playing, setPlaying] = useState(false)
  //@ts-ignore


  const { id, poster_path, name, title, release_date, vote_average, adult, overview }: any = route.params.movieDetails
  //@ts-ignore
  const typeOfContent = route.params.type
  const BASE_URL = "https://api.themoviedb.org/3"
  const API_KEY = "2d2a7a9eecb1625b6c46e99b817621a4"
  const TV_DETAIL = BASE_URL + `/tv/${id}?append_to_response=videos,credits,similar,recommendations&api_key=` + API_KEY
  const MOVIE_DETAIL = BASE_URL + `/movie/${id}?append_to_response=videos,seasons,credits,similar,recommendations&api_key=` + API_KEY



  useEffect(() => {
    fetchMediaDetails()
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
    setCast(json.credits.cast)
    setSeasons(json.seasons)
    setCurrentSeason(json.seasons[0])
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


  const changeSeason = (selectedSeasonIndex:any) => {
  console.log(seasons[selectedSeasonIndex])
    setCurrentSeason(seasons[selectedSeasonIndex])
  }



  return (
    <ScrollView>
      <View style={{paddingBottom: 25}}>

        {playing && <YoutubePlayer
          height={250} play={playing} videoId={videos.results[0].key} onChangeState={onStateChange} />}
        {!playing && <ImageBackground style={styles.blurImage} source={{ uri: 'http://image.tmdb.org/t/p/w500' + poster_path }} blurRadius={30} >

          {!playing && <Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + poster_path }} />}
          {/* Play Button */}
          {videos?.results.length === 0 ? null : <Pressable onPress={() => { setPlaying(!playing) }} style={styles.play}>
            <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="white" /> {playing ? "Pause" : "Play Trailer"}</Text>
          </Pressable>
          }

        </ImageBackground>}

        {playing && <Pressable onPress={() => { setPlaying(!playing) }} style={styles.play}>
          <Text style={styles.play_text}> <Entypo name="controller-play" size={16} color="white" /> {playing ? "Pause" : "Play Trailer"}</Text>
        </Pressable>
        }
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
          <Text style={styles.castText}> Cast: {cast?.slice(0, 5).map((item: any, index) => {

            const intialItem = index !== cast?.slice(0, 5).length - 1
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
          selectedValue={currentSeason}
          dropdownIconColor="white"
          onValueChange={(itemValue,itemPosition) => { changeSeason(itemPosition) }}
          style={styles.pickerStyle}
        >
          {seasons.map((item) => {
            const { name, season_number } = item
            
            return <Picker.Item key={season_number} label={name} value={item.season_number} />
          })}
        </Picker>}
      </View>
      <SeasonItem seasonDetails={currentSeason} />    
    </ScrollView>
  )

}
