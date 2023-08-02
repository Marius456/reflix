import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Category} from './components/Category';
import useFetch from './hooks/useFetch';
import auth from '@react-native-firebase/auth';
import styles from './styles/MovieDetails.style';
import {addNewDocument, isDocExist, removeDocument} from './hooks/firebase';
import {IMovie} from './interfaces/IMovie';

export function MovieDetails({route, navigation}) {
  const user = auth().currentUser;
  const {movieId} = route.params;
  const {data, isLoading, refetch} = useFetch(`movies/${movieId}`);
  const [refreshing, setRefreshing] = useState(false);

  const [inLibrary, setinLibrary] = useState<boolean>(false);

  const checkLibrary = async (movie: IMovie[]) => {
    let isInLibrary = false;
    if (user) {
      isInLibrary = await isDocExist(movie.title);
    }
    setinLibrary(isInLibrary);
  };

  useEffect(() => {
    checkLibrary(data);
  }, [data]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  return (
    <ImageBackground
      source={require('./assets/title_bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" color="gray" />
              ) : (
                <>
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
                    <Text style={styles.title}>Movie Details</Text>
                    <Text style={styles.summary}>{data.summary}</Text>
                  </View>
                  <TouchableHighlight
                    style={styles.btn}
                    underlayColor={'gray'}
                    onPress={() =>
                      navigation.navigate('Trailer', {movieId: data._id})
                    }>
                    <Text style={styles.btnText}>Play Movie</Text>
                  </TouchableHighlight>
                  {user && !inLibrary && (
                    <TouchableHighlight
                      style={styles.btn}
                      underlayColor={'gray'}
                      onPress={() => addNewDocument(data.title)}>
                      <Text style={styles.btnText}>Add to Library</Text>
                    </TouchableHighlight>
                  )}
                  {user && inLibrary && (
                    <TouchableHighlight
                      style={styles.btn}
                      underlayColor={'gray'}
                      onPress={() => removeDocument(data.title)}>
                      <Text style={styles.btnText}>Remove from Library</Text>
                    </TouchableHighlight>
                  )}
                  <Category
                    movieGenre={data.genres[0]}
                    navigation={navigation}
                    isOpen={true}
                  />
                </>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
