import React from "react";
import { Text,StyleSheet,View } from "react-native";

const MainScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>This is my main screen</Text>
    </View>;
};

const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "fff",
        alignItems: "center",
        justifyContent: "center"

    },
    textStyle:{
        fontSize:20
    }
})

export default MainScreen;