import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    headerView: {
        marginBottom: 30
    },
    backward: {
        position:'absolute',
        left: 0,
        top: 0,
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },
    backText: {
        color: '#B9C7D3',
        fontSize: 20
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
    }
})

const SettingLayout = ({navigation, children, title} : any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>{title}</Text>
                    <View style={styles.backward}>
                        <AntDesign name="arrowleft" size={24} color="#B9C7D3" />
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('Setting', { name: "Setting" })}}
                        >
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    {children}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SettingLayout