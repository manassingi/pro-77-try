import * as React from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  ToastAndroid,
  Image,
  StyleSheet,
  Alert,
  Modal,
   ScrollView,
} from 'react-native';

import db from "../config"
import firebase from "firebase";

export default class Wellcome extends React.Component {

  constructor(){
 super();
 this.state={

   emailId:"",
   password:"",
   firstName:'',
   lastName:'',
   address:'',
   contact:'',
   confirmPassword:'',
   isModalVisible:'false'
 }

  }

userSignup=(emailId,password,confirmPassword)=>{
if(password !== confirmPassword){

  return (Alert.alert("Password doesn't match."))
}else{

firebase.auth().createUserWithEmailAndPassword(emailId,password)
   .then((response)=>{
     db.collection("users").add({

       first_name:this.state.firstName,
         last_name:this.state.lastName,
         contact:this.state.contact,
         email_id:this.state.emailId,
         address:this.state.address,
         password:this.state.password,
     })
 return  Alert.alert(
            'User Added Successfully',
            '',
            [
              {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
            ]
        );
   })
   .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return Alert.alert(errorMessage)
     });
}
}

 userLogin=(emailId,password)=>{
firebase.auth().signInWithEmailAndPassword(emailId,password)
     .then(()=>{
        this.props.navigation.navigate('HomeScreen')
     })
      .catch(function(error){
        var errorcode= error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
        
      })

}

showModal = ()=>{
  return(
  <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isModalVisible}
    >
    <View style={styles.modalContainer}>
      <ScrollView style={{width:'100%'}}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text
          style={styles.modalTitle}
          >Registration</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
      
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Confrim Password"}
          
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  </Modal>
)
}



render() {
    return (
        <View style={styles.appHeaderStyle}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          {
            this.showModal()
          }
        <View style={{justifyContent:'center', alignItems:'center'}}>
           <Image
       
        source={require("../assets/barter.png")}
                style={{width:300, height: 270,marginLeft:10}}/>
         
        </View>
        <View>
            <TextInput
            style={styles.textInput1}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.textInput1}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.loginBox,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonStyle}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.signinBox}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonStyle}>SignUp</Text>
         </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  appHeaderStyle: {
    flex: 1,
    backgroundColor: '#fedfb2',
  },
  
  loginBox:{
    width: 250,
      height: 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    borderWidth:1.5,
    borderRadius:20,
   borderColor:"white",
   marginLeft:30,
   marginTop:30,
   
  },
  signinBox:{
   width: 250,
      height: 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    borderWidth:1.5,
    borderRadius:20,
   borderColor:"white",
     marginLeft:30,
   marginTop:20,
   
  },
  textInput1:{
    width: 200,
      height: 20,
     borderBottomWidth:1.3,
     borderBottomColor:'#b2720a',
      fontSize: 15,
       fontVariant:"#ff9b0f",
     marginLeft:60,
     color:"#705b3e"
  },
  inText:{
    marginTop:20,
   color:"#a84300",
marginLeft:60
  },
  buttonStyle:{
    color:"#a84300",
    fontWeight:"bold",
  },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30,
   marginLeft:30,
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
  
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
    marginLeft:30,
 },

});
    
 









