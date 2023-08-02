import React from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
  ImageBackground,
} from 'react-native';
import useFetch from './hooks/useFetch';
import { IMovie } from './interfaces/IMovie';
import styles from './styles/VideoPlayer.style';
import Video from 'react-native-video';

export function VideoPlayer({ route, navigation }) {
  const { movieId } = route.params;
  const { data, isLoading, refetch } = useFetch(`movies/${movieId}`);
  return (
    <ImageBackground
      source={require('./assets/title_bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <Video
            source={{ uri: data?.trailerLink }}
            controls={true}
            rate={1.0}
            volume={1.0}
            resizeMode={'cover'}
            repeat
            hideShutterView
            style={{
              position: 'absolute',
              height: 300,
              width: 400,
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
}
