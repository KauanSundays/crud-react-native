import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import {useRouter} from 'expo-router'

const app = () => {

  // const [nome, setNome] = useState("")
  // const [sobrenome, setSobrenome] = useState("")
  // const [cpf, setCpf] = useState("")

  const router = useRouter()

  return (
    <View style={styles.container}>
        {/* <View>
          <TextInput 
            style={styles.input}
            placeholder='nome'
            onChangeText={text => setNome(text)}
            value={nome}>         
          </TextInput>
        </View> */}
      <View style={styles.container}>
        <Pressable>
          <Text>foi papai</Text>
        </Pressable>
      </View>          
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
    gap: 40
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '65%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttons: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007AFF',
    justifyContent: "center",
    borderRadius: 5,
    alignItems: 'center',
    width: "35%",
    aspectRatio: 2.10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default app