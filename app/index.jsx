import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default app