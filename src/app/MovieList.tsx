import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import styles from './styles/MovieList.style';
import useFetch from './hooks/useFetch';
import LinearGradient from 'react-native-linear-gradient';
import {Category} from './components/Category';

export function MovieList({navigation}): JSX.Element {
  const {data, isLoading} = useFetch('movies/genres');
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
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <View style={{padding: 24}}>
                  {isLoading ? (
                    <ActivityIndicator />
                  ) : (
                    <FlatList
                      data={data}
                      keyExtractor={item => item}
                      renderItem={({item}) => (
                        <Category movieGenre={item} navigation={navigation} />
                      )}
                    />
                  )}
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}
