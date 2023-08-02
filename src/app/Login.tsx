import * as React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles/Auth.style';

const blue = '#ff0000';

const __isValidEmail = (email: string) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
export function LoginScreen({ navigation }): JSX.Element {
  const user = auth().currentUser;
  if (user) {
    navigation.navigate('Home');
  }
  const emailInputRef = React.useRef<TextInput>(null);
  const passwordInputRef = React.useRef<TextInput>(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fetching, setFetching] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isValid, setValid] = React.useState(true);
  const __doLogin = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    } else if (!__isValidEmail(email)) {
      setError('Invalid Email');
      setValid(false);
      return;
    }
    __doSingIn(email, password);
  };

  const __doSingIn = async (email: string, password: string) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Logged successfully');
      }
      navigation.navigate('Home');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/title_bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.containerStyle}>
        <View style={{ flex: 0.2 }}>
          {!!fetching && <ActivityIndicator color={blue} />}
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Log In </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <TouchableHighlight onFocus={() => emailInputRef.current?.focus()}>
            <TextInput
              ref={emailInputRef}
              keyboardType="email-address"
              style={styles.textInputStyle}
              placeholder="Mail address"
              onChangeText={text => {
                setValid(__isValidEmail(text));
                setEmail(text);
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onFocus={() => passwordInputRef.current?.focus()}>
            <TextInput
              ref={passwordInputRef}
              secureTextEntry
              style={styles.textInputStyle}
              selectionColor={blue}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
          </TouchableHighlight>
        </View>
        {error ? (
          <View style={styles.errorLabelContainerStyle}>
            <Text style={styles.errorTextStyle}>{error}</Text>
          </View>
        ) : null}

        <View style={styles.signInButtonContainerStyle}>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={() => navigation.navigate('Register')}
            underlayColor={blue}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={styles.signInButtonTextStyle}>Register</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={__doLogin}
            underlayColor={blue}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={styles.signInButtonTextStyle}>Continue</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
