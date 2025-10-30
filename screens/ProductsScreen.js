import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";
import data from "../data/products.json";
import Product from "../components/Products";


class ProductsScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[],
        };
    }
    componentDidMount() {
        this.setState ({
            products: data,
        });
    }
    render(){

        return (
            <View>
                <Text style={style.title}>Products Screen</Text>
                <FlatList
                data={this.state.products}
                keyExtractor={products => products.id}
                renderItem={({item}) => (
                    <View>
                        <Product image={item.image} name={item.name} description={item.description} price={item.price} stock={item.stock}/>
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


export default ProductsScreen;