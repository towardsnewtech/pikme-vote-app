import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import WalletCard from './WalletCard'
import FilledButton from '../../shared/components/FilledButton'
import OutlinedButton from '../../shared/components/OutlinedButton'
import LinearGradient from 'react-native-linear-gradient'

import AntDesign from 'react-native-vector-icons/AntDesign'

const avatar1Image = require("../../assets/images/profile/avatar1.png")
const avatar0Image = require("../../assets/images/profile/avatar0.png")
const avatar3Image = require("../../assets/images/profile/avatar3.png")

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,

        position: 'relative'
    },
    topContainer: {
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    borderGradientContainer: {
        bottom: 0,
        left: 0,
        padding: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    backgroundGradientContainer: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    historyTitle: {
        color: '#8893A8',
        fontSize: 18,
        paddingBottom: 20,
        paddingLeft: 10
    },
    historyView: {
        gap: 20
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemInfoView: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    historyItemText: {
        color: 'white'
    },
    historyDate: {
        color: '#8893A8'
    },
    valueText: {
        color: '#BF953F',
        fontSize: 20,
        fontWeight: '800'
    },
    headerView: {
        position: 'relative',
        paddingBottom: 20
    },
    backView: {
        position: 'absolute'
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '800'
    }
})

const WalletScreen = ({ navigation }: any) => {
    const historyList = [
        {
            img: avatar1Image,
            title: "Plant Contest",
            date: "04/20/2023",
            value: "400"
        },
        {
            img: avatar0Image,
            title: "Deposit",
            date: "04/20/2023",
            value: "100"
        },
        {
            img: avatar3Image,
            title: "Brandfling Contest: 2nd place",
            date: "04/20/2023",
            value: "12"
        },
        {
            img: avatar0Image,
            title: "Withdraw",
            date: "04/20/2023",
            value: "40"
        },
        {
            img: avatar0Image,
            title: "Withdraw",
            date: "04/20/2023",
            value: "40"
        },
        {
            img: avatar0Image,
            title: "Withdraw",
            date: "04/20/2023",
            value: "40"
        },
    ]

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Wallet</Text>
                            <View style={styles.backView}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Profile', { name: 'Profile' })}
                                >
                                    <AntDesign name='arrowleft' size={30} color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <WalletCard />

                        <View style={styles.buttonGroup}>
                            <FilledButton text={'Deposit'} onPress={() => {navigation.navigate('Deposit', {name: 'Deposit'})}} width='45%'/>
                            <OutlinedButton text={'Withdraw'} onPress={() => {navigation.navigate('Withdraw', {name: 'Withdraw'})}} width='45%' />
                        </View>
                    </View>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#FFFFFF', '#2A3E83']}
                        style={styles.borderGradientContainer}
                    >
                        <LinearGradient
                            style={styles.backgroundGradientContainer}
                            colors={['#101E4F', '#2A3E83']}
                        >
                            <Text style={styles.historyTitle}>Funds History</Text>
                            <View style={styles.historyView}>
                                {historyList.map((history, index) => (
                                    <View key={index} style={styles.itemView}>
                                        <View style={styles.itemInfoView}>
                                            <Image source={history.img} />
                                            <View>
                                                <Text style={styles.historyItemText}>{history.title}</Text>
                                                <Text style={styles.historyDate}>{history.date}</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.valueText}>${history.value}</Text>
                                    </View>
                                ))}
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WalletScreen