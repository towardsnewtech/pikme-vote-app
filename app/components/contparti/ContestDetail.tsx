import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import _Text from '../../shared/components/_Text';
import FilledButton from '../../shared/components/FilledButton';

const commentBack = require('../../assets/images/contparti/category/commentback.png');
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
        marginTop: -40
    },
    comment: {
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative'
    },
    commentdesc: {
        position: 'absolute',
        top: 5,
        flexDirection: 'row',
        alignItems: 'center'
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
        borderColor: '#777',
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

const ContestDetail = ({setNext}: any) => {
    const personList = [person1, person2, person3, person4]
    const btnList = ['Contests', 'Popular']
    const [curBtn, setCurBtn] = React.useState('Contests')
    const priceList = ['$1 - $5', '$6 - $15', '$16 - $50', '$51 - $100']
    const contestList = [
        {
            entry: '$40',
            prize: '$80',
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: '$40',
            prize: '$80',
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: '$40',
            prize: '$80',
            start: '03h: 20m: 15s',
            duration: '3 days'
        },
        {
            entry: '$40',
            prize: '$80',
            start: '03h: 20m: 15s',
            duration: '3 days'
        }
    ]

    return (
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
                        priceList.map((price, index) => (
                            <View key={index} style={styles.priceContainer}>
                                <_Text
                                    name={price}
                                    ftsize={14}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{ ...styles.layout, marginTop: 15 }}>
                <_Text name='Contests' />
                <ScrollView style={{ height: 180, marginTop: 5 }}>
                    {
                        contestList.map((contest, index) => (
                            <TouchableOpacity key={index} onPress={() => setNext(1)}>
                                <View style={styles.contestcard}>
                                    <View style={{ width: '50%' }}>
                                        <_Text
                                            name='Entry'
                                            color='#999'
                                            ftsize={12}
                                        />
                                        <_Text
                                            name={contest.entry}
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
                                            name={contest.entry}
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
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

export default ContestDetail