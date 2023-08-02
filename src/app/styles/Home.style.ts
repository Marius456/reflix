import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  nav_button: {
    width: '50%',
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
    '&:hover, &:focus': {
      background: 'white',
      borderColor: '#707070',
    },
  },
  nav_button_text: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  footer: {
    color: '#fff',
  },
});

export default styles;
