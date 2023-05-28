
import React from 'react'
import MainLayout from '../../components/layout/mainLayout';
import WelcomeContainer from '../../components/auth/WelcomeContainer';
import CircleButton from '../../shared/components/CircleButton';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { CheckBox, Input } from '@rneui/themed';
import { TextInput } from '@react-native-material/core'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilledButton from '../../shared/components/FilledButton';
import { SignInUser } from '../../firebase/auth';
import validator from 'validator'
import { showToastWithGravity } from '../../common/toast';
import { useDispatch } from 'react-redux';
import { setSelectedAccount } from '../../store/slices/auth.slice';

const googleImage = require("../../assets/images/auth/google.png");
const appleImage = require("../../assets/images/auth/apple.png");

const styles = StyleSheet.create({
    buttonGroup: {
        alignItems: 'center',
        paddingTop: 20,
        gap: 10
    },
    checkBox: {
        alignItems: 'center'
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
    }
})

const LoginScreen = ({ navigation }: any) => {
    const [checked, setChecked] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const [userEmail, onChangeUserEmail] = React.useState("");
    const [userPassword, onChangeUserPassword] = React.useState("");
    const [visible, setVisible] = React.useState(false);
    const [errorText, setErrorText] = React.useState("")
    const dispatch = useDispatch()

    const toggleCheckbox = () => {
        setStep(step + 1)
        setChecked(!checked);
    }

    const handleSignIn = async () => {
        let res: any = await SignInUser(userEmail, userPassword) ;

        if (res?.success) {
            dispatch(setSelectedAccount({
                ...res.userProfile
            }))
            navigation.navigate("Profile", { name: "Profile" }) ;
        } else {
            showToastWithGravity(res.message)
        }
    }

    React.useEffect(() => {
        setStep(0)
    }, [])

    React.useEffect(() => {
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,24}$/;
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
                {
                    step == 0 && <React.Fragment>
                        <View
                            style={styles.buttonGroup}
                        >
                            <CircleButton
                                text={"Continue with Google"}
                                icon={googleImage}
                            />
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
                        <View
                            style={styles.checkBox}
                        >
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent'
                                }}
                                checked={checked}
                                onPress={toggleCheckbox}
                                iconType="material-community"
                                checkedIcon="checkbox-marked"
                                uncheckedIcon="checkbox-blank-outline"
                                checkedColor="white"
                                title={"Continue with Email"}
                                textStyle={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: '500'
                                }}
                            />
                        </View>
                    </React.Fragment>
                }
                {
                    step == 1 && <>
                        <View style={{
                            ...styles.inputView,
                            paddingTop: 40
                        }}>
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
                        <View style={styles.inputView}>
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
                                secureTextEntry={true}
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
                            <FilledButton disabled={userEmail == "" || userPassword == "" || errorText !== ""} 
                                text='Login' onPress={userEmail == "" || userPassword == "" || errorText !== "" ? () => { console.log(userEmail, userPassword, errorText) } : handleSignIn } />
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
            </WelcomeContainer>
        </MainLayout>
    )
}

export default LoginScreen
