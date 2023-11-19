import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text>Caneta azul</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#008000"
    }
})

export default app
