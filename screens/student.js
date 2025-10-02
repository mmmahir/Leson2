import React from "react";
import { Text,StyleSheet,View ,FlatList} from "react-native";

const Student = () => {
    let name = "Mahir";
    let surname = "Dupovac";
    let birghtday = "17-2-2009";
    const index_number = 1234;
    const grades = [
        {subject:"Math",grade:7},
        {subject:"English",grade:8},
        {subject:"Chemistry",grade:8},
        {subject:"Physics",grade:9}
    ];
    const hobbys = [
        {name:"Programing"},
        {name:"Swimming"},
        {name:"Graphic degsin"},
    ];
    const payments = [
        {type:"school",date:"20-9-2025",price:"255$"},
        {type:"insurance",date:"15-9-2025",price:"5$"},
        {type:"car",date:"5-9-2025",price:"15$"}
    ];
    
    return <View>
        <Text style={style.title}>Student info</Text>
        <Text><Text style={style.infoTitle}>Full name:</Text> {name} {surname}</Text>
        <Text><Text style={style.infoTitle}>Birghtday:</Text> {birghtday}</Text>
        <Text><Text style={style.infoTitle}>Index:</Text> {index_number}</Text>
        <Text style={style.listTitle}>Grades</Text>
        <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={grade => grades.name}
                data={grades}
                renderItem={({item}) => {
                    return <Text style={style.listItem}>{item.subject}:{item.grade}</Text>
                }
            }
        />

        <Text style={style.listTitle}>Hobbys</Text>

        <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={hobby => hobbys.name}
                data={hobbys}
                renderItem={({item}) => {
                    return <Text style={style.listItem}>{item.name}</Text>
                }
            }
        />

        <Text style={style.listTitle}>Uplate</Text>

        <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={payment => payments.name}
                data={payments}
                renderItem={({item}) => {
                    return <Text style={style.listItem}>{item.type}: {item.price}  {item.date}</Text>
                }
            }
        />
    </View>;
};

const style = StyleSheet.create({
    title : {
        textAlign: "center",
        fontSize : 35,
        fontWeight:"bold"
    },
    infoTitle : {
        fontWeight: "bold"
    },
    listTitle : {
        fontSize : 30,
        fontWeight : "bold"
    },
    listItem : {
        backgroundColor:"#a39493",
        margin:3,
        padding:2,
        fontSize:20,
        borderRadius:20,
        paddingLeft:10,
        color:"white"
    }
})

export default Student;