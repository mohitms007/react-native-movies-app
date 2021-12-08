import * as React from 'react';
import { FlatList, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import DetailScreen from '../../screens/DetailScreen';
import styles from './styles';


interface HomeCategoryProps {
  category: string,
  title: string,
  keyword_id?: string,
  type: string
}

const HomeCategory = (props: HomeCategoryProps) => {

  const [movieList, setMovieList] = React.useState([])
  const {title, category, keyword_id, type} = props
  React.useEffect(() => {
    getPopularMovies()
  }, [])

  const getPopularMovies: any = () => {
    const API_KEY = "2d2a7a9eecb1625b6c46e99b817621a4"
    const BASE_URL = "https://api.themoviedb.org/3"
    const DISCOVER_URL = BASE_URL + `/discover/${type}?sort_by=popularity_desc&with_keywords=${keyword_id}&api_key=` + API_KEY
    const POPULAR_URL = BASE_URL + `/${type}/popular?sort_by=popularity_desc&api_key=` + API_KEY
    const TOP_RATED_URL = BASE_URL + `/${type}/top_rated?sort_by=popularity_desc&api_key=` + API_KEY
    let APP_URL = DISCOVER_URL

    switch(category) {
      case "popular":
        APP_URL = POPULAR_URL
        break;
      case "top_rated":
        APP_URL = TOP_RATED_URL
        break;      
    }

    fetch(APP_URL).then(response => response.json())
      .then(data => setMovieList(data.results));

  }

  return (
    <>
      <Text style={styles.title}> {title} </Text>
      {movieList && (
        <FlatList
          data={movieList}
          horizontal
          renderItem={({ item }: any) => (
            <View>
              {item.poster_path ? (<Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + item.poster_path }} />) : null}
            </View>
          )} />
      )}
    </>
  );
}

export default HomeCategory