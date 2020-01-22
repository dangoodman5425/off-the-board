import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import styles from './Login.styles'


class Login extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior={(Platform.OS === 'ios') ? 'padding' : null}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}


export default Login;
