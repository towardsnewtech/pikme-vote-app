import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    StyleSheet,
    View
} from 'react-native'

const styles = StyleSheet.create({
    circleBorder: {
        borderWidth: 1,
        borderColor: '#1677CF',
        borderRadius: 20,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'    }
})

const CircleCheckPrefix = () => {
    return (
        <View style={styles.circleBorder}>
            <MaterialCommunityIcons name='check' size={15} color={'#1677CF'}/>
        </View>
    )
}

export default CircleCheckPrefix