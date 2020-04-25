import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.containter}>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Log in</Text>
                </View>
                <View>
                    <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor='#9b989e'/>
                    <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor='#9b989e'/>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.absentAccountContainer}>
                    <Text>Do you have an account?</Text>
                    <Text style={styles.signUp}>Sign up</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    containter:{
        marginHorizontal: 50
    },
    loginTextContainer:{
        marginBottom: 10
    },
    loginText:{
        fontSize:50,
        color: '#470494',
    },
    textInput:{
        borderBottomColor: '#470494',
        borderBottomWidth:2,
        fontSize: 20,
        height: 50,
        marginTop: 10

    },
    forgotPassword:{
        alignSelf: 'flex-end',
        color: '#9856db'
    },
    loginButton:{
        height:40,
        backgroundColor:'#470494',
        marginVertical: 40,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 20
    },
    loginButtonText:{
        color: 'white',
        fontSize:20,
    },
    absentAccountContainer:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    signUp:{
        marginLeft: 7,
        color: '#470494'
    }
    
})
