import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

const voteImage = require('../../assets/images/common/vote.png')
const voteActiveImage = require('../../assets/images/common/vote_active.png')
const contestImage = require('../../assets/images/common/contest.png')
const contestActiveImage = require('../../assets/images/common/contest_active.png')
const rewardsImage = require('../../assets/images/common/rewards.png')
const rewardsActiveImage = require('../../assets/images/common/rewards_active.png')
const statisticsImage = require('../../assets/images/common/statistics.png')
const statisticsActiveImage = require('../../assets/images/common/statistics_active.png')
const profileImage = require('../../assets/images/common/profile.png')
const profileActiveImage = require('../../assets/images/common/profile_active.png')

const styles = StyleSheet.create({
    borderBackground: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingTop: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    container: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageLayout: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',

        position: 'relative'
    },
    selTop: {
        position: 'absolute', 
        width: 40, 
        height: 5, 
        backgroundColor: '#7faaff', 
        top: -10,
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10
    },
    iconView: {
        alignItems: 'center',
        gap: 5
    },
    iconText: {
        color: 'white',
        fontSize: 15
    },
    iconSelText: {
        color: '#7faaff',
        fontSize: 15
    }
})

const FooterLayout = ({ activeIndex, navigation }: any) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['white', 'white' ]}
            style={styles.borderBackground}
        >
            <LinearGradient
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1b202f', '#1b202f' ]}
            >
                <View style={styles.imageLayout} >
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Vote', { name: 'Vote' }) }}
                    >
                        <View style={styles.iconView}>
                            { activeIndex == 0 &&  <View style={styles.selTop} /> }
                            <Image source={activeIndex == 0 ? voteActiveImage : voteImage} />
                            <Text style={activeIndex == 0 ? styles.iconSelText: styles.iconText}>
                                Vote
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Contest', { name: 'Contest' }) }}
                    >
                        <View style={styles.iconView}>
                            { activeIndex == 1 && <View style={styles.selTop} /> }
                            <Image source={activeIndex == 1 ? contestActiveImage : contestImage } />
                            <Text style={activeIndex == 1 ? styles.iconSelText: styles.iconText}>
                                Contest
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Rewards', { name: 'Rewards' }) }}
                    >
                        <View style={styles.iconView}>
                            { activeIndex == 2 && <View style={styles.selTop} /> }
                            <Image source={activeIndex == 2 ? rewardsActiveImage : rewardsImage} />
                            <Text style={activeIndex == 2 ? styles.iconSelText: styles.iconText}>
                                Rewards
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Statistics', { name: 'Statistics' }) }}
                    >
                        <View style={styles.iconView}>
                            { activeIndex == 3 && <View style={styles.selTop} /> }
                            <Image source={activeIndex == 3 ? statisticsActiveImage : statisticsImage} />
                            <Text style={activeIndex == 3 ? styles.iconSelText: styles.iconText}>
                                Statistics
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Profile', { name: 'Profile' }) }}
                    >
                        <View style={styles.iconView}>
                            { activeIndex == 4 && <View style={styles.selTop} /> }
                            <Image source={activeIndex == 4 ? profileActiveImage : profileImage} />
                            <Text style={activeIndex == 4 ? styles.iconSelText: styles.iconText}>
                                Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </LinearGradient>
    )
}

export default FooterLayout