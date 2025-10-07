import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity} from "react-native";




const MenuScreen = (props) => {
    return <View>
        <Text style={style.text}>Welcome to Menu screen</Text>
        <Button title= "Go to List screen" onPress={() => props.navigation.navigate("List")}/>
        <TouchableOpacity  onPress={() => props.navigation.navigate("Menu")}>
            <Text style={style.TouchableOpacity}>Go to Main</Text>
        </TouchableOpacity>
        <Button title="Home" onPress={() => props.navigation.navigate("Home")} />
    </View>;
};

const style = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:20,
        marginVertical:20
    },
    TouchableOpacity : {
        backgroundColor:"#0e2f63",
        fontSize:20,
        textAlign:"center",
        color:"#fff",
        marginVertical:15,
        padding:3
    }
})


export default MenuScreen;