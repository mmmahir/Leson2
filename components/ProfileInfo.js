import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";




const ProfileInfo = (props) => {
    return <View style={style.profileInfo}>
        

        <Text style={style.name}>{props.name}</Text>
        <Text style={style.job}>{props.job}</Text>
        <Text style={style.job}>{props.description}</Text>
        <TouchableOpacity><Text style={style.button}>Hire Him</Text></TouchableOpacity>
    </View>;
};

const style = StyleSheet.create({
    name:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:30,
    },
    job:{
        textAlign:"center"
    },
    profileInfo:{
        backgroundColor:"#fff",
        borderRadius:30,
        width:"90%",
        marginLeft:"5%",
        marginRight:"5%",
        marginTop:"-10%"
    },
    button:{
        textAlign:"center",
        fontSize:30,
        backgroundColor:"rgba(255, 252, 53, 1)",
        width:"50%",
        marginLeft:"25%",
        borderRadius:30,
        marginBottom:"10%"
}
}
)


export default ProfileInfo;