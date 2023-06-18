import React, { useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, Animated, PanResponder, ActivityIndicator, Image } from 'react-native'
import _Text from '../../shared/components/_Text'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { uploadImage } from '../../firebase/auth';
import { BlurView } from '@react-native-community/blur';
import useScreen from '../../shared/hooks/useScreen';

import { Svg } from 'react-native-svg';
import { captureRef } from 'react-native-view-shot';

const pic1 = require('../../assets/images/contparti/upload/select/pic1.png');
const pic2 = require('../../assets/images/contparti/upload/select/pic2.png');
const pic3 = require('../../assets/images/contparti/upload/select/pic3.png');
const pic4 = require('../../assets/images/contparti/upload/select/pic4.png');
const pic5 = require('../../assets/images/contparti/upload/select/pic5.png');
const pic6 = require('../../assets/images/contparti/upload/select/pic6.png');
const pic7 = require('../../assets/images/contparti/upload/select/pic7.png');
const pic8 = require('../../assets/images/contparti/upload/select/pic8.png');
const pic9 = require('../../assets/images/contparti/upload/select/pic9.png');
const pic10 = require('../../assets/images/contparti/upload/select/pic10.png');
const pic11 = require('../../assets/images/contparti/upload/select/pic11.png');
const pic12 = require('../../assets/images/contparti/upload/select/pic12.png');
const pic13 = require('../../assets/images/contparti/upload/select/pic13.png');
const pic14 = require('../../assets/images/contparti/upload/select/pic14.png');
const pic15 = require('../../assets/images/contparti/upload/select/pic15.png');
const pic16 = require('../../assets/images/contparti/upload/select/pic16.png');

const styles = StyleSheet.create({
    main: {
        position: 'relative'
    },
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70
    },
    body: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    borderGradientContainer: {
        width: '100%',
        position: 'absolute',
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
        paddingBottom: 20,
        padding: 20
    },
    imgContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    selectarea: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '100%',
        height: 200,
    },
    blur: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

let startY = 0;
let curPic:any = null;

const SelectPhoto = ({ setStep, img, curY, setCurY, pic, setPic }: any) => {
    const picList = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16]
    const [isRecentOpen, setIsRecentOpen] = React.useState(false);
    const { screen } = useScreen();
    const [loading, setLoading] = React.useState(false);


    const svgRef: any = useRef();
    const imageRef: any = useRef();

    const panResponder = React.useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gesture) => {
                const { dy } = gesture;
                if(startY + dy < 0) {
                    setCurY(0) ;
                    return
                }
                
                if(startY + dy + 200 > (curPic == null ? screen.w * img.height / img.width : screen.w)) {
                    setCurY((curPic == null ? screen.w * img.height / img.width : screen.w) - 200)
                    return
                }
                setCurY(startY + dy)
            },
            onPanResponderRelease: (_, gesture) => {
                const { dy } = gesture;
                if (startY + dy < 0) {
                    startY = 0;
                    return 
                }

                if (startY + dy + 200 > (curPic == null ? screen.w * img.height / img.width : screen.w)) {
                    startY = (curPic == null ? screen.w * img.height / img.width : screen.w) - 200 ;
                    return
                }
                startY += dy
            },
        })
    ).current;

    const handleUpload = async () => {
        setLoading(true);
        const imageUri = await captureRef(imageRef, {
            format: 'png',
        });

        await uploadImage(imageUri);
        setLoading(false);

        curPic = null;
        setStep(2);
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { setPic(null); setStep(0); curPic=null; }}>
                        <_Text name='Cancel' />
                    </TouchableOpacity>
                    <_Text name='Library' ftweight='600' />
                    <TouchableOpacity onPress={handleUpload}>
                        <_Text name='Upload' />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>

                    <Svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 400 800"
                        ref={svgRef}
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    >
                    </Svg>

                    <View ref={imageRef} style={{ top: curY, width: '100%', height: 200 }}>
                    {
                        pic != null ?
                            <Image source={pic} style={{ width: screen.w, height: screen.w, top: -curY }} />
                            : 
                            <Image source={{ uri: img.uri }} style={{ width: screen.w, height: screen.w * img.height / img.width, top: -curY }} />
                            
                    }
                    </View>
                    <Animated.View
                        style={[{ ...styles.selectarea, top: curY }]}
                        {...panResponder.panHandlers}
                    >
                    </Animated.View>
                    
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
                    <TouchableOpacity onPress={() => { setIsRecentOpen(!isRecentOpen) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <_Text
                                name='Recent'
                                ftsize={18}
                            />
                            {isRecentOpen ? <AntDesign name="down" size={18} color="white" style={{ paddingLeft: 5 }} />
                                : <AntDesign name="up" size={18} color="white" style={{ paddingLeft: 5 }} />}
                        </View>
                    </TouchableOpacity>
                    {
                        isRecentOpen &&
                        <View style={styles.imgContainer}>
                            {
                                picList.map((pic, index) => (
                                    <TouchableOpacity key={index} onPress={() => { curPic=pic; setPic(pic); }} style={{ width: '25%', marginTop: 10 }}>
                                        <Image source={pic} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    }
                </LinearGradient>
            </LinearGradient>

            {
                loading && <BlurView
                    blurType="light"
                    blurAmount={20}
                    blurRadius={2}
                    downsampleFactor={10}
                    style={styles.blur}
                    overlayColor={'rgba(0, 0, 0, .1)'}
                >
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={100} color='blue' />
                    </View>
                </BlurView>
            }
        </View>
    )
}

export default SelectPhoto
