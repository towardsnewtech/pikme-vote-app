import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import _Text from '../../shared/components/_Text'

const headerback = require('../../assets/images/vote/header-back.png')
const star1 = require('../../assets/images/vote/star1.png')
const star2 = require('../../assets/images/vote/star2.png')
const star3 = require('../../assets/images/vote/star3.png')

const topImg = require('../../assets/images/vote/top-image.png')
const bottomImg = require('../../assets/images/vote/bottom-image.png')

const styles = StyleSheet.create({
    container: {
        width: 370,
        minHeight: '100%',
        paddingTop: 50,
        alignItems: 'center',
        paddingRight: 20
    },
})

const Bonus = () => {
    return (
        <View style={styles.container}>
            <View style={{position: 'relative'}}>
                <Image
                    source={star2}
                    style={{ position: 'absolute', bottom: -30, left: 8 }}
                />
                <Image source={headerback} />
                <View
                    style={{
                        position: 'absolute',
                        width: 358,
                    }}
                >
                    <_Text
                        name="BONUS VOTE"
                        ftsize={20}
                        ftweight='600'
                        color='#d4a653'
                        align='center'
                        mt={20}
                    />
                    <_Text
                        name="Get 10 points if you're right!"
                        ftsize={14}
                        ftweight='600'
                        color='#d4a653'
                        align='center'
                        mt={10}
                    />
                </View>
                <Image
                    source={star1}
                    style={{ position: 'absolute', top: -15, left: 50 }}
                />
                <Image
                    source={star3}
                    style={{ position: 'absolute', bottom: -33, right: -15 }}
                />
                <Image
                    source={star1}
                    style={{ position: 'absolute', bottom: -180, left: -18 }}
                />
                <Image
                    source={star3}
                    style={{ position: 'absolute', bottom: -320, right: -15 }}
                />
                <Image
                    source={star2}
                    style={{ position: 'absolute', bottom: -590, left: -20 }}
                />
                <Image
                    source={star3}
                    style={{ position: 'absolute', bottom: -580, right: -15 }}
                />

            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#999',
                marginTop: 20
            }}>
                <Image
                    style={{
                        borderRadius: 15
                    }}
                    source={topImg}
                />
            </View>
            <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#999',
                marginTop: 20
            }}>
                <Image
                    style={{
                        borderRadius: 15
                    }}
                    source={bottomImg}
                />
            </View>
        </View>
    )
}

export default Bonus;