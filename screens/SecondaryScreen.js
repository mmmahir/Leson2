import React from "react";
import { Text,StyleSheet,View } from "react-native";

const SecondaryScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>This is my secondary screen</Text>
    </View>;
};

const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "4f6",
        alignItems: "center",
        justifyContent: "center"

    },
    textStyle:{
        fontSize:30,
        color:"blue"
    }
})

export default SecondaryScreen;