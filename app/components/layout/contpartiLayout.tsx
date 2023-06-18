import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native'
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
    }
})

const ContPartiLayout = ({
    children
}: any) => {
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

export default ContPartiLayout