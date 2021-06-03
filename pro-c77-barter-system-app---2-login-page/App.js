import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';
import Wellcome from './screens/wellcome';
import HomeScreen from './screens/homeScreen'
import Exchange from './screens/exchange'
export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}



const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("./assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "Exchange"){
          return(
            <Image
            source={require("./assets/home-icon.png")}
            style={{width:20, height:20,}}
          />)

        }
      }
    })
  }
);

const switchNavigator = createSwitchNavigator({
  Wellcome:{screen: Wellcome},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);