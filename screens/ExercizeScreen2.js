import React from "react";
import { Text,StyleSheet,View } from "react-native";

const ExercizeScreen2 = () => {
    // deklaracija varijabli
    //let , const

    const message = "Hello there";
    let message2 = "This is an exercize screen 2"
    
    return <View style={style.container}>
        <Text style={style.message1}>{message}</Text>
        <Text>{message2}</Text>
    </View>;
};

const style = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    message1 : {
        color: "red" ,
        backgroundColor: "black",
        fontSize:50
    },
    message2 : {
        fontSize:12,
        color:"green"
    }
})

export default ExercizeScreen2;