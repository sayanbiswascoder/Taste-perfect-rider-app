import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginSignupScreen = ({navigation}) => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <StatusBar backgroundColor={'#a53583'} />
            <View style={styles.container}>
                <LinearGradient
                    colors={['#a53583', '#fe3c76', '#fe7e68']}
                    style={styles.logoContainer}
                >
                    {/* <View style={styles.logoContainer}> */}
                    <Text style={styles.logoText}>Taste Perfect</Text>
                    {/* </View> */}
                </LinearGradient>
                <View style={styles.authContainer}>
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity onPress={() => setIsLogin(true)} style={[styles.toggleButton, isLogin && styles.activeButton]}>
                            <Text style={[styles.toggleButtonText, isLogin && styles.activeButtonText]}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLogin(false)} style={[styles.toggleButton, !isLogin && styles.activeButton]}>
                            <Text style={[styles.toggleButtonText, !isLogin && styles.activeButtonText]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formContainer}>
                        {!isLogin && (
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                placeholderTextColor="#888"
                                value={name}
                                onChangeText={setName}
                            />
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Email address"
                            placeholderTextColor="#888"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        {!isLogin && (
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile number"
                                placeholderTextColor="#888"
                                keyboardType="phone-pad"
                                value={mobile}
                                onChangeText={setMobile}
                            />
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor="#888"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        {isLogin && (
                            <TouchableOpacity onPress={()=> navigation.push('ForgetPass')}>
                                <Text style={styles.forgotPassword}>Forgot password?</Text>
                            </TouchableOpacity>
                        )}

                        {/* Submit Button */}
                        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.push('MainApp')}>
                            <Text style={styles.submitButtonText}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f1f2', // Background color gradient can be added
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        marginBottom: 40,
        alignItems: 'center',
        height: '50%',
        width: '100%',
        borderBottomLeftRadius: 20, //
        borderBottomRightRadius: 20, //
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    authContainer: {
        alignItems: 'center',
        width: '90%',
        maxWidth: 350,
        padding: 20,
        borderRadius: 10,
    },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        borderRadius: 10,
    },
    activeButton: {
        backgroundColor: 'red',
    },
    toggleButtonText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    activeButtonText: {
        color: '#fff',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        width: '100%',
        maxWidth: 350,
        elevation: 5,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#333',
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#f75454',
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#e02738',
        borderRadius: 50,
        paddingVertical: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginSignupScreen;
