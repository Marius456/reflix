import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    width: '100%',
    padding: 24,
    borderRadius: 16,
    justifyContent: 'space-between',
    shadowColor: '#F3F4F8',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
  },

  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'transparent',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  movieImage: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  summary: {
    color: 'white',
  },

  btn: {
    width: '40%',
    height: 'auto',
    padding: 10,
    textAlign: 'center',
  },

  btnText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default styles;
