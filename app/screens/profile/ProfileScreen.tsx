import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

import WalletCard from '../../components/profile/WalletCard'
import FilledButton from '../../shared/components/FilledButton'
import OutlinedButton from '../../shared/components/OutlinedButton'
import SingleCard from '../../components/profile/SingleCard'
import YellowFilledButton from '../../shared/components/YellowFilledButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FooterLayout from '../../components/layout/footerLayout'
import { loadUser } from '../../firebase/auth'
import { useAppSelector } from '../../store/hooks'

const avatarImage = require("../../assets/images/profile/avatar.png")
const settingImage = require("../../assets/images/profile/setting.png")
const paymentImage = require("../../assets/images/profile/payment.png")
const transactionImage = require("../../assets/images/profile/transaction.png")

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1b202f',
        paddingTop: 80,
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative'
    },
    informationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30
    },
    basicInformationView:{
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarView: {

    },
    avatarImage: {

    },
    nameText: {
        color: 'white',
        fontSize: 20,
    },
    mailText: {
        color: "#919DA8",
        fontSize: 16
    },
    linkText: {
        color: '#1677CF',
        fontSize: 18
    },
    iconImage: {

    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    referTitleText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '800'
    },
    referDescText: {
        paddingTop: 10,
        color: 'white',
        lineHeight: 22,
        fontSize: 16,
        textAlign: 'center'
    },
    paymentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    cardTitle: {
        color: 'white',
        fontSize: 20
    },
    transactionView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

const ProfileScreen = ({navigation} : any) => {
    const [userFirstName, setFirstName] = React.useState('')
    const [userLastName, setLastName] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [balance, setBalance] = React.useState();

    const { account } = useAppSelector((state) => state.auth)

    React.useEffect(() => {
        if (account) {
            setFirstName(account.firstname);
            setLastName(account.lastname);
            setUserEmail(account.userEmail);
            setUserName(account.username);
            setBalance(account.balance);
        }
    }, [account])

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.informationView}>
                        <View style={styles.basicInformationView}>
                            <View style={styles.avatarView}>
                                <Image source={avatarImage} style={styles.avatarImage}/>
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.nameText}>{userFirstName || "First &"} {userLastName || "Last Name"}</Text>
                                </View>
                                <View>
                                    <Text style={styles.mailText}>{userEmail.length > 20 ? userEmail.slice(0, 20) + '...' : userEmail}</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {navigation.navigate('EditProfile', {name: 'EditProfile'})}}
                                >
                                    <View>
                                        <Text style={styles.linkText}>Edit Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Setting', {name: 'Setting'})}>
                            <View>
                                <Image source={settingImage} style={styles.iconImage} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <WalletCard
                        userFirstName={userFirstName}
                        userLastName={userLastName}
                        balance={balance}
                        navigation={navigation}
                        showLink
                    />
                    <View style={styles.buttonGroup}>
                        <FilledButton text={'Deposit'} onPress={() => {navigation.navigate('Deposit', {name: 'Deposit'})}} width='45%'/>
                        <OutlinedButton text={'Withdraw'} onPress={() => {navigation.navigate('Withdraw', {name: 'Withdraw'})}} width='45%' />
                    </View>

                    <SingleCard
                        height={200}
                        showStar
                    >
                        <View>
                            <Text style={styles.referTitleText}>Refer and Earn 100 pts</Text>
                            <Text style={styles.referDescText}>You & Your friend get 100 pts each tiem your friend joins from your code</Text>
                        </View>
                        <View style={{
                            paddingTop: 20
                        }}>
                            <YellowFilledButton text='Refer a friend' />
                        </View>
                    </SingleCard>
                    <SingleCard
                        height={70}
                    >
                        <View style={styles.paymentView}>
                            <View style={styles.iconTextView}>
                                <Image source={paymentImage} />
                                <Text style={styles.cardTitle}>Save payment methods</Text>
                            </View>
                            <AntDesign name="arrowright" size={24} color="#B9C7D3" />
                        </View>
                    </SingleCard>

                    <View style={{
                        paddingBottom: 80
                    }}>
                        <SingleCard
                            height={70}
                        >
                            <View style={styles.transactionView}>
                                <View style={styles.iconTextView}>
                                    <Image source={transactionImage} />
                                    <Text style={styles.cardTitle}>Transactin history</Text>
                                </View>
                                <AntDesign name="arrowright" size={24} color="#B9C7D3" />
                            </View>
                        </SingleCard>
                    </View>
                </View>
            </ScrollView>
            <FooterLayout 
                activeIndex={4}
                navigation={navigation}
            />
        </>
    )
}

export default ProfileScreen