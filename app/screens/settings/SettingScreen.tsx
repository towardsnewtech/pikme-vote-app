import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

const privacyImage = require('../../assets/images/settings/privacy.png')
const passwordImage = require('../../assets/images/settings/password.png')
const contestImage = require('../../assets/images/settings/contest.png')
const faqImage = require('../../assets/images/settings/faq.png')
const contactImage = require('../../assets/images/settings/contact.png')
const notificationImage = require('../../assets/images/settings/notification.png')
const arrowImage = require('../../assets/images/settings/arrow.png')
const logoutImage = require('../../assets/images/settings/logout.png')

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#283563',
        paddingTop: 80,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    titleText: {
        fontSize: 25,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'center'
    },
    subTitleText: {
        color: '#919DA8',
        fontSize: 20
    },
    listItem: {
        flexDirection: 'column',
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10
    },
    itemText: {
        color: 'white',
        fontSize: 20
    },
    listView: {
        paddingLeft: 10,
        position: 'relative'
    },
    arrowView: {
        position: 'absolute',
        right: 10,
        top: 5
    },
    logoutText: {
        fontSize: 20,
        color: 'gray'
    },
    logoutView: {
        paddingTop: 170,
        paddingLeft: 15
    }
})

const SettingScreen = ({navigation}: any) => {
    const otherList = [
        {
            icon: privacyImage,
            label: 'Privac Policy',
            click: () => {}
        },
        {
            icon: contestImage,
            label: 'Contest Rules & Criteria',
            click: () => {}
        },
        {
            icon: faqImage,
            label: "Help/FAQ",
            click: () => {navigation.navigate('Faq', { name: "Faq" })}
        },
        {
            icon: contactImage,
            label: "Contact us",
            click: () => {}
        },
        {
            icon: notificationImage,
            label: "Terms and Conditions",
            click: () => {}
        }
    ]

    return (
        <View
            style={styles.container}
        >
            <View>
                <Text style={styles.titleText}>Settings</Text>
            </View>
            <View style={{
                paddingTop: 50
            }}>
                <Text style={styles.subTitleText}>ACCOUNT SETTING</Text>
            </View>
            <View
                style={styles.listView}
            >
                <View style={styles.listItem}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('ChangePassword', { name: "ChangePassword" })}}
                    >
                        <Text style={styles.itemText}><Image source={passwordImage} />  {'Change Password'} </Text>
                        <View
                            style={styles.arrowView}
                        >
                            <Image source={arrowImage} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    paddingTop: 40
                }}
            >
                <Text style={styles.subTitleText}>OTHER</Text>
            </View>
            <View style={styles.listView}>
                {
                    otherList.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            <TouchableOpacity
                                onPress={item.click}
                            >
                                <Text style={styles.itemText}><Image source={item.icon} />  {item.label} </Text>
                                <View
                                    style={styles.arrowView}
                                >
                                    <Image source={arrowImage} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
            <View style={styles.logoutView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Login', { name: 'Login' }) }}
                >
                    <Text style={styles.logoutText}><Image source={logoutImage}/>  Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SettingScreen