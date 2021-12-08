import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },

  vote_average: {
    color: '#59d467',
    fontWeight: 'bold',
    marginRight: 5,
  },

  year: {
    color: '#757575',
    marginRight: 5
  },

  ageContainer: {
    backgroundColor: "#e6e229",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },

  age: {
    color: 'black',
    fontWeight: 'bold'
  },


  seasons: {
    color: 'white'
  },

  play: {
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 15
  },

  play_text: {
    fontSize: 16,
    color: 'black',
    justifyContent: "center",
    alignItems: 'center',
    fontWeight: 'bold'
  },

  download: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 15,
    marginTop: 10,
  },

  download_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  socials:{ 
    alignItems: 'center', 
    marginHorizontal: 20 
  },


  add: {
    marginBottom: 10,
  },

  addText: {
    color: 'lightgrey',
    fontSize: 12
  },

  share: {
    marginBottom: 10,
  },

  shareText: {
    color: 'lightgrey',
    fontSize: 12
  },

  rate: {
    marginBottom: 10,
  },

  rateText: {
    color: 'lightgrey',
    fontSize: 12
  }




})



export default styles;