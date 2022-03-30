import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/actions/user.actions';



    export default function SignupScreen(){

        const [email, onChangeEmail] = React.useState('');
        const [password, onChangePassword] = React.useState('');
        const loggedInUser = useSelector((state: any) => state.user.loggedInUser);
        const token = useSelector((state: any) => state.user.idToken);

        console.log("signup screen loggedinuser og token: loggedinuser: " + loggedInUser + " token " + token)

        const dispatch = useDispatch();
        

        const handleSignup = ()=>{
            dispatch(signup(email, password))
        }

        console.log(email + " " + password)

        return (
            <View style = {styles.container}>
                <Text>Signup Screen</Text>
                    
                <TextInput style = {styles.input}
                    onChangeText = {onChangeEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput style = {styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />

                <Button title="Signup" onPress={handleSignup} />    

            </View>
            
        )

    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginTop: '5px',
        height: '10px',
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid #333 1px'
    }
})