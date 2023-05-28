import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import { TextInput } from '@react-native-material/core'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilledButton from '../../shared/components/FilledButton';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    titleText: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'center'
    },
    inputView: {
        alignItems: 'center',
    },
    input: {
        paddingRight: 5,
        paddingBottom: 10,
        width: '100%',
    },
})

const ChangePassword = ({navigation}: any) => {
    const [oldPassword, onChangeOldPassword] = React.useState("")
    const [newUserPassword, onChangeNewPassword] = React.useState("")
    const [confirmNewPassword, onChangeConfirmNewPassword] = React.useState("")
    const [oldPasswordVisible, setOldPasswordVisible] = React.useState(false)
    const [newPasswordVisible, setNewPasswordVisible] = React.useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false)

    return (
        <View
            style={styles.container}
        >
            <View>
                <Text style={styles.titleText}>Change Password</Text>
            </View>
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
                    onChangeText={onChangeOldPassword}
                    value={oldPassword}
                    style={styles.input}
                    placeholder='Old Password'
                    placeholderTextColor={'white'}
                    trailing={<TouchableOpacity
                        onPress={() => { setOldPasswordVisible(!oldPasswordVisible) }}
                    >
                        <MaterialCommunityIcons name={!oldPasswordVisible ? 'eye' : 'eye-off'} color={'white'} size={25}/>
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
                        onChangeText={onChangeNewPassword}
                        value={newUserPassword}
                        style={styles.input}
                        placeholder='New Password'
                        placeholderTextColor={'white'}
                        trailing={<TouchableOpacity
                            onPress={() => { setOldPasswordVisible(!newPasswordVisible) }}
                        >
                            <MaterialCommunityIcons name={!newPasswordVisible ? 'eye' : 'eye-off'} color={'white'} size={25}/>
                        </TouchableOpacity>}
                    />
                </View>
                <View style={{
                    ...styles.inputView,
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
                        onChangeText={onChangeConfirmNewPassword}
                        value={confirmNewPassword}
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor={'white'}
                        trailing={<TouchableOpacity
                            onPress={() => { setConfirmPasswordVisible(!confirmNewPassword) }}
                        >
                            <MaterialCommunityIcons name={!confirmNewPassword ? 'eye' : 'eye-off'} color={'white'} size={25}/>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
            <View
                style={{
                    paddingTop: 250
                }}
            >
                <FilledButton text='save' width={'100%'} onPress={() => {navigation.navigate("Setting", { name: "Setting" })}}/>
            </View>
        </View>
    )
}

export default ChangePassword