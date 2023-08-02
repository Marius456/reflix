import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles/Auth.style';

const blue = '#ff0000';

const __isValidEmail = (email: string) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const SigInComponent = () => {
  const emailInputRef = React.useRef<TextInput>(null);
  const passwordInputRef = React.useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const __doSignUp = () => {
    if (!email) {
      setError('Email required *');
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      return;
    } else if (!__isValidEmail(email)) {
      setError('Invalid Email');
      return;
    }

    __doCreateUser(email, password);
  };

  const __doCreateUser = async (email: string, password: string) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
      }
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
          {!!fetching && <ActivityIndicator color="blue" />}
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Sign Up </Text>
        </View>
        <View style={styles.formContainerStyle}>
          <TouchableHighlight onFocus={() => emailInputRef.current?.focus()}>
            <TextInput
              ref={emailInputRef}
              keyboardType="email-address"
              style={styles.textInputStyle}
              placeholder="Mail address"
              onChangeText={text => {
                setError;
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
            onPress={__doSignUp}
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
};

export default SigInComponent;
