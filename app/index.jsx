import { View, StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'

const app = () => {

    const router = useRouter()
  return (
    <View style={styles.container}>
        <Pressable onPress={() => router.push("/lista")}>
            <Text style={styles.button}>teste</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    button: {
        backgroundColor:'#000',
    }
})

export default app