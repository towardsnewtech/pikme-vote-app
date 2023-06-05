import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import _Text from '../../shared/components/_Text'

const personImg1 = require('../../assets/images/contparti/contestresult/person1.png')
const personImg2 = require('../../assets/images/contparti/contestresult/person2.png')
const prize = require('../../assets/images/contparti/contestresult/prize.png')

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: '10%',
        marginBottom: '5%'
    },
    topbanner: {
        width: '100%',
        alignItems: 'center',
        position: 'relative'
    },
    icon: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        left: 0
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%'
    },
    footer: {
        alignItems: 'center',
        width: '100%',
        marginTop: '8%'
    }
})

const ContestResult = ({ navigation }: any) => {
    const person1 = {
        src: personImg1,
        name: 'You',
        total: '12',
        won: '10',
        plant: '2x'
    }
    const person2 = {
        src: personImg2,
        name: 'MarryPopp12',
        total: '12',
        won: '10',
        plant: '5x'
    }

    const PersonLayout = ({ data }: any) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image source={data.src} />
                <_Text
                    name={data.name}
                />
                <View style={{ backgroundColor: '#292e3e', borderColor: '#999', borderWidth: 1, paddingHorizontal: 40, paddingVertical: 20, borderRadius: 10, marginTop: 15 }}>
                    <View style={{ width: 50, alignItems: 'center', borderBottomColor: '#bbb', borderBottomWidth: 1, paddingBottom: 15 }}>
                        <_Text
                            name={data.total}
                            ftsize={18}
                            ftweight='600'
                        />
                        <_Text
                            name='Total Contests'
                            color='#999'
                            ftsize={12}
                            align='center'
                        />
                    </View>
                    <View style={{ width: 50, alignItems: 'center', borderBottomColor: '#bbb', borderBottomWidth: 1, paddingBottom: 15, marginTop: 15 }}>
                        <_Text
                            name={data.won}
                            ftsize={18}
                            ftweight='600'
                        />
                        <_Text
                            name='Contests Won'
                            color='#999'
                            ftsize={12}
                            align='center'
                        />
                    </View>
                    <View style={{ width: 50, alignItems: 'center', borderBottomColor: '#bbb', marginTop: 15 }}>
                        <_Text
                            name={data.plant}
                            ftsize={18}
                            ftweight='600'
                        />
                        <_Text
                            name='Plant Contests'
                            color='#999'
                            ftsize={12}
                            align='center'
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ width: '100%' }}>
            <View style={styles.container}>
                <View style={styles.topbanner}>
                    <AntDesign style={styles.icon} name="arrowleft" onPress={() => navigation.navigate("ContestConfirm", { name: "ContestConfirm" })} />
                    <_Text
                        name='Architecture Oasis'
                    />
                </View>
                <_Text
                    name='Starts in 3hr : 20m : 15'
                    color='#ccc'
                    align='center'
                    mt={10}
                />
                <View style={styles.body}>
                    <PersonLayout data={person1} />
                    <_Text
                        name='VS'
                        mt={40}
                    />
                    <PersonLayout data={person2} />
                </View>
                <View style={styles.footer}>
                    <Image source={prize} />
                    <_Text name='Winner receives' ftsize={14} mt={5} />
                    <_Text name='$99' color='#e1b560' ftsize={32} ftweight='600' mt={10} />
                </View>
            </View>
        </ScrollView>
    )
}

export default ContestResult