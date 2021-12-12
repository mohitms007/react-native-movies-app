import * as React from 'react';
import { FlatList } from 'react-native';
import HomeCategory from '../../components/HomeCategory';
import { Text, View } from '../../components/Themed';
import styles from "./style";


const HomeScreen = () => {


  const data = [
    {id:1, title: 'Popular Movies', category: "popular", type: "movie" },
    { id:2,title: 'Top Rated Movies', category: "top_rated", type: "movie" },
    { id:3,title: 'Trending TV Series', category: "trending", type: "tv" },
    { id:4,title: 'Popular on this app', category: "popular", type: "tv" },
    { id:5,title: 'Top Rated TV', category: "top_rated", type: "tv" },
    { id:6,title: 'Popular Anime', category: "discover", type: "tv", keyword_id:"210024" },
    ]

  return (
    <View style={styles.container}>
      <FlatList data={data}
        renderItem={({ item }: any) => {
         const {title, category, id,type, keyword_id} = item
         return (
           <HomeCategory key={id} title={title} category={category} type={type} keyword_id={keyword_id}/>
         ) 
        }} />
    </View>
  );
}

export default HomeScreen




const TOP_RATED_MOVIES = "/movie/top_rated"
const popular = "GET/movie/popular"