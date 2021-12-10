import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        marginTop: 25,
        justifyContent: 'center',
    },


    input : {
        padding: 8,
        backgroundColor: '#2E2E2E',
        borderRadius: 25,
        color: 'white'
    },

    textContainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
    },

    download: {
        // backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        marginHorizontal: 15,
        marginTop: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
    
      download_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
    
      searchType: {
          padding: 15,
          margin: 5,
          fontSize: 18
      },
      image: {
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchResultsContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        justifyContent: 'center',
    },
  

    
   

})


export default styles