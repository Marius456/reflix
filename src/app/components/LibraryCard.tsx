import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFetch from '../hooks/useFetch';
import styles from './styles/librarycard.style';

export function LibraryCard({movie, handleCardPress}): React.JSX.Element {
  const {data, isLoading} = useFetch(`movies/title/${movie.movieTitle}`);
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <TouchableOpacity
          style={styles.row}
          onPress={() => handleCardPress(data)}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: data.posterLink,
              }}
              resizeMode="contain"
              style={styles.movieImage}
            />
          </View>
          <View>
            <Text style={styles.movieTitle}>{data.title}</Text>
            <Text style={styles.movieTitle}>{data.summary}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
