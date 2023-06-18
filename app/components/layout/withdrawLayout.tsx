import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        height: '100%',
        position: 'relative'
    },
    linearBackground: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    icon: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        left: 20,
        top: 50
    }
})
const WithdrawLayout = ({children, handlePrev}: any) => {
    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.linearBackground}
                >
                    <AntDesign style={styles.icon} name="arrowleft" onPress={handlePrev} />
                    {children}
                </LinearGradient>
            </View>
        // </SafeAreaView>
    )
}

export default WithdrawLayout