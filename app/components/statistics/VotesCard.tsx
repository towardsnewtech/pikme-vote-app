import React from 'react'
import { View, StyleSheet } from 'react-native'
import _Text from '../../shared/components/_Text'

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        alignItems: 'center',
        paddingBottom: 10
    }
})

interface ICard {
    amount: number
    width: string
    comment: string
}

const VotesCard = ({
    amount,
    width,
    comment
}: ICard) => {
    return (
        <View 
            style={{
                ...styles.container,
                width: width
            }}
        >
            <_Text
                name={`${amount}`}
                ftsize={24}
                ftweight='600'
                mt={10}
            />
            <_Text
                name={comment}
                color='#999'
            />
        </View>
    )
}

export default VotesCard