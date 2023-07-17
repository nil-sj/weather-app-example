import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {

  const [loading, error, weather] = useGetWeather();
  // console.log(loading, error, weather);


  if (weather && weather.list && !loading) {
    return(
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }


  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator side={'large'} color={'blue'} />
      )}
    </View>
  );
  
  
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
