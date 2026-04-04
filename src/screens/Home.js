import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import InputArea from '../components/Input';

const Home = () => {
  return (
    <View>
        <Header />
        <InputArea />
        <StatusBar style="auto" />

    </View>
  )
}

export default Home

