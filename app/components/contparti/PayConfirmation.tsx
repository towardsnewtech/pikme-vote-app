import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ProgressBarAndroid, Animated } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import _Text from '../../shared/components/_Text';
import { BlurView } from '@react-native-community/blur';
import ContestDetail from './ContestDetail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _OutLinedButton from '../../shared/components/_OutLinedButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import useScreen from '../../shared/hooks/useScreen';
import { setSelectedAccount } from '../../store/slices/auth.slice';
import { withdrawAmount } from '../../firebase/payment';

const carousel = require('../../assets/images/contparti/category/background.png');
const prize = require('../../assets/images/contparti/payconfirmation/prize.png');
const blurImg = require('../../assets/images/contparti/category/blurImage.png');

const styles = StyleSheet.create({
    iconprev: {
        position: 'absolute',
        top: 50,
        left: 20,

        color: 'black',
        fontSize: 24,

        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,

        zIndex: 1
    },
    blur: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%'
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
        paddingBottom: 40,
        padding: 20,
    },
    rulecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    roundednumber: {
        backgroundColor: '#dcdff7',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    prizecontainer: {
        backgroundColor: '#1f2642',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#7e6c51',
        marginTop: 70,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    slide: {
        backgroundColor: '#333847',
        marginTop: 30,
        borderRadius: 30,
        height: 50,
        position: 'relative',
        overflow: 'hidden'
    },
    mainslide: {
        position: 'absolute',
        top: 5,
        borderRadius: 30,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disablemainslide: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#444959',
        borderRadius: 30,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    warningcontainer: {
        backgroundColor: '#ED952F',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        marginTop: 100,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBar: {
        borderRadius: 30,
        position: 'absolute',
        height: 50,
    },
    textContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const PayConfirmation = ({ navigation }: any) => {
    const dispatch = useAppDispatch();
    const { account } = useAppSelector(state => state.auth)
    const { category } = useAppSelector(state => state.vote)
    const { screen } = useScreen() ;
    const [finished, setFinished] = useState(false) ;

    const animatedValue = useRef(new Animated.Value(0.14)).current;
    const animatedLeft = useRef(new Animated.Value(0.015)).current;

    useEffect(() => {
        if ( account.balance - category.entry >= 0 ) {
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 3500, // Set the duration of the animation (in milliseconds)
                delay: 2000,
                useNativeDriver: false, // Make sure to set this flag to false for non-native animations
            }).start();

            Animated.timing(animatedLeft, {
                toValue: 1,
                duration: 3500,
                delay: 2000,
                useNativeDriver: false
            }).start();
        }

    }, [animatedValue, animatedLeft, account, category]);

    const width = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
    });

    const left = animatedLeft.interpolate({
        inputRange: [0, 1],
        outputRange: [0, screen.w - 50],
        extrapolate: 'clamp',
    });

    useEffect(() => {
        if ( account.balance - category.entry >= 0 ) {
            setTimeout(() => {
                setFinished(true)
            }, 6000)
        }
    }, [account, category])

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative' }}>
            {/* <View style={{ position: 'relative' }}>
                <AntDesign style={styles.iconprev} name="arrowleft" />
                <Image
                    source={carousel}
                />
            </View> */}
            {/* <ContestDetail /> */}
            {
                account.balance - category.entry >= 0 &&
                <>
                    {/* <BlurView
                        blurType="light"
                        blurAmount={20}
                        blurRadius={2}
                        downsampleFactor={10}
                        style={styles.blur}
                        overlayColor={'rgba(0, 0, 0, .1)'}
                    /> */}
                    <Image style={{ width: '100%' }} source={blurImg} />
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
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <_Text
                                        name='Confirmation'
                                        ftsize={20}
                                        ftweight='600'
                                    />
                                    <_Text
                                        name='Current Balance'
                                        color='#ccc'
                                        ftsize={14}
                                        mt={10}
                                    />
                                    <_Text
                                        name='Entry Fee'
                                        color='#ccc'
                                        ftsize={14}
                                        mt={10}
                                    />
                                    <_Text
                                        name='New Wallet Balance'
                                        ftsize={14}
                                        mt={10}
                                    />
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: 'rgba(100, 100, 100, 0.7)', padding: 3, borderRadius: 20 }}>
                                        <MaterialCommunityIcons name="folder-open-outline" size={20} color="#ccc" />
                                        <_Text
                                            name={`$${account.balance.toFixed(2)}`}
                                        />
                                    </View>
                                    <_Text
                                        name={`$${account.balance.toFixed(2)}`}
                                        color='#ccc'
                                        ftsize={14}
                                        mt={10}
                                    />
                                    <_Text
                                        name={`-$${category.entry.toFixed(2)}`}
                                        color='#ccc'
                                        ftsize={14}
                                        mt={10}
                                    />
                                    <_Text
                                        name={`$${(account.balance - category.entry).toFixed(2)}`}
                                        ftsize={16}
                                        mt={10}
                                    />
                                </View>
                            </View>
                            <View style={styles.prizecontainer}>
                                <View>
                                    <_Text
                                        name='Prize'
                                    />
                                    <_Text
                                        name='$99.00'
                                        color='#f0c672'
                                        ftsize={20}
                                    />
                                </View>
                                <Image source={prize} />
                            </View>
                            <TouchableOpacity onPress={finished ? async () => {
                                await withdrawAmount(category.entry) ;
                                dispatch(setSelectedAccount({
                                    ...account,
                                    balance: account.balance - category.entry
                                }))

                                navigation.navigate('ContestConfirm', {name: 'ContestConfirm'}) 
                            } : () => {} }>
                                <View style={styles.slide}>
                                    <Animated.View style={[styles.progressBar, { width, backgroundColor: '#2c84d5' }]} />
                                    <Animated.View style={[styles.mainslide, {left: left, backgroundColor: finished ? 'white': '#1c7ad1' }]}>
                                        <MaterialIcons name="double-arrow" size={28} color={ finished ? "#2c84d5" : "white" } />
                                    </Animated.View>
                                    <View style={styles.textContainer}>
                                        <_Text
                                            name={ finished ? 'Confirmed' : 'Slide to confirm'}
                                            ftweight='600'
                                            ftsize={18}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </LinearGradient>
                    </LinearGradient>
                </>
            }
            {
                account.balance - category.entry < 0 &&
                <>
                    {/* <BlurView
                        blurType="light"
                        blurAmount={20}
                        blurRadius={2}
                        downsampleFactor={10}
                        style={styles.blur}
                        overlayColor={'rgba(0, 0, 0, .1)'}
                    /> */}
                    <Image style={{ width: '100%' }} source={blurImg} />
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
                            <_Text
                                name='Confirmation'
                                ftsize={20}
                                ftweight='600'
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '50%' }}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <MaterialCommunityIcons name="folder-open-outline" size={20} color="#ccc" />
                                        <_Text
                                            name='Current Balance'
                                            color='#ccc'
                                            ml={5}
                                        />
                                    </View>
                                    <_Text
                                        name='Entry Fee'
                                        ftsize={14}
                                        mt={10}
                                    />
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end' }}>

                                    <_Text
                                        name={`$${account.balance.toFixed(2)}`}
                                        color='#ccc'
                                        ftsize={14}
                                        mt={10}
                                    />
                                    <_Text
                                        name={`$${category.entry.toFixed(2)}`}
                                        ftsize={16}
                                        mt={10}
                                    />
                                </View>
                            </View>
                            <View style={styles.warningcontainer}>
                                <Ionicons name="warning-outline" size={24} color="white" />
                                <_Text
                                    name='Not enough balance to enter the contest. Please add more funds.'
                                />
                            </View>
                            <_OutLinedButton
                                onPress={() => {
                                    navigation.navigate('Deposit', {name: 'PayConfirmation'})
                                }}
                                text='Add funds to your wallet'
                                width='100%'
                            />
                            <View style={{ ...styles.slide, marginTop: 100 }}>
                                <View style={styles.disablemainslide}>
                                    <MaterialIcons name="double-arrow" size={28} color="white" />
                                </View>
                                <View style={styles.textContainer}>
                                    <_Text
                                        name='Slide to confirm'
                                        ftweight='600'
                                        ftsize={18}
                                        color='#999'
                                    />
                                </View>
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </>
            }
        </View>
    )
}

export default PayConfirmation