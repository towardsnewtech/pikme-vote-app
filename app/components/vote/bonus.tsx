import React from 'react'
import { View, StyleSheet, Image, Dimensions, PanResponder } from 'react-native';

import _Text from '../../shared/components/_Text'
import SwipeImage from '../../shared/ui/SwipeImage'
import DisappearingImage from '../../shared/ui/DisappearingImage'

const headerback = require('../../assets/images/vote/header-back.png')
const star1 = require('../../assets/images/vote/star1.png')
const star2 = require('../../assets/images/vote/star2.png')
const star3 = require('../../assets/images/vote/star3.png')

const topImg = require('../../assets/images/vote/top-image.png')
const bottomImg = require('../../assets/images/vote/bottom-image.png')

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        alignItems: 'center',
    },
})

const Bonus = ({step, setStep}: {step: number, setStep: any}) => {
    const top1Img = topImg;
    const bottom1Img = bottomImg;

    const [selected, setSelected] = React.useState(false)
    const [animationEnded, setAnimationEnded] = React.useState(false)
    const [disappearImg, setDisappearImg] = React.useState(null);

    const handleSelect = (img: any) => {
        if (img == top1Img) setDisappearImg(bottom1Img)
        if (img == bottom1Img) setDisappearImg(top1Img)
        setSelected(true)
    }

    const handleAnimationEnded = () => {
        setTimeout(() => {
            setStep((step + 1) % 4)
        }, 2000);
        setAnimationEnded(true)
    }

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

    return (
        <View style={styles.container}
            {...panResponder.panHandlers}
        >
            <View style={{ position: 'relative' }}>
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

            <View style={{ height: 20 }} />

            {/* <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#999',
                marginTop: 20
            }}> */}
            {selected && disappearImg == top1Img && <DisappearingImage imagePath={disappearImg} />}

            {(disappearImg == bottom1Img || disappearImg == null) && (!animationEnded ? <SwipeImage
                isTopSelected={true}
                imagePath={top1Img}
                top1Img={top1Img}
                step={step}
                setStep={setStep}
                handleSelect={handleSelect}
                handleAnimationEnded={handleAnimationEnded}
            /> : <Image source={top1Img} style={{
                marginTop: 100,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: '#999'
            }} />)}
            {/* </View> */}

            <View style={{ height: 10 }} />

            {/* <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: '#999',
                marginTop: 20
            }}> */}
            {(disappearImg == top1Img || disappearImg == null) &&
                (!animationEnded ? <SwipeImage
                    isTopSelected={false}
                    imagePath={bottom1Img}
                    top1Img={top1Img}
                    step={step}
                    setStep={setStep}
                    handleSelect={handleSelect}
                    handleAnimationEnded={handleAnimationEnded}
                /> : <Image source={bottom1Img} style={{
                    marginTop: -150,
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: '#999'
                }} />)}

            {selected && disappearImg == bottom1Img && <DisappearingImage imagePath={disappearImg} />}
            {/* </View> */}
        </View>
    )
}

export default Bonus;