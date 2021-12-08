import * as React from 'react';
import { FlatList, Image, ScrollView } from 'react-native';
import HomeCategory from '../../components/HomeCategory';
import { Text, View } from '../../components/Themed';
import styles from "./style";


const HomeScreen = () => {


  const data = [
    { title: 'Popular Movies', category: "popular", type: "movie" },
    { title: 'Top Rated Movies', category: "top_rated", type: "movie" },
    { title: 'Trending TV Series', category: "trending", type: "tv" },
    { title: 'Popular on this app', category: "popular", type: "tv" },
    { title: 'Top Rated TV', category: "top_rated", type: "tv" },
    { title: 'Popular Anime', category: "discover", type: "tv", keyword_id:"210024" },
    ]

  return (
    <View style={styles.container}>
      <FlatList data={data}
        renderItem={({ item }: any) => {
         const {title, category, type, keyword_id} = item
         return (
           <HomeCategory title={title} category={category} type={type} keyword_id={keyword_id}/>
         ) 
        }} />
    </View>
  );
}

export default HomeScreen




const TOP_RATED_MOVIES = "/movie/top_rated"
const popular = "GET/movie/popular"


// const genres = {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 99,
//       "name": "Documentary"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
//     {
//       "id": 36,
//       "name": "History"
//     },
//     {
//       "id": 27,
//       "name": "Horror"
//     },
//     {
//       "id": 10402,
//       "name": "Music"
//     },
//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 10752,
//       "name": "War"
//     },
//     {
//       "id": 37,
//       "name": "Western"
//     }
//   ]
// }