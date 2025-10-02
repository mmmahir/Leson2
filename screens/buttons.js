import React from "react";
import { Text,StyleSheet,View,Button, TouchableOpacity } from "react-native";

const buttons = () => {
    let counter = 0;
    return <View style={style.container}>
        <Text>Button screen</Text>
        <Button title="Click me" onPress={() => console.log("Button clicked",":", counter++)}></Button>
        <TouchableOpacity onPress={() => console.log("Tuchable opacity clicked",counter++)} style={style.tuchableBtn}>
            <Text>clicked tuchable elemnent</Text>
        </TouchableOpacity>
    </View>;
};

const style = StyleSheet.create({
    tuchableBtn:{
        padding:20,
        marginVertical:15,
        backgroundColor:"purple"
    }
    
})

export default buttons;