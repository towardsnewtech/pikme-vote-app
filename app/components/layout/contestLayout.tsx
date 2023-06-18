import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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
const ContestLayout = ({children}: any) => {
    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.linearBackground}
                >
                    {children}
                </LinearGradient>
            </View>
        // </SafeAreaView>
    )
}

export default ContestLayout