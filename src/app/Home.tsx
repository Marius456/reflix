import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import styles from './styles/Home.style';

export function HomeScreen({navigation}): JSX.Element {
  const user = auth().currentUser;
  return (
    <ImageBackground
      source={require('./assets/title_bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.content_box}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ReactSeals presents</Text>
            <Text style={styles.title}>Reflix!</Text>
            <TouchableOpacity
              style={styles.nav_button}
              onPress={() => navigation.navigate('Movies')}>
              <Text style={styles.nav_button_text}>Browse</Text>
            </TouchableOpacity>
            {!user ? (
              <TouchableOpacity
                style={styles.nav_button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.nav_button_text}>Login</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.nav_button}
                  onPress={() => navigation.navigate('Library')}>
                  <Text style={styles.nav_button_text}>Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nav_button}
                  onPress={async () => {
                    await auth().signOut();
                  }}>
                  <Text style={styles.nav_button_text}>Logout</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <View>
            <Text style={styles.footer}>
              ReactSeals intership program assignment app
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
