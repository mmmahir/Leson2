import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";



const CountriesDetailsScreen = (props) => {



        return (
            <View>
                <Text style={style.title}>Country Details Screen</Text>
                <Text>Name: {props.name}</Text>
                <Text>Country: {props.country}</Text>
                <Text>Population: {props.population}</Text>
                <Text>Description: {props.description}</Text>
                
            </View>

        );

}





const style = StyleSheet.create({

})


export default CountriesDetailsScreen;