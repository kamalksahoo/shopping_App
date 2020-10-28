import React ,{useState} from 'react'
import {
  View,
  TextInput,
  StyleSheet,Text,TouchableOpacity,Image,ScrollView,SafeAreaView
} from 'react-native';
import { Icon } from 'react-native-elements';
import Masonry from "react-native-masonry-list"
import Dummydata from "./masonry"
//import Masonary from "./masonry"
import Addcarditems from "./Addcarditems";

function Searchbox() {
  const [input, setInput] = useState("");
  const reset=()=>{
      setInput("")
  }
  return (
    <View>
      <View style={styles.container}>
        <TextInput  value={input} onChangeText={(text)=>setInput(text)} style={{flex:1,paddingHorizontal:12,marginLeft:5,paddingLeft:5}} placeholder="search here"/>    
        <TouchableOpacity onPress={reset}>
        <Icon  style={styles.icons}   color="gray" name="search" type="font-awesome" size={25}/>
        </TouchableOpacity>
      </View>
  
   </View>
 
  );
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,
        marginLeft:10,
        marginRight:5,
        borderWidth:0.5,
        borderRadius:20,
        height:44,
        width:"95%",
        paddingRight:20,marginRight:2
    },
    icons:{
        marginRight:5
    }
})
export default Searchbox;
