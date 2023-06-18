import React from 'react'

import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    SafeAreaView,
    Image
} from 'react-native'

import { TextInput } from '@react-native-material/core'
import FooterLayout from '../layout/footerLayout'
import FilledButton from '../../shared/components/FilledButton'
import OutlinedButton from '../../shared/components/OutlinedButton'
import { updateUser } from '../../firebase/auth'
import { useAppSelector } from '../../store/hooks'
import { useDispatch } from 'react-redux'
import { setSelectedAccount } from '../../store/slices/auth.slice'
import _Text from '../../shared/components/_Text'

const avatarImage = require('../../assets/images/profile/avatar.png')
const editImage = require('../../assets/images/profile/edit.png')

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,
        paddingBottom: 120,
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative'
    },
    avatarView: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    editIconView: {
        position: 'absolute',
        right: 110,
        bottom: -30
    },
    inputView: {
        paddingBottom: 20,
        position: 'relative'
    },
    input: {
    },
    buttonGroup: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        marginLeft: '5%',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
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

const EditProfile = ({ navigation }: any) => {
    const [userFirstName, setFirstName] = React.useState('')
    const [userLastName, setLastName] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch()
    const { account } = useAppSelector((state) => state.auth)

    const handleUpdate = async () => {
        setLoading(true)
        dispatch(setSelectedAccount({
            firstname: userFirstName,
            lastname: userLastName,
            username: userName,
            userEmail: userEmail,
            balance: account.balance,
            password: account.password
        }))
        let res = await updateUser({ userFirstName, userLastName, userName, userEmail });
        setLoading(false)

        if (res)
            navigation.navigate('Profile', { name: 'Profile' })
    }

    React.useEffect(() => {
        setFirstName(account.firstname);
        setLastName(account.lastname);
        setUserEmail(account.userEmail);
        setUserName(account.username);
    }, [account])

    return (
        <>
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.avatarView}>
                        <Image source={avatarImage} style={{
                            width: 120,
                            height: 120
                        }} />
                        <View style={styles.editIconView}>
                            <Image source={editImage} />
                        </View>
                    </View>
                    <View style={[styles.inputView, { marginTop: 30 }]}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='First Name'
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
                            onChangeText={val => setFirstName(val)}
                            value={userFirstName}
                            style={styles.input}
                            placeholder='First Name'
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='Last Name'
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
                            onChangeText={val => setLastName(val)}
                            value={userLastName}
                            style={styles.input}
                            placeholder='Last Name'
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='Username'
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
                            onChangeText={val => setUserName(val)}
                            value={userName}
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <View style={{ ...styles.inputComment, backgroundColor: '#283563' }}>
                            <_Text
                                name='Email Address'
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
                            onChangeText={val => setUserEmail(val)}
                            value={userEmail}
                            style={styles.input}
                            placeholder='Email Address'
                            placeholderTextColor={'white'}
                        />
                    </View>
                </ScrollView>
                <View style={styles.buttonGroup}>
                    <OutlinedButton text={'Cancel'} onPress={() => { navigation.navigate('Profile', { name: 'Profile' }) }} width='45%' />
                    <FilledButton disabled={loading || userFirstName == "" || userLastName == "" || userName == "" || userEmail == ""} text={'Save'} onPress={loading || userFirstName == "" || userLastName == "" || userName == "" || userEmail == "" ? () => { } : handleUpdate} width='45%' />
                </View>

            </View>
            <FooterLayout navigation={navigation} />
        </>
    )
}

export default EditProfile