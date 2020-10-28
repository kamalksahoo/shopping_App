import React  from 'react'
import {Flatlist,View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import Addcardsitem from "./Addcarditems"
function Cards(props){
  return(
        <View style={styles.container} >
           <View style={styles.box}>
              <View style={styles.inner}>
                <Image style={styles.image} source={require("../assets/kiwi.png")} />
                    
                </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
              <Image style={styles.image} source={require("../assets/avocado.png")} />
                </View>
            </View>
            <View style={styles.box}>
              <View style={styles.inner}>
                      <Text style={{textAlign:"left"}}>₹ 45</Text>
                </View>
            </View>
        </View>
  )
}
const styles=StyleSheet.create({
  image:{
    width:"50%",
    height:"70%",
    justifyContent:"center",
    alignItems:"center",
    marginRight:30,
    elevation:0.5
  },
    container:{
      flex:1,
      justifyContent:"center",
      flexDirection:"row",
      flexWrap:"wrap"
    },
    box:{
        width:"50%",
        height:'60%',
        padding:5
    },
    inner:{
       flex:1,
        justifyContent:"center",
        backgroundColor:"#cfdfac"

    }
  })

export default Cards
