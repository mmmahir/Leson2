import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";
import data from "../data/countries.json";


class CountriesScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            countries:[],
        };
    }
    componentDidMount() {
        this.setState ({
            countries: data,
        });
    }
    render(){

        return (
            <View>
                <Text style={style.title}>Countries Screen</Text>
                <FlatList
                data={this.state.countries}
                keyExtractor={countries => countries.id}
                renderItem={({item}) => (
                    <View style={style.cardWrapper}> 
                        <Text>City name: {item.city}</Text>
                        <Text>Country name: {item.country}</Text>
                        <Text>Description: {item.description}</Text>
                        <Text>Population: {item.population}</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("CountryDetails",{
                            name: item.city ,
                            country: item.country,
                            description: item.description,
                            population: item.population
                        })} ><Text>View more</Text></TouchableOpacity>
                    </View>
                )}
                />

                
            </View>

        );
    }
}





const style = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:20,
        marginVertical:15,
        fontWeight:"bold",
    },
    cardWrapper:{
        backgroundColor:"#d3d3d3",
        marginBottom:15,
    }

})


export default CountriesScreen;