import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
    borderRadius: 3,
  },

  titleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },

  title: {

  },

  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },

  plot: {
    color: 'darkgrey',
    paddingHorizontal: 5
  },
})


export default styles;