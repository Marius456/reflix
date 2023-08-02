import React from 'react';
import { Button } from 'react-native';
import { HomeScreen } from './Home';
import { Library } from './Library';
import { LoginScreen } from './Login';
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import SigInComponent from './Register';
import { VideoPlayer } from './VideoPlayer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={SigInComponent} />
                <Stack.Screen name="Library" component={Library} />
                <Stack.Screen
                    name="Movies"
                    component={MovieList}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Library')}
                                title="Library"
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Details"
                    component={MovieDetails}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Library')}
                                title="Library"
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Trailer"
                    component={VideoPlayer}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Library')}
                                title="Library"
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
