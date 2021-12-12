import * as React from 'react';
import { FlatList, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';

export default function TabTwoScreen() {

  const [searchItem, setSearchItem] = React.useState("")
  const [contentType, setContentType] = React.useState("movie")
  const [searchResults, setSearchResult] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const navigation = useNavigation()

  const onSelect = (type: any) => {
    setContentType(type)
  }
  const onSearching = async () => {
    setLoading(true)
    setSearchResult([])
    const BASE_URL = "https://api.themoviedb.org/3"
    const API_KEY = "2d2a7a9eecb1625b6c46e99b817621a4"
    const TV_SEARCH_REQ = BASE_URL + `/search/tv?query=${searchItem}&api_key=` + API_KEY
    const MOVIE_SEARCH_REQ = BASE_URL + `/search/movie?query=${searchItem}&api_key=` + API_KEY
    const SEARCH_REQ = contentType === "tv" ? TV_SEARCH_REQ : MOVIE_SEARCH_REQ
    const response = await fetch(SEARCH_REQ, {
      method: 'GET',
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    setSearchResult(json.results)
    setLoading(false)
    setSearchItem("")
  }


  const onPressingResult = (item: any) => {
    // @ts-ignore
    navigation.navigate('DetailScreen', {movieDetails: item, contentType})
  }



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchItem}
        selectionColor={'gray'}
        placeholderTextColor="gray"
        value={searchItem}
        placeholder={contentType === 'tv' ? "Search for tv series" : "Search for a movie"}
        editable={contentType ? true : false}
        onSubmitEditing={onSearching}
      />
      <Text style={styles.searchType}> Select box to change search type</Text>
      <View style={styles.textContainer}>

        <Pressable onPress={() => { onSelect("tv") }} style={styles.download}>
          <Text style={styles.download_text}> Tv Series </Text>
        </Pressable>
        <Pressable onPress={() => { onSelect("movie") }} style={styles.download}>
          <Text style={styles.download_text}> Movie </Text>
        </Pressable>
      </View>
      {loading && <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}><Text style={styles.loadingText}>Loading...</Text></View>}
      <View style={styles.searchResultsContainer}>
        {searchResults && (
          <FlatList
            data={searchResults}
            numColumns={3}
            renderItem={({ item }: any) => (

              <TouchableOpacity style={{
                flex: 1 / 3,
                flexDirection: 'column',
                margin: 1
              }}
              onPress={() => onPressingResult(item)}
              >
                {item.poster_path ? (<Image style={styles.image} source={{ uri: 'http://image.tmdb.org/t/p/w500' + item.poster_path }} />) : null}
              </TouchableOpacity>
            )} />
        )}

      </View>


    </View>
  );
}
