import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles/moviecard.style';

function MovieCard({item, handleCardPress}): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => handleCardPress(item)}>
        <Image
          source={{
            uri: item.posterLink,
          }}
          resizeMode="contain"
          style={styles.movieImage}
        />
      </TouchableOpacity>
      <Text style={styles.movieTitle} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

export default MovieCard;
