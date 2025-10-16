import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";





const BoxScreenChalange = (props) => {
    return (
        <View style={style.wrapper}>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box3}></View>
        </View>

    );
};

const style = StyleSheet.create({
    box1:{
        width:100,
        height:100,
        backgroundColor:"#f00"
        
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:"#0a0",
        alignSelf:"center"
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:"#00f"
    },
    wrapper:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})


export default BoxScreenChalange;