import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image,ScrollView} from "react-native";
import data from "../data/products.json";
import Product from "../components/Products";



class ProductsScreen extends React.Component {
    getPrice(){

    const priceList = this.state.cart;
    const CartPrice = 0 ;
    for (const price in priceList ) {
        CartPrice = CartPrice + price
    }
    return CartPrice
    }

    constructor(){
        super();
        this.state = {
            products:[],
            cart:[],
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
                <Text>Cart {this.getPrice()} $</Text>
                <FlatList
                data={this.state.products}
                keyExtractor={products => products.id}
                renderItem={({item}) => (
                    <View>
                        <Product image={item.image} name={item.name} description={item.description} price={item.price} stock={item.stock}/>
                        <Button title="Add to cart" onPress={() => this.state.cart.push(item.price)}></Button>
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