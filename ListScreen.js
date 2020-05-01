import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import ListItem from './Components/ListItem'
import ListItem2 from './Components/ListItem2'

export default function ListScreen() {
    const contacts = [
        {name:'Saitam Baldie', phone:'093-234-2298', image: require('./assets/saitama.jpg'), id:'1', age: '19', classType: 'Type C11', address:'Crazy city st, Aven'},
        {name:'Sound Sonic', phone:'093-234-1198', image: require('./assets/sonic_12403.jpg'),id:'4', age: '28', classType: 'Type C8', address:'Wall Street'},
        {name:'Monkey D. Luffy', phone:'274-144-7700', image: require('./assets/Luffy.jpg'), id:'5',age: '19', classType: 'Class S1', address:'Parver Avenue'},
        {name:'Vinesmoke Sanji', phone:'193-214-2998', image: require('./assets/sanjionepiece.jpg'), id:'23',age: '22', classType: 'Class c19', address:'Platform 9 3/4'},
        {name:'Full Metal Genos', phone:'193-214-2998', image: require('./assets/genos.png'), id:'21', age: '32', classType: 'Class A8', address:'Airport Cr, 29 Av'},
        {name:'Subzero Mask', phone:'099-211-2654', image: require('./assets/SweetMaskProfile.png'),id:'13', age: '29', classType: 'Class A14', address:'Wall St.'},
        {name:'Genos Cyborg', phone:'193-214-2998', image: require('./assets/genos.png'), id:'2', age: '13', classType: 'Class A9', address:'Travel 34St, Cr'},
        {name:'Sweet Mask', phone:'099-211-2654', image: require('./assets/SweetMaskProfile.png'),id:'3', age: '16', classType: 'Type C1', address:'Because Junction'},
    ]
    return (
        <View>
            {/* <FlatList
            data ={contacts}
            renderItem = {({item})=>{
                return <ListItem name={item.name} phone={item.phone} image={item.image} />
            }
            }
            keyExtractor={(item)=> item.id}/> */}
            <FlatList
            data ={contacts}
            renderItem = {({item})=>{
                return <ListItem2 name={item.name} class={item.class} image={item.image} age={item.age} classType={item.classType} address={item.address} />
            }
            }
            keyExtractor={(item)=> item.id}/>
            
            
        </View>
    )
}
