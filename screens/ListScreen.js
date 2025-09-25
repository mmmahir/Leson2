import React from "react";
import { Text,StyleSheet,View ,FlatList} from "react-native";

const students = [
    {name:"Mahir",surname:"Duovac",age:"25"},
    {name:"Hamza",surname:"Agic",age:"18"},
    {name:"Oamr",surname:"Hagag",age:"19"}
];
const animals = [
    {type:"Cat",name:"Mimi",age:"6"},
    {type:"Dog",name:"Bobi",age:"7"},
    {type:"Parrot",name:"Kiki",age:"3"}
]

const ListScreen = () => {

    return <View>
        <Text >ListScreen</Text>
        <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={student => students.surname}
        data={students}
        renderItem={({item}) => {
            return <Text style={style.studentWraper}>{item.name}-{item.surname}-{item.age}</Text>
        }
    }
        />

        <FlatList 
        horizontal={false}
        showsVerticalScrollIndicator = {false}
        keyExtractor={animal => animal.name}
        data={animals}
        renderItem={({item}) => {
            return <Text style={style.studentWraper}>{item.type}-{item.name}-{item.age}</Text>
        }
    }
        />
    </View>;
};

const style = StyleSheet.create({

})


export default ListScreen;