import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class SignupScreen extends Component {
    render() {
        return (
            <View style={styles.SignupScreenContainter}>
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <View>
                        <TextInput
                        style={styles.textInput} placeholder='Username' />
                    </View>
                    <View>
                        <TextInput 
                        style={styles.textInput} placeholder='Email' />
                    </View>
                    <View>
                        <TextInput 
                        style={styles.textInput} placeholder='Password' />
                    </View>
                    <View>
                        <TextInput 
                        style={styles.textInput} placeholder='Password again' />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpButtonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomText}>
                    <Text>You already have an account?</Text>
                    <Text style={styles.textLink}>Login</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignupScreenContainter: {
        marginHorizontal: 40
    },
    signUpTextContainer: {
        marginBottom: 15
    },
    signUpText: {
        fontSize: 50,
        color:'navy'
    },
    textInputContainer: {
        marginBottom: 10
    },
    textInput:{
        fontSize: 20,
        borderBottomColor: 'navy',
        borderBottomWidth:2,
        marginTop: 10,
        height: 50
    },
    signUpButton:{
        height: 50,
        backgroundColor:'navy',
        marginVertical: 20,
        borderRadius: 15,
        justifyContent:'center'
    },
    signUpButtonText:{
        color: '#fff',
        alignSelf: "center",
        fontSize: 20,
    },
    bottomText:{
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
    textLink:{
        color:'navy'
    }
})