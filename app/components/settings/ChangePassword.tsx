import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { TextInput } from '@react-native-material/core'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FilledButton from '../../shared/components/FilledButton';
import { changePassword } from '../../firebase/auth';
import { showToastWithGravity } from '../../common/toast';
import { useAppSelector } from '../../store/hooks';
import _Text from '../../shared/components/_Text';
import { useDispatch } from 'react-redux';
import { setSelectedAccount } from '../../store/slices/auth.slice';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative'
    },
    titleText: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'center'
    },
    inputView: {
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        paddingRight: 5,
        paddingBottom: 10,
        width: '100%',
    },
    inputComment: {
        position: 'absolute',
        top: -10,
        left: 15,
        zIndex: 1,
        paddingLeft: 3,
        paddingRight: 3
    }
})

const ChangePassword = ({ navigation }: any) => {
    const [oldPassword, onChangeOldPassword] = React.useState("")
    const [newUserPassword, onChangeNewPassword] = React.useState("")
    const [confirmNewPassword, onChangeConfirmNewPassword] = React.useState("")
    const [oldPasswordVisible, setOldPasswordVisible] = React.useState(true)
    const [newPasswordVisible, setNewPasswordVisible] = React.useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(true)

    const dispatch = useDispatch()
    const { account } = useAppSelector((state) => state.auth)

    const handleChangePassword = async () => {
        if (newUserPassword != confirmNewPassword) {
            showToastWithGravity("Wrong Confirm Password")
            return;
        }

        let res = await changePassword(oldPassword, newUserPassword, account.password)
        if (res?.success) {
            dispatch(setSelectedAccount({
                firstname: account.firstname,
                lastname: account.lastname,
                username: account.username,
                userEmail: account.userEmail,
                balance: account.balance,
                password: newUserPassword
            }))
            showToastWithGravity("Password Reset Successfully")
            navigation.navigate("Setting", { name: "Setting" })
        } else {
            showToastWithGravity(res?.message)
        }
    }

    return (
        <View
            style={styles.container}
        >
            <ScrollView>

                <View>
                    <Text style={styles.titleText}>Change Password</Text>
                </View>
                <View style={{
                    ...styles.inputView,
                    marginTop: 40
                }}>
                    <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                        <_Text
                            name='Old password'
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
                        onChangeText={onChangeOldPassword}
                        value={oldPassword}
                        style={styles.input}
                        placeholder='Old Password'
                        placeholderTextColor={'white'}
                        secureTextEntry={oldPasswordVisible}
                        trailing={<TouchableOpacity
                            onPress={() => { setOldPasswordVisible(!oldPasswordVisible) }}
                        >
                            <MaterialCommunityIcons name={!oldPasswordVisible ? 'eye' : 'eye-off'} color={'white'} size={25} />
                        </TouchableOpacity>}
                    />
                </View>
                <View
                    style={{
                        paddingTop: 30
                    }}
                >
                    <View style={{
                        ...styles.inputView,
                        marginTop: 40
                    }}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='New password'
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
                            onChangeText={onChangeNewPassword}
                            value={newUserPassword}
                            style={styles.input}
                            placeholder='New Password'
                            placeholderTextColor={'white'}
                            secureTextEntry={newPasswordVisible}
                            trailing={<TouchableOpacity
                                onPress={() => { setNewPasswordVisible(!newPasswordVisible) }}
                            >
                                <MaterialCommunityIcons name={!newPasswordVisible ? 'eye' : 'eye-off'} color={'white'} size={25} />
                            </TouchableOpacity>}
                        />
                    </View>
                    <View style={{
                        ...styles.inputView,
                        marginTop: 15
                    }}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='Confirm password'
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
                            onChangeText={onChangeConfirmNewPassword}
                            value={confirmNewPassword}
                            style={styles.input}
                            placeholder='Confirm Password'
                            placeholderTextColor={'white'}
                            secureTextEntry={confirmPasswordVisible}
                            trailing={<TouchableOpacity
                                onPress={() => { setConfirmPasswordVisible(!confirmPasswordVisible) }}
                            >
                                <MaterialCommunityIcons name={!confirmPasswordVisible ? 'eye' : 'eye-off'} color={'white'} size={25} />
                            </TouchableOpacity>}
                        />
                    </View>
                </View>
            </ScrollView>
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    width: '100%',
                    marginLeft: '5%'
                }}
            >
                <FilledButton text='save' width={'100%'} onPress={handleChangePassword} />
            </View>
        </View>
    )
}

export default ChangePassword