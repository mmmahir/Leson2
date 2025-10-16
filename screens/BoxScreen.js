import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";





const BoxScreen = (props) => {
    return (
        <View style={style.wrapper}>
            <View style={style.box1}> </View>
            <View style={style.box2}> </View>
            <View style={style.box3}> </View>
            <View style={style.box4}> </View>
        </View>

    );
};

const style = StyleSheet.create({
    view:{
        borderWidth:3,
        borderColor:"black"
    },
    text:{
        borderTopLeftRadius:20,
        borderWidth:1,
        borderColor:"red",
        margin:20,
        padding:20

    },
    box1:{
        width:100,
        height:100,
        backgroundColor:"red"
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:"blue"
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:"green",
        alignSelf:"flex-end"
    },
    box4:{
        width:100,
        height:100,
        backgroundColor:"yellow"
    },
    wrapper:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap:"nowrap"
    }
})


export default BoxScreen;