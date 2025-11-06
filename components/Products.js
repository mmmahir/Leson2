import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";




const Product = (props) => {
    return <View style={style.box}>
        <Image source={{uri : props.image}}  style={style.img}></Image>
        <Text style={style.title}>{props.name}</Text>
        <Text>{props.description}</Text>
        <Text>In stock: {props.stock}</Text>
        <Text style={style.price}>${props.price}</Text>

    </View>;
};

const style = StyleSheet.create({
    img:{
        flex: 1,
        width: 308,
        height: 308,
        resizeMode:'contain',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    box:{
        margin:40,
        borderColor:"#000",
        borderWidth:2,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        backgroundColor:"#fff"
    },
    title:{
        fontWeight:"bold",
        fontSize:30
    },
    price:{
        fontSize:30,
        fontWeight:"bold",
        color:"#111"
    }

}
)


export default Product;