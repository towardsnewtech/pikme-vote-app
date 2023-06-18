import React from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import _Text from '../../shared/components/_Text';
import FilledButton from '../../shared/components/FilledButton';
// import { BlurView } from '@react-native-community/blur';
import { useAppDispatch } from '../../store/hooks';
import { setSelectedCategory } from '../../store/slices/vote.slice';

const carousel = require('../../assets/images/contparti/category/background.png');
const commentBack = require('../../assets/images/contparti/category/commentback.png');
const blurImg = require('../../assets/images/contparti/category/blurImage.png');
const person1 = require('../../assets/images/contparti/category/person1.png');
const person2 = require('../../assets/images/contparti/category/person2.png');
const person3 = require('../../assets/images/contparti/category/person3.png');
const person4 = require('../../assets/images/contparti/category/person4.png');

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
    container: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -40,
        overflow: 'visible',
        zIndex: 2
    },
    comment: {
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',

        position: 'relative'
    },
    commentdesc: {
        position: 'absolute',
        top: 5,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10
    },
    layout: {
        paddingLeft: 30,
        paddingRight: 30
    },
    personlist: {
        position: 'relative',
        marginTop: 25,
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999',
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#191e2d'
    },
    priceContainer: {
        borderRadius: 30,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 15,
        borderWidth: 1,
        backgroundColor: '#2d3144'
    },
    contestcard: {
        borderColor: '#999',
        borderWidth: 1,
        backgroundColor: '#1d243d',
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        flexDirection: 'row'
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
    }
})

const Category = ({ navigation }: any) => {
    const personList = [person1, person2, person3, person4]
    const btnList = ['Contests', 'Popular']
    const priceList = [
        {
            start: 1,
            end: 5,
        },
        {
            start: 6,
            end: 15
        },
        {
            start: 16,
            end: 50
        },
        {
            start: 51,
            end: 100
        }
    ]
    const contestList = [
        {
            entry: 40,
            prize: 80,
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: 40,
            prize: 90,
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: 7,
            prize: 120,
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: 7,
            prize: 70,
            start: '03h: 20m: 15s',
            duration: '3 days'
        }
    ]
    const ruleList = [
        'Users are not allowed to solicit votes from others in exchange for rewards.',
        'The contest administrators reserve the right to disqualify any user or image that violates the contest rules.',
        'In case of a tie, the winner will be selected by a panel of judges or through a random draw.'
    ]

    const [next, setNext] = React.useState(0);
    const [curBtn, setCurBtn] = React.useState('Contests')
    const [priceIndex, setPriceIndex] = React.useState(-1)

    const dispatch = useAppDispatch() ;

    return (
        <View style={{ width: '100%', height: '100%', position: 'relative' }}>
            <ScrollView>
                <View style={{ position: 'relative' }}>
                    <AntDesign style={styles.iconprev} name="arrowleft" onPress={() => navigation.navigate("Contest", { name: "Contest" })} />
                    <Image
                        style={{
                            width: '100%'
                        }}
                        source={carousel}
                    />
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#1b202f', '#1b202f']}
                    style={styles.container}
                >
                    <View style={styles.comment}>
                        <Image
                            source={commentBack}
                        />
                        <View style={styles.commentdesc}>
                            <_Text
                                name='2,921'
                                ftsize={18}
                                ftweight='600'
                            />
                            <_Text
                                ftsize={14}
                                name=' Votes'
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.layout, marginTop: 15 }}>
                        <_Text
                            ftsize={20}
                            ftweight='600'
                            name='Architecture Oasis'
                        />
                        <_Text
                            mt={10}
                            ftsize={13}
                            name="Here you'll find astonishing shots of an architecture all around the world. Enjoy contests and share you vision!"
                            color='#ccc'
                        />
                        <View style={styles.personlist}>
                            {
                                personList.map((person, index) => (
                                    <Image key={index} style={{ position: 'absolute', left: 18 * index }} source={person} />
                                ))
                            }
                            <View style={{ position: 'absolute', left: 18 * (personList.length + 1) + 10 }}>
                                <_Text
                                    name='+42 others are competing'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.layout, marginTop: 30 }}>
                        <View style={styles.header}>
                            {
                                btnList.map((btn, index) => (
                                    curBtn == btn ?
                                        <FilledButton
                                            key={index}
                                            text={btn}
                                            width='50%'
                                            radius={20}
                                            ftsize={15}
                                            pt={5}
                                            pb={5}
                                            onPress={() => setCurBtn(btn)}
                                        /> :
                                        <TouchableOpacity key={index} style={{ width: '50%' }} onPress={() => setCurBtn(btn)}>
                                            <_Text name={btn} align='center' />
                                        </TouchableOpacity>

                                ))
                            }
                        </View>
                        <ScrollView horizontal={true} style={{ marginTop: 15 }}>
                            {
                                priceList.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => setPriceIndex(index)}>
                                        <View style={
                                            index != priceIndex ? { ...styles.priceContainer,  borderColor: '#777' }
                                            : {...styles.priceContainer, borderColor: 'blue'}
                                        }>
                                            <_Text
                                                name={`$${item.start} - $${item.end}`}
                                                ftsize={14}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={{ ...styles.layout, marginTop: 15 }}>
                        <_Text name='Contests' />
                        {
                            contestList.filter(item => priceIndex == -1 || item.entry > priceList[priceIndex].start && item.entry < priceList[priceIndex].end ).
                            map((contest, index) => (
                                <TouchableOpacity key={index} onPress={() => {
                                    dispatch(setSelectedCategory(contest))
                                    setNext(1) ;
                                }}>
                                    <View style={styles.contestcard}>
                                        <View style={{ width: '50%' }}>
                                            <_Text
                                                name='Entry'
                                                color='#999'
                                                ftsize={12}
                                            />
                                            <_Text
                                                name={`$${contest.entry < 10 ? contest.entry.toFixed(2) : contest.entry }`}
                                                ftsize={18}
                                            />
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                <_Text
                                                    name='Stars in '
                                                    color='#999'
                                                    ftsize={12}
                                                />
                                                <_Text
                                                    name={contest.start}
                                                    ftsize={13}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                            <_Text
                                                name='Prize'
                                                color='#999'
                                                ftsize={12}
                                            />
                                            <_Text
                                                color='#e6bb66'
                                                name={`$${contest.prize}`}
                                                ftsize={18}
                                            />
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                <_Text
                                                    name='Duration '
                                                    color='#999'
                                                    ftsize={12}
                                                />
                                                <_Text
                                                    name={contest.duration}
                                                    ftsize={13}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </LinearGradient>
            </ScrollView>
            {
                next == 1 &&
                <>
                    <TouchableOpacity
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                        onPress={() => setNext(0)}
                    >
                        <Image style={{ width: '100%' }} source={blurImg} />
                        {/* <BlurView
                            blurType="light"
                            blurAmount={20}
                            blurRadius={2}
                            downsampleFactor={10}
                            style={styles.blur}
                            overlayColor={'rgba(0, 0, 0, .1)'}
                        /> */}
                    </TouchableOpacity>
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
                                name='Rules for the contest'
                                ftsize={22}
                                ftweight='600'
                            />
                            {
                                ruleList.map((rule, index) => (
                                    <View key={index} style={styles.rulecontainer}>
                                        <View style={styles.roundednumber}>
                                            <_Text name={`${index}`} color='blue' />
                                        </View>
                                        <View style={{ width: '90%' }}>
                                            <_Text
                                                name={rule}
                                                color='#ccc'
                                            />
                                        </View>
                                    </View>
                                ))
                            }
                            <View style={{ marginTop: 30 }}>
                                <FilledButton
                                    onPress={() => { navigation.navigate('UploadPhoto', { name: 'UploadPhoto' }); setNext(0); }}
                                    width='100%'
                                    text='Accept'
                                />
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </>
            }
        </View>
    )
}

export default Category