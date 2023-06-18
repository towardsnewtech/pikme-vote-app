import React from 'react'

import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import MainLayout from '../../components/layout/mainLayout';
import SingleContainer from '../../components/auth/SingleContainer';
import { TextInput } from '@react-native-material/core'
import FilledButton from '../../shared/components/FilledButton';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CircleCheckPrefix from '../../shared/components/CicleCheckPrefix';
import { SignUpUser } from '../../firebase/auth';

import validator from 'validator'
import { showToastWithGravity } from '../../common/toast';
import _Text from '../../shared/components/_Text';

const styles = StyleSheet.create({
    titleLabel: {
        color: 'white',
        fontSize: 20
    },
    inputView: {
        alignItems: 'center'
    },
    input: {
        paddingRight: 5,
        paddingBottom: 10,
        width: '100%',
    },
    optionView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    optionLabel: {
        color: 'white',
        fontSize: 12
    },
    errorText: {
        color: 'red',
        fontSize: 16
    },
    inputComment: {
        position: 'absolute',
        top: 29,
        left: 20,
        zIndex: 1,
        backgroundColor: '#14275c',
        paddingLeft: 3,
        paddingRight: 3
    }
})

const SingUpScreen = ({ navigation }: any) => {
    const [userEmail, onChangeUserEmail] = React.useState("")
    const [userPassword, onChangeUserPassword] = React.useState("")
    const [visible, setVisible] = React.useState(false)
    const [errorText, setErrorText] = React.useState("")
    const [step, setStep] = React.useState(0)
    const [loading, setLoading] = React.useState(false);

    const [lengthCheck, setLengthCheck] = React.useState(false);
    const [numberCheck, setNumberCheck] = React.useState(false);
    const [specialCheck, setSpecialCheck] = React.useState(false);

    const titles = [
        "Enter your email",
        "Set your password"
    ]

    const goToNext = async () => {

        if (userEmail != "" && userPassword != "") {
            setLoading(true)
            let res = await SignUpUser(userEmail, userPassword)
            setLoading(false)

            if (res.success) {
                showToastWithGravity("Sign Up Successfully! Please check your email inbox to confirm your account.")
                navigation.navigate('Login', { name: 'Login' })
                return
            } else {
                if (res.err)
                    showToastWithGravity("Email already Existed!")
            }
        }

        if (step == 1) {
            navigation.navigate("Login", { name: "Login" })
        }
        setStep(step + 1)
    }

    React.useEffect(() => {
        var regularExpression = /^(?=.*[0-9])(?=.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])[a-zA-Z0-9.!@#$%^&*()]{8,}$/;

        var regularLengthExpression = /^.{8,}$/;
        if (regularLengthExpression.test(userPassword)) {
            setLengthCheck(true)
        } else {
            setLengthCheck(false)
        }

        var regularSpecialExpression = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (regularSpecialExpression.test(userPassword)) {
            setSpecialCheck(true)
        } else {
            setSpecialCheck(false)
        }

        var regularNumberExpression = /(?=.*[0-9])/;
        if (regularNumberExpression.test(userPassword)) {
            setNumberCheck(true)
        } else {
            setNumberCheck(false)
        }

        if (!regularExpression.test(userPassword)) {
            setErrorText("Invalid Password")
            return
        }

        setErrorText("")
    }, [userPassword])

    React.useEffect(() => {
        if (!validator.isEmail(userEmail) && userEmail != "") {
            setErrorText("Invalid Email")
            return
        }

        setErrorText("")
    }, [userEmail])

    return (
        <MainLayout>
            <SingleContainer>
                <ScrollView>
                    <View>
                        <Text style={styles.titleLabel}>{titles[step]}</Text>
                    </View>
                    {step == 0 && <View style={{
                        ...styles.inputView,
                        paddingTop: 40,
                        position: 'relative',
                    }}>
                        <View style={styles.inputComment}>
                            <_Text
                                name='Email'
                            />
                        </View>
                        <TextInput
                            inputContainerStyle={{
                                backgroundColor: 'transparent'
                            }}
                            inputStyle={{
                                paddingLeft: 15,
                                color: 'white'
                            }}
                            color='white'
                            variant='outlined'
                            onChangeText={onChangeUserEmail}
                            value={userEmail}
                            style={styles.input}
                            placeholder='Write your email'
                            placeholderTextColor={'white'}
                        />
                    </View>}
                    {step == 1 && <>
                        <View style={{
                            ...styles.inputView,
                            paddingTop: 40,
                            position: 'relative'
                        }}>
                            <View style={styles.inputComment}>
                                <_Text
                                    name='New password'
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
                                secureTextEntry={!visible}
                                placeholder=''
                                placeholderTextColor={'white'}
                                trailing={<TouchableOpacity
                                    onPress={() => { setVisible(!visible) }}
                                >
                                    <MaterialCommunityIcons name={visible ? 'eye' : 'eye-off'} color={'white'} size={25} />
                                </TouchableOpacity>}
                            />
                        </View>
                        <View>
                            <View style={styles.optionView}>
                                <CircleCheckPrefix disable={!lengthCheck} />
                                <Text style={lengthCheck ? styles.optionLabel : { ...styles.optionLabel, color: '#777' }}>  Password must be 8 charaters long </Text>
                            </View>
                            <View style={styles.optionView}>
                                <CircleCheckPrefix disable={!numberCheck} />
                                <Text style={numberCheck ? styles.optionLabel : { ...styles.optionLabel, color: '#777' }}>  Password must contain at least a number(0 - 9)</Text>
                            </View>
                            <View style={styles.optionView}>
                                <CircleCheckPrefix disable={!specialCheck} />
                                <Text style={specialCheck ? styles.optionLabel : { ...styles.optionLabel, color: '#777' }}>  Password must contain a special character(@.#$.!)</Text>
                            </View>
                        </View>
                    </>}
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
                                    text={'Next'} width={'100%'} onPress={userEmail == "" || errorText !== "" ? () => { } : goToNext}
                                />
                                :
                                <FilledButton
                                    disabled={loading || userPassword == "" || errorText !== ""}
                                    text={'Next'} width={'100%'} onPress={loading || userPassword == "" || errorText !== "" ? () => { } : goToNext}
                                />
                        }
                    </View>
                </ScrollView>
            </SingleContainer>
        </MainLayout>
    )
}

export default SingUpScreen;