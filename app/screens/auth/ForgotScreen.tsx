import * as React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const ForgotScreen = () => {
    const [userEmail, onChangeUserEmail] = React.useState("")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.text}>🤔</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Please, enter your registered email</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        onChangeText={onChangeUserEmail}
                        value={userEmail}
                        style={styles.input}
                        placeholder='Write your email'
                    />
                </View>
                <View>
                
                </View>
                <View style={styles.buttonView}>
                    <LinearGradient
                        colors={['#00A15A', '#00BD5A', '#05925A' ]}
                        style={styles.linearGradient}
                    >
                        <Text style={styles.btnText}>Submit</Text>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        height: 45
    },
    buttonView: {
        marginTop: 280,
        paddingTop: 30
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 60,
        width: 350,
    },
    inputView: {
        borderWidth: 1,
        borderColor: 'lightgray',
        width: '95%',
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10,
        height: 55,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        position: 'relative'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#373F4F',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center'
    },
    textView: {
        width:'100%',
        marginBottom: 20,
        alignItems: 'center',
    },
})