import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity} from "react-native";
import StudentDetails from "../components/StudentDetails";




const StudentScreen = (props) => {
    return <View>
        <Text style={style.text}>Studen screen</Text>
        <StudentDetails name="Mahir" image={require("../assets/avatar1.png")} description="Prvi student"/>
        <StudentDetails name="Tarik" image={require("../assets/avatar2.png")} description="Drugi student"/>
        <StudentDetails name="Omer" image={require("../assets/avatar3.jpg")} description="treci student"/>
        <StudentDetails name="Annur" image={require("../assets/avatar4.png")} description="četvrti student"/>

    </View>;
};

const style = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:20,
        marginVertical:29
    }
})


export default StudentScreen;