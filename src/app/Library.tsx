import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LibraryCard} from './components/LibraryCard';
import {IMovie} from './interfaces/IMovie';
import styles from './styles/MovieList.style';
import {queryForDocuments} from './hooks/firebase';
import {ILibrary} from './interfaces/ILibrary';

export function Library({navigation}) {
  const [movies, setMovies] = useState<ILibrary[]>([]);

  const fetchData = async () => {
    let userFavorateMovies: ILibrary[] = await queryForDocuments();
    setMovies(userFavorateMovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardPress = (selectedMovie: IMovie) => {
    navigation.navigate('Details', {movieId: selectedMovie._id});
  };

  return (
    <ImageBackground
      source={require('./assets/title_bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <FlatList
                data={movies}
                keyExtractor={item => item.movieTitle}
                renderItem={({item}) => (
                  <LibraryCard movie={item} handleCardPress={handleCardPress} />
                )}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
