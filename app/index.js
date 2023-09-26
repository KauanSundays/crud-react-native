import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router' 

import { COLORS, icons, images, SIZES } from '../constants'
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home
