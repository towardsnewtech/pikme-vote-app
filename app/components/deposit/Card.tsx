import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    borderBackground: {
        width: '95%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 30,
        position: 'relative',
        padding: 1
    },
    cardContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden'
    },
    leftCardContainer: {
        width: '65%',
        height: '100%'
    },
    rightCardContainer: {
        width: '35%',
        height: '100%',
        backgroundColor: '#343289'
    },
    childrenContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        padding: 20,
        justifyContent: 'space-between',
    },
    informationView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800'
    },
    walletInformationView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    balanceText: {
        color: '#919DA8',
        fontSize: 15
    },
    validText: {
        color: 'white',
        fontSize: 16
    }
})

interface ICard {
    mt: number
    cardNumber: string
    validThru: string
}

const Card = ({
    mt,
    cardNumber,
    validThru
}: ICard) => {
    return (
        <LinearGradient
            start={{x: 0 , y: 0}}
            end={{x:0, y:1}}
            colors={['#6c737a', '#4F5861' ]}
            style={{
                ...styles.borderBackground,
                marginTop: mt
            }}
        >
            <View style={styles.cardContainer}>
                <LinearGradient
                    start={{x: 0 , y: 0}}
                    end={{x:0, y:1}}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.leftCardContainer}
                >
                </LinearGradient>
                <View style={styles.rightCardContainer}></View>
            </View>
            <View style={styles.childrenContainer}>
                <View style={styles.informationView}>
                    <Text style={styles.nameText}>PikMe</Text>
                    <Text style={styles.nameText}>VISA</Text>
                </View>
                <View style={styles.walletInformationView}>
                    <View>
                        <Text style={styles.balanceText}>RUCHIT MEHTA</Text>
                        <Text style={styles.balanceText}>{cardNumber}</Text>
                    </View>
                    <View style={{
                        alignItems: 'flex-end'
                    }}>
                        <Text style={styles.validText}>VALID THRU</Text>
                        <Text style={styles.validText}>{validThru}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

Card.defaultProps = {
    cardNumber: "0000 0000 0000 0000",
    validThru: "00/00"
}

export default Card
