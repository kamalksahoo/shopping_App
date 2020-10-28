import  React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {StyleSheet,View,Text,Button} from "react-native"
import Searchbox from "../components/searchbox"
import { color } from 'react-native-reanimated';
import Dummydata from "../components/masonry"
const Drawer=createDrawerNavigator();

function ScreenB(){
    const [cart,addCart]=useState(1)
    const add=()=>{
        if(cart<7){
            addCart(cart+1)
        }else{
            alert("item cannot excced more than 7")
        } 
    }
    const subtract=()=>{
        if(cart>1){
            addCart(cart-1)
        }else{
            alert("item cannot be fall below 1")
        } 
    }
    return(
        <View style={styles.container}>
            <Button  onPress={add} title=" Add +" color="blue"/>
            <Text style={styles.text}>
             {cart}
            </Text>
            <Button onPress={subtract} title="  Remove -" color="blue"/>
        </View>
    )
}
function ScreenC(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Scrren 3
            </Text>
        </View>
    )
}
 function Navigation({Navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Searchbox} />
      <Drawer.Screen name="AddCart" component={ScreenB} />
      <Drawer.Screen name="grid layout" component={Dummydata} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        color:"red"

    }
})
export default Navigation;

