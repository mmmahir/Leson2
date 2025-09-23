import React from "react";
import { Text,StyleSheet,View } from "react-native";

const Quote = () => {

    const author = "-Albert Einstein";
    let quote = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    
    return <View style={style.container}>
        <Text style={style.message1}>{quote}</Text>
        <Text style={style.message2}>{author}</Text>
    </View>;
};

const style = StyleSheet.create({
    container : {

    },
    message1 : {
        fontSize:40
    },
    message2 : {
        fontSize:15,
        textAlign:"right"
    }
})

export default Quote;