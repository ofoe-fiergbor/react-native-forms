import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function ListItem({name, phone, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.profilePic} source={image} />

            <View style={styles.info}>
                <Text style={styles.fullName} numberOfLines={1}>{name}</Text>
                <Text>{phone}</Text>
            </View>
            <View  style={styles.icons}>
                <Ionicons name='md-call' size={20} color='#03ecfc' />
            </View>
            <View  style={styles.icons}>
                <MaterialCommunityIcons name='message-bulleted' size={20} color='#03ecfc' />
            </View>
            <View  style={styles.icons}>
                <SimpleLineIcons name='options-vertical' size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 11
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info:{
        flex: 4,
        justifyContent:'center',
        marginHorizontal: 15
   },
    fullName:{
        fontSize:17,
        fontWeight: 'bold',
        
    },
    icons:{
        flex: 1
    }
})
