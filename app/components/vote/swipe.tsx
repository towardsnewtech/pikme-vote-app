import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'

import FooterLayout from '../../components/layout/footerLayout'

import LinearGradient from 'react-native-linear-gradient'
import SwipeImage from '../../shared/ui/SwipeImage'
import DisappearingImage from '../../shared/ui/DisappearingImage'

const starImage = require("../../assets/images/vote/star.png")
const top1Img = require("../../assets/images/vote/top1.png")
const bottom1Img = require("../../assets/images/vote/bottom1.png")
const top2Img = require("../../assets/images/vote/top2.png")
const bottom2Img = require("../../assets/images/vote/bottom2.png")
const top3Img = require("../../assets/images/vote/top3.png")
const bottom3Img = require("../../assets/images/vote/bottom3.png")

const styles = StyleSheet.create({
    container: {
        width: 400,
        minHeight: '100%',
        paddingTop: 65,
        position: 'relative',
        alignItems: 'center'
    },
    starView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
        paddingBottom: 20,
        width: '90%'
    },
    starIconView: {
        flexDirection: 'row',
        alingItem: 'center',
        backgroundColor: '#20212499',
        paddingRight: 15,
        borderRadius: 30
    },
    starValueText: {
        fontSize: 24,
        color: 'white'
    },
    swipeView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 30
    },
    swipeText: {
        fontSize: 20,
        color: 'white'
    },
    swipeRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

const Swipe = () => {
    const [curIndex, setCurIndex] = React.useState(0)
    const topImg = [top1Img, top2Img, top3Img]
    const bottomImg = [bottom1Img, bottom2Img, bottom3Img]
    const [selected, setSelected] = React.useState(false)
    const [animationEnded, setAnimationEnded] =React.useState(false)

    const handleSelect = () => {
        setSelected(true)
    }

    const handleAnimationEnded = () => {
        setAnimationEnded(true)
    }

    return (
            <View style={styles.container}>
                <View style={styles.starView}>
                    <View style={styles.starIconView}>
                        <Image source={starImage} />
                        <Text style={styles.starValueText}>460</Text>
                    </View>
                </View>
                <View>
                    {
                        !animationEnded ? <SwipeImage 
                            imagePath={top1Img}
                            handleSelect={handleSelect}
                            handleAnimationEnded={handleAnimationEnded}
                        /> : <Image source={top1Img} style={{
                            marginTop: 100
                        }}/>
                    }
                </View>
                {/* <View style={styles.swipeRow}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['#FFFFFF', '#BEBEBE']}
                        style={{
                            borderRadius: 30,
                            padding: 1
                        }}
                    >

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#283563', '#BEBEBE']}
                            style={styles.swipeView}
                        >
                            <AntDesign name='arrowleft' color='white' size={20} />
                            <Text style={styles.swipeText} onPress={handleSwipe}>
                                Swipe
                            </Text>
                            <AntDesign name='arrowright' color='white' size={20} />
                        </LinearGradient>
                    </LinearGradient>
                </View> */}
                <View>
                    {selected ? <DisappearingImage 
                        imagePath={bottom1Img}
                    /> :
                    <Image source={bottom1Img} />}
                </View>
            </View>
    )
}

export default Swipe