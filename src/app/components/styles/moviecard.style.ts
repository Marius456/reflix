import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 24,
    backgroundColor: 'rgb(33, 33, 33)',
    borderRadius: 16,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },

  imageContainer: {
    width: 100,
    height: 150,
    // backgroundColor: '#FFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  movieImage: {
    width: '100%',
    height: '100%',
  },

  movieTitle: {
    fontSize: 10,
    color: 'white',
    marginTop: 7,
    flexWrap: 'wrap',
  },
});

export default styles;
