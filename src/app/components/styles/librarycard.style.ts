import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 100,
    height: 150,
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
