import React from "react";
import { Text,StyleSheet,View } from "react-native";

const ExercizeScreen = () => {
    // deklaracija varijabli
    //let , const

    const message = "Hi there";
    let message2 = "This is an exercize"
    
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
        color: "green" ,
        backgroundColor: "blue",
        fontSize:24
    },
    message2 : {
        fontSize:40
    }
})

export default ExercizeScreen;