import React from 'react'
import { View, Text,Image } from 'react-native'

const App = () => {
  return (
    <View  style={{width:'95%',height:'100%',alignItems:'center'}}>
      <View  style={{height:'5%'}} />
      <View style={{alignItems:'center'}}>

       <Image    source={require('./assets/Images/Union.png')} />
      </View>
      <View  style={{height:'2%'}} />

      <View >
        <Text   style={{fontSize:18,fontWeight:'bold'}}>Device Linker</Text>
      </View>
      <View style={{height:'2%'}} />
      <View style={{}}>
        <Text   style={{fontSize:14,fontWeight:'bold',textAlign:'center'}}>My Name is Muhammad Asif {'\n'}Derived by Asif</Text>
      </View>
    </View>
  )
}

export default App
