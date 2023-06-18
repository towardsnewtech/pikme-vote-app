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
    }
})
const StatisticsLayout = ({children}: any) => {
    return (
        // <SafeAreaView>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#21263b', '#21263b' ]}
                    style={styles.linearBackground}
                >
                    {children}
                </LinearGradient>
            </View>
        // </SafeAreaView>
    )
}

export default StatisticsLayout