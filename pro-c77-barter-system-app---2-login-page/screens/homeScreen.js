
import React from 'react'
import {Text,View,StyleSheet}from 'react-native'
import { Header } from 'react-native-elements';
export default class HomeScreen extends React.Component{
    render(){
        return(
       
            <View style={{flex:1, borderWidth:2}}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
            <View style={styles.displyText}>
            <Text style={styles.textin}>Welcome To Facebook</Text>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  displyText:{
flex: 1,
     marginTop:10,
     marginLeft:80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:"bold",
  },
   textin: {
    color:'blue',
    fontWeight:"bold",
    fontSize:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})