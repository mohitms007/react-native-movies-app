import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '30%',
    height: '80%',
    marginHorizontal: 'auto',
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    aspectRatio: 4 / 5,
    resizeMode: 'contain',
    borderRadius: 5,
    marginBottom: 15,
  },
  
  blurImage: {
    display: "flex",
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    // aspectRatio: 16 / 9,
    height: 450,
    // resizeMode: 'contain',
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
    borderRadius: 10,
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
    backgroundColor: '#E50914',
    justifyContent: "center",
    alignItems: 'center',
    padding: 5,

    borderRadius: 3,
    marginHorizontal: 15
  },

  play_text: {
    fontSize: 16,
    color: 'white',
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
  },

  pickerStyle: {
    color: 'white',
    width: 200,
    marginLeft: 15,
  },

  overview: {
    margin: 15,
    padding: 5,
    textAlign: 'left'
  },

  overviewText: {
    color: 'white'
  },

  mediaCast: {
    marginHorizontal: 15,
    marginVertical: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    // textAlign: 'left'
  },
  castText: {
    fontSize: 12,
    color: 'lightgrey'
  }

})



export default styles;