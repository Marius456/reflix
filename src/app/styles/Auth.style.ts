import {StyleSheet} from 'react-native';

const baseMargin = 5;
const doubleBaseMargin = 10;
const blue = '#ff0000';
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headerContainerStyle: {
    flex: 0.2,
    alignItems: 'center',
  },
  headerTitleStyle: {
    color: blue,
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainerStyle: {
    paddingHorizontal: doubleBaseMargin,
    justifyContent: 'space-around',
  },
  textInputStyle: {
    height: 60,
    marginVertical: baseMargin,
    borderRadius: 6,
    paddingHorizontal: doubleBaseMargin,
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: '#888',
    borderWidth: 1,
  },
  signInButtonContainerStyle: {
    flex: 0.3,
    marginTop: doubleBaseMargin,
    alignItems: 'flex-end',
    paddingHorizontal: baseMargin,
  },
  signInButtonStyle: {
    width: 130,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 130 / 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInButtonTextStyle: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: baseMargin,
  },
  signInWithGoogleButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: doubleBaseMargin,
  },
  signInWithGoogleButtonStyle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 130 / 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInWithGoogleButtonTextStyle: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',

    marginHorizontal: baseMargin,
  },
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
  },
  loginButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonStyle: {
    alignItems: 'center',
  },
  loginButtonTextStyle: {
    color: blue,
  },
});

export default styles;
