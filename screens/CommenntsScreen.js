import React from "react";
import { Text,StyleSheet,View ,FlatList,Button,TouchableOpacity,Image} from "react-native";

class CommentsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            comments:[],
            posts:[],
        };
    }
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jasonData = await data.json();
        this.setState({
            comments: jasonData,
        });
    }
    render() {
        const { comments } = this.state;
        return (
        <View >
            <Text style={style.screenTitle}>Comments</Text>
            <FlatList
                keyExtractor={comments => comments.id}
                data = {comments}
                renderItem={({item}) => (
                    <View style={style.box}>
                        <View style={style.userWrapper}>
                            <View>
                                <Image source={require("../assets/userIcon.png")} style={style.userIcon}/>
                            </View>
                            <View>
                                <Text style={style.name}>{item.name}</Text>
                            </View>                           
                        </View>
                        
                        
                        <Text>{item.body}</Text>
                        <Text style={style.email}>{item.email}</Text>
                    </View>
                )}
            />
        </View>

    );
    }
}





const style = StyleSheet.create({
    screenTitle:{
        textAlign:"center",
        fontSize:35,
        fontWeight:"bold",
        backgroundColor:"#0a0",
        paddingVertical:10
    },
    userIcon:{
        width:30,
        height:30
    },
    userWrapper:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:3
    },
    name:{
        textTransform:"uppercase",
        fontWeight:"bold"
    },
    box:{
        borderColor:"#000",
        borderWidth:1,
        borderRadius:25,
        marginHorizontal:15,
        marginVertical:15,
        padding:10,
        backgroundColor:"#fff"
    },
    email:{
        fontWeight:"bold"
    }
})


export default CommentsScreen;