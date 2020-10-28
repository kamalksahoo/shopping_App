import React  from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import Masonry from "react-native-masonry-list"
import {CATEGORIES} from "../dummydata/dummydata"
import Grid from "./gridscreen"

function Dummydata(props){

  const renderGridItem=(itemData)=>{
    return <Grid title={itemData.item.title} url={itemData.item.url} color={itemData.item.color} heights={itemData.item.height} price={itemData.item.price} onSelect={()=>{alert("you click on fruit")}}/>
  }
  return(
    <FlatList  keyExtractor={(item,index)=>{item.id}} data={CATEGORIES} renderItem={
      renderGridItem} numColumns={2}/>
  )

}

function Masonary() {
  return (
    <View>
      <View style={{flex:1,alignItems:"center",marginTop:100}}>
        <Text style={{fontSize:25}}>here addingg massonry</Text>
        <Masonry
            sorted // optional - Default: false
            columns={2} // optional - Default: 2
            bricks={[
              { uri: '../assets/avocado.png' },
              { uri: '../assets//kiwi.png' },
              { uri: '../assets/mango.png' },
              { uri: '../assets/papaya.png' },
              { uri: '../assets/strawberry.png' }
            ]}
            imageContainerStyle={{
              color:"red",
              borderRadius:20
            }}
            spacing={2}
        />
      </View>
   </View>
  );
}
export default Masonary;
