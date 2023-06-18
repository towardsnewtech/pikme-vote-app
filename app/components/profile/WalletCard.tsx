import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

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
        width: '70%',
        height: '100%'
    },
    rightCardContainer: {
        width: '30%',
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

    },
    nameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800'
    },
    userNameText: {
        color: 'white',
        fontSize: 16
    },
    walletInformationView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    balanceText: {
        color: '#919DA8',
        fontSize: 15
    },
    valueText: {
        color: 'white',
        fontSize: 26,
        fontWeight: '800'
    },
    walletText: {
        color: 'white',
        fontSize: 18
    }
})

const WalletCard = ({userFirstName, userLastName, balance, children, navigation, showLink}: any) => {
    return (
        <LinearGradient
            start={{x: 0 , y: 0}}
            end={{x:0, y:1}}
            colors={['#6c737a', '#4F5861' ]}
            style={styles.borderBackground}
        >
            <View style={styles.cardContainer}>
                <LinearGradient
                    start={{x: 0 , y: 0}}
                    end={{x:0, y: 1 }}
                    colors={['#1b202f', '#1b202f' ]}
                    style={styles.leftCardContainer}
                >
                </LinearGradient>
                <View style={styles.rightCardContainer}></View>
            </View>
            <View style={styles.childrenContainer}>
                <View style={styles.informationView}>
                    <Text style={styles.nameText}>PikMe</Text>
                    <Text style={styles.userNameText}>{userFirstName} {userLastName}</Text>
                </View>
                <View style={styles.walletInformationView}>
                    <View>
                        <Text style={styles.balanceText}>Account Balance</Text>
                        <Text style={styles.valueText}>${balance}</Text>
                    </View>
                    { showLink && <View style={{
                        alignItems: 'flex-end',
                        gap: 10
                    }}>
                        <Text style={styles.walletText}>Wallet</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate('Wallet', { name: 'Wallet' })}}>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                    </View> }
                </View>
            </View>
        </LinearGradient>
    )
}

WalletCard.defaultProps = {
    showLink : false
}

export default WalletCard
