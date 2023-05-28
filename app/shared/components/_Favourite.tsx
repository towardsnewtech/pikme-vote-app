import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import _Text from './_Text'

const star = require('../../assets/images/global/star.png')

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        borderRadius: 15,
        // boxShadow: '0px 0px 20px 0px #ffdb77',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

interface IFavourite {
    amount: number
    bgColor: string
    isBorder: boolean
}

const _Favourite = ({
    amount,
    bgColor,
    isBorder
}: IFavourite) => {
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: bgColor,
                borderColor: '#999',
                borderWidth: isBorder == true ? 1 : 0
            }}
        >
            <Image
                source={star}
            />
            <_Text
                name={`${amount}`}
                ftsize={14}
                ftweight='600'
            />
        </View>
    )
}

_Favourite.defaultProps ={
    bgColor: '#3b3a41',
    isBorder: false
}

export default _Favourite