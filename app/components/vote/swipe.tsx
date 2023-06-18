import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, PanResponder } from 'react-native';

// import FooterLayout from '../../components/layout/footerLayout'

// import LinearGradient from 'react-native-linear-gradient'
import SwipeImage from '../../shared/ui/SwipeImage'
import DisappearingImage from '../../shared/ui/DisappearingImage'
import _Text from '../../shared/components/_Text';
import Bonus from './bonus';

const starImage = require("../../assets/images/vote/star.png")
const top1Img = require("../../assets/images/vote/top1.png")
const bottom1Img = require("../../assets/images/vote/bottom1.png")
const top2Img = require("../../assets/images/vote/top2.png")
const bottom2Img = require("../../assets/images/vote/bottom2.png")
const top3Img = require("../../assets/images/vote/top3.png")
const bottom3Img = require("../../assets/images/vote/bottom3.png")

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
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
    // const [curIndex, setCurIndex] = React.useState(0)
    // const topImg = [top1Img, top2Img, top3Img]
    // const bottomImg = [bottom1Img, bottom2Img, bottom3Img]
    const [step, setStep] = React.useState(0);
    const [selected, setSelected] = React.useState(false)
    const [animationEnded, setAnimationEnded] = React.useState(false)
    const [disappearImg, setDisappearImg] = React.useState(null);
    const [topImg, setTopImg] = React.useState(top1Img);
    const [bottomImg, setBottomImg] = React.useState(bottom1Img);
    const [voteCount, setVoteCount] = React.useState(0);

    const handleSelect = (img: any) => {
        if (img == topImg) setDisappearImg(bottomImg)
        if (img == bottomImg) setDisappearImg(topImg)
        setSelected(true)
    }

    const handleAnimationEnded = () => {
        setTimeout(() => {
            setStep((step + 1) % 4)
        }, 2000);
        setAnimationEnded(true)
        setVoteCount(voteCount + 1);
    }

    React.useEffect(() => {
        if (step == 0) {
            setTopImg(top1Img);
            setBottomImg(bottom1Img);
            setAnimationEnded(false);
            setDisappearImg(null);
        } else if (step == 1) {
            setTopImg(top2Img);
            setBottomImg(bottom2Img);
            setAnimationEnded(false);
            setDisappearImg(null);
        } else if (step == 2) {
            setTopImg(top3Img);
            setBottomImg(bottom3Img);
            setAnimationEnded(false);
            setDisappearImg(null);
        }
    }, [step])

    const [flag, setFlag] = React.useState(0);
    const [dxChanged, setDXChanged] = React.useState(false);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
            if (gesture.dy < -100) {
                setFlag(1);
            }
            if (animationEnded == true) {
                setFlag(0);
            }
        },
        onPanResponderRelease: (e, gesture) => {
            if (flag == 1 && dxChanged == false) {
                setStep((step + 1)%4);
                setFlag(0);
            }
            setDXChanged(false);
        }
    })

    const [startPt, setStartPt]: any = React.useState();
    const [endPt, setEndPt]: any = React.useState();

    return (
        <>
            {step < 3 && <View style={styles.container}
                {...panResponder.panHandlers}
                // onTouchStart={(e) => setStartPt(e.nativeEvent.locationX)}
                // onTouchEnd={animationEnded ? (e) => {
                //     if (e.nativeEvent.locationX != startPt) {
                //         return ;
                //     }
                //     // if (voteCount == 3) {
                //     //     setStep(3);
                //     // }
                //     if (step < 3) {
                //         setStep(step + 1);
                //     }
                // } : () => { }}
            >
                <View style={styles.starView}>
                    <View style={styles.starIconView}>
                        <Image source={starImage} />
                        <Text style={styles.starValueText}>460</Text>
                    </View>
                </View>

                {selected && disappearImg == topImg && <DisappearingImage imagePath={disappearImg} />}

                {(disappearImg == bottomImg || disappearImg == null) &&
                    (!animationEnded ? <SwipeImage
                        step={step}
                        setStep={setStep}
                        isTopSelected={true}
                        imagePath={topImg}
                        top1Img={topImg}
                        handleSelect={handleSelect}
                        handleAnimationEnded={handleAnimationEnded}
                    /> : <Image source={topImg} style={{
                        marginTop: 100
                    }} />)}

                <View style={{ height: 10 }} />

                {(disappearImg == topImg || disappearImg == null) &&
                    (!animationEnded ? <SwipeImage
                        step={step}
                        setStep={setStep}
                        isTopSelected={false}
                        imagePath={bottomImg}
                        top1Img={topImg}
                        handleSelect={handleSelect}
                        handleAnimationEnded={handleAnimationEnded}
                    /> : <Image source={bottomImg} style={{
                        marginTop: -150
                    }} />)}

                {selected && disappearImg == bottomImg && <DisappearingImage imagePath={disappearImg} />}
            </View>}
            {step == 3 && <Bonus step={step} setStep={setStep} />}
        </>
    )
}

export default Swipe