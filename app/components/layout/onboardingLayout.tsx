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
        minHeight: '100%',
        position: 'relative',
    },
    linearBackground: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    label: {
        marginTop: 50,
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
        <SafeAreaView>
            <View style={styles.container}>

                    <LinearGradient
                        colors={['#101E4F', '#2A3E83']}
                        style={styles.linearBackground}
                    >
                        <Text style={styles.label}>Skip</Text>
                        <ScrollView style={{ width: '100%', maxHeight: '100%' }}>
                            {children}
                        </ScrollView>
                    </LinearGradient>

                </View>
        </SafeAreaView>
    )
}

export default OnBoardingLayout