import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
        justifyContent: 'center'    
    },
    disableBorder: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 20,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'    
    }
})

const CircleCheckPrefix = ({disable}: any) => {
    return (
        <View style={disable ? styles.disableBorder : styles.circleBorder}>
            <MaterialCommunityIcons name='check' size={15} color={disable ? '#777': '#1677CF'}/>
        </View>
    )
}

export default CircleCheckPrefix