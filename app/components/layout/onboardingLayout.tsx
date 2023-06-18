import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
    },
    linearBackground: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    label: {
        marginTop: '10%',
        color: 'white',
        fontSize: 20,
        alignSelf: 'flex-end',
        paddingRight: 30,
        paddingBottom: 10
    }
})

const OnBoardingLayout = ({
    children
}: any) => {
    return (
        // <SafeAreaView>
            <View style={styles.container}>

                    <LinearGradient
                        colors={['#1b202f', '#1b202f']}
                        style={styles.linearBackground}
                    >
                        <Text style={styles.label}>Skip</Text>
                        <ScrollView style={{ width: '100%', maxHeight: '100%' }}>
                            <View style={{ alignItems: 'center' }}>
                                {children}
                            </View>
                        </ScrollView>
                    </LinearGradient>

                </View>
        // </SafeAreaView>
    )
}

export default OnBoardingLayout