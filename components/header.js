import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';


function Header() {
    return (
       <View style={styles.mainview}>
           <View style={{position:"relative",alignContent:"flex-end"}}>
                <TouchableOpacity onPress={()=>{alert(' you press on navbar')}}><Icon  style={styles.icon}  color="gray" name="navicon" type="font-awesome" size={25}/></TouchableOpacity>
             </View>
             <View style={{position:"relative"}}>
                 <TouchableOpacity onPress={()=>{alert(' you press on cart')}}><Icon  style={styles.icons}  color="gray" name="shopping-bag" type="font-awesome" size={25} onPresss={()=>{alert('you clicked on cart button')}}/></TouchableOpacity>
            </View>
 </View>
    )
}
const styles=StyleSheet.create({
    mainview:{
        marginTop:30,
        width:"95%",
      //  backgroundColor:"white",
        paddingTop:5,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        flexDirection:"row",
        height:50,
        alignContent:"space-around"
    },
    icons:{
        marginHorizontal:140,
      
    },
    icon:{
        marginHorizontal:140
    }
})
export default Header
