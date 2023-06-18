
import React from 'react'
import MainLayout from '../../components/layout/mainLayout';
import WelcomeContainer from '../../components/auth/WelcomeContainer';
import CircleButton from '../../shared/components/CircleButton';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView
} from 'react-native'

import { TextInput } from '@react-native-material/core'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import FilledButton from '../../shared/components/FilledButton';
import { SignInUser, SignInWithGoogle } from '../../firebase/auth';
import validator from 'validator';
import { showToastWithGravity } from '../../common/toast';
import { useDispatch } from 'react-redux';
import { setSelectedAccount } from '../../store/slices/auth.slice';
import _Text from '../../shared/components/_Text';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const googleImage = require("../../assets/images/auth/google.png");
const appleImage = require("../../assets/images/auth/apple.png");
const contactImage = require('../../assets/images/settings/contact.png')

const styles = StyleSheet.create({
    buttonGroup: {
        alignItems: 'center',
        paddingTop: 20,
        gap: 10
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    orText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    },
    inputView: {
        alignItems: 'center',
        position: 'relative'
    },
    input: {
        paddingRight: 5,
        paddingBottom: 10,
        width: '80%',
    },
    label: {
        paddingLeft: '10%',
        color: '#7AB5EC',
        fontSize: 16
    },
    buttonView: {
        paddingTop: 20
    },
    whiteText: {
        color: 'white'
    },
    blueText: {
        color: '#7AB5EC'
    },
    errorText : {
        color: 'red',
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: '10%'
    },
    inputComment: {
        position: 'absolute',
        top: -12,
        left: 55,
        zIndex: 1,
        paddingLeft: 3,
        paddingRight: 3
    }
})

const LoginScreen = ({ navigation }: any) => {
    const [step, setStep] = React.useState(0);
    const [userEmail, onChangeUserEmail] = React.useState("");
    const [userPassword, onChangeUserPassword] = React.useState("");
    const [visible, setVisible] = React.useState(true);
    const [errorText, setErrorText] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [isGoogleLoading, setIsGoolgeLoading] = React.useState(false);
    const dispatch = useDispatch()

    const toggleCheckbox = () => {
        setStep(step + 1)
    }

    const handleSignIn = async () => {
        setLoading(true);
        let res: any = await SignInUser(userEmail, userPassword) ;
        setLoading(false);

        if (res?.success) {
            dispatch(setSelectedAccount({
                ...res.userProfile,
                password: res.password
            }))
            showToastWithGravity("Sign In Successfully")
            navigation.navigate("Profile", { name: "Profile" }) ;
        } else {
            showToastWithGravity(res?.message)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();

            setIsGoolgeLoading(true)

            let res = await SignInWithGoogle(idToken);
            setIsGoolgeLoading(false);
            if (res?.success) {
                dispatch(setSelectedAccount({
                    ...res.userProfile
                }))
                showToastWithGravity("Sign In Successfully")
                navigation.navigate("Profile", { name: "Profile" }) ;
            } else {
                showToastWithGravity(res?.message);
            }

        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        setStep(0);
        GoogleSignin.signOut();
        GoogleSignin.configure({
            webClientId: '915138794331-oqtpabbffn4kcq1vkrtj5pgbava7b9ea.apps.googleusercontent.com'
        })
    }, [])

    React.useEffect(() => {
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9.!@#$%^&*()]{8,24}$/;
        if (!regularExpression.test(userPassword)) {
            setErrorText("Invalid Password")
            return
        }

        setErrorText("")
    }, [userPassword])

    React.useEffect(() => {
        if(!validator.isEmail(userEmail) && userEmail != "") {
            setErrorText("Invalid Email")
            return
        }

        setErrorText("")
    }, [userEmail])

    return (
        <MainLayout>
            <WelcomeContainer>
                {/* <ScrollView> */}
                {
                    step == 0 && <React.Fragment>
                        <View
                            style={styles.buttonGroup}
                        >
                            <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={handleGoogleSignIn}>
                                <CircleButton
                                    text={"Continue with Google"}
                                    icon={googleImage}
                                />
                            </TouchableOpacity>
                            {/* <GoogleSigninButton
                                style={{width: 192, height: 48}}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={handleGoogleSignIn} 
                            /> */}
                            <CircleButton
                                text={"Continue with Apple"}
                                icon={appleImage}
                            />
                        </View>
                        <View>
                            <Text style={styles.orText}>
                                Or
                            </Text>
                        </View>
                        <TouchableOpacity onPress={toggleCheckbox}>
                            <View style={styles.checkBox}>
                                <FontAwesome5 name="envelope" size={24} color="#ccc" />
                                <_Text name='Continue with Email' />
                            </View>
                        </TouchableOpacity>
                    </React.Fragment>
                }
                {
                    step == 1 && <>
                        <View style={{
                            ...styles.inputView,
                            marginTop: 40
                        }}>
                            <View style={{ ...styles.inputComment, backgroundColor: '#1c2b63' }}>
                                <_Text
                                    name='Email'
                                    color='#999'
                                />
                            </View>
                            <TextInput
                                inputContainerStyle={{
                                    backgroundColor: 'transparent',
                                }}
                                inputStyle={{
                                    color: 'white',
                                }}
                                color='white'
                                variant='outlined'
                                onChangeText={onChangeUserEmail}
                                value={userEmail}
                                style={styles.input}
                                placeholder='Write your email'
                                placeholderTextColor={'white'}
                            />
                        </View>
                        <View style={{ ...styles.inputView, marginTop: 15}}>
                            <View style={{ ...styles.inputComment, backgroundColor: '#1c2e6b' }}>
                                <_Text
                                    name='Password'
                                    color='#999'
                                />
                            </View>
                            <TextInput
                                inputContainerStyle={{
                                    backgroundColor: 'transparent',
                                }}
                                inputStyle={{
                                    color: 'white',
                                }}
                                color='white'
                                variant='outlined'
                                onChangeText={onChangeUserPassword}
                                value={userPassword}
                                style={styles.input}
                                placeholder='Write your password'
                                placeholderTextColor={'white'}
                                secureTextEntry={visible}
                                trailing={<TouchableOpacity
                                    onPress={() => { setVisible(!visible) }}
                                >
                                    <MaterialCommunityIcons name={!visible ? 'eye' : 'eye-off'} color={'white'} size={25} />
                                </TouchableOpacity>}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Forgot Password</Text>
                        </View>
                        { errorText && <View>
                            <Text style={styles.errorText}>{errorText}</Text>
                        </View> }
                        <View style={styles.buttonView}>
                            <FilledButton disabled={userEmail == "" || userPassword == "" || errorText !== "" || loading} 
                                text='Login' onPress={userEmail == "" || userPassword == "" || errorText !== "" ? () => {} : handleSignIn } />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 10 }}>
                            <Text style={styles.whiteText}>
                                New to Pikme? &nbsp;
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp", { name: 'SignUp' })}>
                                <Text style={styles.blueText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
                {isGoogleLoading && <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', borderTopLeftRadius: 30, borderTopRightRadius: 30, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0 }}>
                    <ActivityIndicator size={100} color='blue' />
                </View>}
                {/* </ScrollView> */}
            </WelcomeContainer>
        </MainLayout>
    )
}

export default LoginScreen
