import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import useFetch from '../hooks/useFetch';
import {IMovie} from '../interfaces/IMovie';
import MovieCard from './MovieCard';
import styles from './styles/category.style';

export function Category({navigation, movieGenre, isOpen}): React.JSX.Element {
  const {data, isLoading} = useFetch(`movies/genres/${movieGenre}`);

  const [isShowing, setIsShowing] = useState(isOpen);

  const handleCardPress = (selectedMovie: IMovie) => {
    navigation.navigate('Details', {movieId: selectedMovie._id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{movieGenre}</Text>
        <TouchableOpacity onPress={() => setIsShowing(!isShowing)}>
          {isShowing ? (
            <Text style={styles.headerBtn}>Hide </Text>
          ) : (
            <Text style={styles.headerBtn}>Show </Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="gray" />
        ) : isShowing ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <MovieCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={item => item?._id}
            contentContainerStyle={{columnGap: 16}}
            horizontal
          />
        ) : null}
      </View>
    </View>
  );
}
