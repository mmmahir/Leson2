import React from "react";
import { Text,StyleSheet,View } from "react-native";
import { Button } from "react-native";

const QuizScreen = () => {

    return <View >
        <Text style={style.screen}>QuizScreen</Text>
        <Text style={style.title}>Kviz</Text>
        <Text style={style.question}>1. Pitanje: 20*20</Text>
        <View style={style.div}>
            <Button title="400" onPress={() => console.log("Correct")} style={style.button}></Button>
            <Button title="100" onPress={() => console.log("Wrong")} style={style.button}></Button>
        </View>
        <View style={style.div}>
            <Button title="250" onPress={() => console.log("Wrong")} style={style.button}></Button>
            <Button title="325" onPress={() => console.log("Wrong")} style={style.button}></Button>
        </View>

        
    </View>;
};

const style = StyleSheet.create({
    screen:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold"
    },
    title:{
        textAlign:"center",
        fontSize:35,
        fontWeight:"bold"
    },
    question:{
        fontSize:20
    },
    div:{
        flex:1,
        flexDirection:"row"
        
    },
    button:{
        marginHorizontal:20,
        marginTop:5,
        backgroundColor:"red"
    }
})

export default QuizScreen;