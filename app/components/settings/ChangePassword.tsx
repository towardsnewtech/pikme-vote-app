import React from 'react'

import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { TextInput } from '@react-native-material/core'
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import FilledButton from '../../shared/components/FilledButton';
import { SendPasswordResetEmail } from '../../firebase/auth';

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
    const [email, onChangeEmail] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const handleSend = async () => {
        setLoading(true)
        let res = await SendPasswordResetEmail(email)
        setLoading(false)

        navigation.navigate("Setting", { name: "Setting" })
    }

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
                    onChangeText={onChangeEmail}
                    value={email}
                    style={styles.input}
                    placeholder='Enter your email'
                    placeholderTextColor={'white'}
                />
            </View>
            <View
                style={{
                    paddingTop: 50
                }}
            >
                <FilledButton disabled={loading} text='send' width={'100%'} onPress={loading ? () => {} : handleSend}/>
            </View>
        </View>
    )
}

export default ChangePassword