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
import { loadUser, updateUser } from '../../firebase/auth'
import { useAppSelector } from '../../store/hooks'
import { useDispatch } from 'react-redux'
import { setSelectedAccount } from '../../store/slices/auth.slice'

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
        paddingRight: '5%'
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
        paddingBottom: 20
    },
    input: {

    },
    buttonGroup: {
        paddingTop: 60,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center'
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
            userEmail: userEmail
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
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.avatarView}>
                        <Image source={avatarImage} style={{
                            width: 120,
                            height: 120
                        }} />
                        <View style={styles.editIconView}>
                            <Image source={editImage} />
                        </View>
                    </View>
                    <View style={[styles.inputView, { paddingTop: 30 }]}>
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

                    <View style={styles.buttonGroup}>
                        <OutlinedButton text={'Cancel'} onPress={() => { navigation.navigate('Profile', { name: 'Profile' }) }} width='45%' />
                        <FilledButton disabled={loading || userFirstName == "" || userLastName == "" || userName == "" || userEmail == "" } text={'Save'} onPress={loading || userFirstName == "" || userLastName == "" || userName == "" || userEmail == "" ? () => {} : handleUpdate} width='45%' />
                    </View>
                </View>
            </ScrollView>
            <FooterLayout navigation={navigation} />
        </SafeAreaView>
    )
}

export default EditProfile