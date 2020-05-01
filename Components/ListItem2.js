import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'


export default function ListItem2({ image, name, classType, age, address }) {
    return (
        <View style={styles.petListContainer}>
            <View style={styles.instanceContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={image} />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.otherDetails}>{classType}</Text>
                    <Text style={styles.otherDetails}>{age} years old</Text>
                    <View style={styles.location}>
                        <MaterialCommunityIcons name='map-marker-outline' style={styles.otherDetails}/>
                        <Text numberOfLines={1}
                            style={styles.otherDetails}>{address}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    petListContainer: {
        marginHorizontal: 30,
    },
    instanceContainer: {
        flexDirection: 'row',
        flex: 100,
        height: 145,

    },
    imageContainer: {
        flex: 50,
    
    },
    image: {
        width: 100,
        height: 130,
        borderRadius: 20,
        position:'absolute',
        zIndex:99

    },

    detailContainer: {
        height: 95,
        flex: 83,
        marginTop: 13,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3
    },
    name: {
        color: 'navy',
        fontSize: 16,
        fontWeight: 'bold'
    },
    otherDetails: {
        color: '#c0c0c4',
        fontSize: 12,
        fontWeight: 'bold',
        marginVertical: 2
    },
    location:{
        flexDirection:'row',
        alignContent: 'center'
    }
})