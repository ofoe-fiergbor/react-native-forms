import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import ListItem from './Components/ListItem'

export default function ListScreen() {
    const contacts = [
        {name:'Saitam Baldie', phone:'093-234-2298', image: require('./assets/saitama.jpg'), id:'1'},
        {name:'Genos Cyborg', phone:'193-214-2998', image: require('./assets/genos.png'), id:'2'},
        {name:'Sweet Mask', phone:'099-211-2654', image: require('./assets/SweetMaskProfile.png'),id:'3'},
        {name:'Sound Sonic', phone:'093-234-1198', image: require('./assets/sonic_12403.jpg'),id:'4'},
        {name:'Monkey D. Luffy', phone:'274-144-7700', image: require('./assets/Luffy.jpg'), id:'5'},
        {name:'Vinesmoke Sanji', phone:'193-214-2998', image: require('./assets/sanjionepiece.jpg'), id:'23'},
        {name:'Full Metal Genos', phone:'193-214-2998', image: require('./assets/genos.png'), id:'21'},
        {name:'Subzero Mask', phone:'099-211-2654', image: require('./assets/SweetMaskProfile.png'),id:'13'},
    ]
    return (
        <View>
            <FlatList
            data ={contacts}
            renderItem = {({item})=>{
                return <ListItem name={item.name} phone={item.phone} image={item.image} />
            }
            }
            keyExtractor={(item)=> item.id}/>
            
        </View>
    )
}
