import React from 'react'

import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'

import MainLayout from '../../components/layout/mainLayout';
import SingleContainer from '../../components/auth/SingleContainer';
import { TextInput } from '@react-native-material/core'
import FilledButton from '../../shared/components/FilledButton';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircleCheckPrefix from '../../shared/components/CicleCheckPrefix';
import { SignUpUser } from '../../firebase/auth';

import validator from 'validator'
import { showToastWithGravity } from '../../common/toast';

const styles = StyleSheet.create({
    titleLabel: {
        color: 'white',
        fontSize: 20
    },
    inputView: {
        alignItems: 'center',
    },
    input: {
        paddingRight: 5,
        paddingBottom: 10,
        width: '100%',
    },
    optionLabel: {
        color: 'white',
        paddingBottom: 10,
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText : {
        color: 'red',
        fontSize: 16
    }
})

const SingUpScreen = ({navigation}: any) => {
    const [userEmail, onChangeUserEmail] = React.useState("")
    const [userPassword, onChangeUserPassword] = React.useState("")
    const [visible, setVisible ] = React.useState(false)
    const [errorText, setErrorText] = React.useState("")
    const [step, setStep] = React.useState(0)
    const [loading, setLoading] = React.useState(false);

    const titles = [
        "Enter your email",
        "Set your password"
    ]

    const goToNext = async () => {

        if (userEmail != "" && userPassword != "") {
            setLoading(true)
            let res = await SignUpUser(userEmail, userPassword)
            setLoading(false)

            if(res.success) {
                navigation.navigate('Login', {name: 'Login'})
                return 
            } else {
                if (res.err)
                    showToastWithGravity("Email already Existed!")
            }
        }

        if(step == 1) {
            navigation.navigate("Login", { name: "Login" })
        }
        setStep(step + 1)
    }

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
            <SingleContainer>
                <View>
                    <Text style={styles.titleLabel}>{titles[step]}</Text>
                </View>
                { step == 0 && <View style={{
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
                </View> }
                { step == 1 && <>
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
                                onChangeText={onChangeUserPassword}
                                value={userPassword}
                                style={styles.input}
                                placeholder='New Password'
                                placeholderTextColor={'white'}
                                trailing={<TouchableOpacity
                                    onPress={() => { setVisible(!visible) }}
                                >
                                    <MaterialCommunityIcons name={!visible ? 'eye' : 'eye-off'} color={'white'} size={25}/>
                                </TouchableOpacity>}
                            />
                    </View>
                    <View>
                        <Text style={styles.optionLabel}><CircleCheckPrefix />  <Text>Password must be 8 charaters long</Text></Text>
                        <Text style={styles.optionLabel}><CircleCheckPrefix />  Password must contain at least a number(0 - 9)</Text>
                        <Text style={styles.optionLabel}><CircleCheckPrefix />  Password must contain a special character(@.#$.!)</Text>
                    </View>
                </> }
                <View>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
                <View style={{
                    paddingTop: 100
                }}>
                    {
                        step == 0 ?
                            <FilledButton
                                disabled={userEmail == "" || errorText !== ""}
                                text={'Next'} width={'100%'} onPress={userEmail == "" || errorText !== "" ? () => {} : goToNext}
                            />
                        :
                            <FilledButton
                                disabled={loading || userPassword == "" || errorText !== ""}
                                text={'Next'} width={'100%'} onPress={loading || userPassword == "" || errorText !== "" ? () => {} : goToNext}
                            />
                    }
                </View>
            </SingleContainer>
        </MainLayout>
    )
}

export default SingUpScreen;