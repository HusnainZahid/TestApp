import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { red, silver } from '../../constanat/colors';
import { styles } from './styles';
var validator = require("email-validator");

const Login = ({navigation}:{navigation:any}) => {
    const [email,setEmail] = useState('')
    const [emailclr,setEmailclr] = useState(silver)
    const [password,setpassword] = useState('')
    const [passwordclr,setpasswordclr] = useState(silver)

    const validation = () => {
        const valid = validator.validate(email); // true
        if(email === '' || !valid){
            setEmailclr(red)
        } else if(password === ''){
            setpasswordclr(red)
        } else {
        navigation.navigate('DrawerNavigator')
        }
    }

    return(
        <View style={styles.container}>
                <StatusBar backgroundColor={'#fff'}/>
                <View style={styles.login}>
                    <Text style={styles.logintext}>Let's Login</Text>
                </View>
                <Text style={styles.inputtext}>Email Address</Text>
                <View style={[styles.input,{borderColor:emailclr}]}>
                    <TextInput
                    style={styles.inputstyle}
                    placeholder='Example.john@gmail.com'
                    placeholderTextColor={'#0005'}
                    onChangeText={(email) => {
                        setEmail(email)
                        setEmailclr(silver)
                        }}/>
                </View>
                <Text style={styles.inputtext}>Password</Text>
                <View style={[styles.input,{borderColor:passwordclr}]}>
                    <TextInput
                    style={styles.inputstyle}
                    placeholder='*********'
                    placeholderTextColor={'#0005'}
                    secureTextEntry
                    onChangeText={(password) => {
                        setpassword(password)
                        setpasswordclr(silver)
                        }}/>
                </View>
                <TouchableOpacity
                onPress={() => {validation()}}
                style={styles.button}>
                    <Text></Text>
                    <Text style={styles.buttontext}>Login</Text>
                    <Icon name={'arrow-forward'} color={'#fff'} size={20} style={styles.buttonicon}/>
                </TouchableOpacity>
        </View>
    )
}
  
export default Login;