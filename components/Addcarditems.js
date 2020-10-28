import React  from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import { Icon } from 'react-native-elements';

function Addcarditems(props){
  return(
          <View style={{...styles.box,...{height:props.height}}}>
         <View style={styles.inner}>
                  <Text>row 01</Text>
          </View>
      </View>
      
  )
}
const styles=StyleSheet.create({
  
    box:{
        width:'50%',
       // height:'60%',
        padding:5,
    },
    inner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#cfdfac",
        borderRadius:10
    },
    text:{
        color:"white",
        fontSize:10,
        textAlign:"left",
  
    }
  })

export default Addcarditems
