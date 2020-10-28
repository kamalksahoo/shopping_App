import React from "react"
import {FlatList,Animated,ScrollView,Text,View,StyleSheet} from "react-native"

const AnimatedFlatList=Animated.createAnimatedComponent(FlatList) 

export default function List(props){
    return(
        <View>
            <Text style={styles.text}>
                fruit page
            </Text>
        </View>
  );s
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:25,
        fontWeight:"bold"
    }
})
