import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";




const StudentDetails = (props) => {
    return <View>
        <View style={style.cardWrapper}>
            <View>
                <Image source={props.image} style={style.img}></Image>
            </View>
            <View style={style.infoWrapper}>
                <Text style={style.name}>{props.name}</Text>
                <Text>{props.description}</Text>
            </View>
        </View>
    </View>;
};

const style = StyleSheet.create({
    cardWrapper:{
        flexDirection:"row",
        backgroundColor:"#009900",
        borderRadius:8,
        width: "90%",
        alignSelf:"center",
        marginBottom:15

    },
    img:{
        width:100,
        height:100,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
    infoWrapper:{
        marginLeft:20,
        marginTop:20
    },
    name:{
        fontWeight:"bold"
    }
})


export default StudentDetails;