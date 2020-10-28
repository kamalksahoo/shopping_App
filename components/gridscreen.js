import React  from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import { Icon } from 'react-native-elements';

function Grid(props){
  
  return(
    <TouchableOpacity style={{...styles.grid , ...{height:props.heights}}} onPress={props.onSelect}>
    <View style={{...styles.container, ...{backgroundColor:props.color}}} >
        <View style={{flex:1,justifyContent:"flex-start",alignItems:"flex-end", marginTop:2}}>
      <Image elevation={5} style={styles.image} source={require("../assets/strawberry.png")}/>
       </View>
       <View>
       <Text style={styles.text}>{props.title}</Text>
       </View>
       <View style={{marginLeft:10}}>
          <Text style={styles.texts}> {props.price}</Text>
          <Text style={{color:"black",fontSize:10,textAlign:"right", marginRight:5,paddingBottom:1}}>View prices</Text>

       </View>
       <Text style={{fontSize:10,marginLeft:10,marginBottom:5}}>per quantity</Text>
      </View>
 </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    grid:{
      flex:1,
    },
    container:{
      flex:1,
      borderRadius:10,
      shadowColor:"black",
      shadowOpacity:0.26,
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      marginTop:10,
    
      justifyContent:"center"
    },
    text:{
        color:"black",
        fontSize:25,
        textAlign:"left",
        marginLeft:20
        
    },
    texts:{
        color:"black",
        fontSize:20,
        textAlign:"left",
    },image:{
      width:80,
      height:"70%",
      justifyContent:"center",
      alignItems:"center",
      marginRight:30,
      elevation:0.5
    },icon:{
      marginLeft:80
    }
  })

export default Grid
