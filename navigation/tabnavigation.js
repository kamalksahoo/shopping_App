import  React ,{useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {StyleSheet,View,Text} from "react-native"
const Tab=createMaterialTopTabNavigator();
import Header from "../components/header"
import { Button } from 'react-native-paper';
function A(){
    const [cart,addCart]=useState(0)
    return(
        <View style={styles.container}>
            <Button title="+ghhgfchgffg" color="red"/>
            <Text style={styles.text}>
               {cart}
            </Text>
        </View>
    )
}
function B(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                vegetables
            </Text>
        </View>
    )
}
function C(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
               dry fruits
            </Text>
        </View>
    )
}
export default function Tabnavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="fruits" component={A} />
      <Tab.Screen name="vegetables" component={B} />
      <Tab.Screen name="dry fruits" component={C} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
    container:{
       
        alignItems:"center",
        justifyContent:"center",
        position:"relative"
    },
    text:{
        fontSize:25,
        fontWeight:"bold"
    }
})
