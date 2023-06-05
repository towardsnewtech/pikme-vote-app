import React from 'react'
import ContPartiLayout from '../../components/layout/contpartiLayout'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import FilledButton from '../../shared/components/FilledButton'
import _Text from '../../shared/components/_Text'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Details from '../../components/contparti/contestConfirm/Details'
import Gallery from '../../components/contparti/contestConfirm/Gallery'

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999',
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#191e2d',
        marginTop: 20,
    },
    topbanner: {
        width: '100%',
        marginTop: 70,
        alignItems: 'center',
        position: 'relative'
    },
    icon: {
        color: 'white',
        fontSize: 25,
        position: 'absolute',
        left: 0
    }
})

const ContestConfirmScreen = ({ navigation }: any) => {
    const btnList = ['Details', 'Gallery']
    const [curBtn, setCurBtn] = React.useState('Details')

    return (
        <ContPartiLayout>
            <View style={styles.container}>
                <View style={styles.topbanner}>
                    <AntDesign style={styles.icon} name="arrowleft" onPress={() => navigation.navigate("PayConfirmation", {name: "PayConfirmation"})} />
                    <_Text
                        name='Food'
                    />
                </View>
                <_Text
                    name='Starts in 3hr : 20m : 15'
                    color='#ccc'
                    align='center'
                    mt={10}
                />
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

                { curBtn == "Details" && <Details /> }
                { curBtn == "Gallery" && <Gallery navigation={navigation} /> }
            </View>
        </ContPartiLayout>
    )
}

export default ContestConfirmScreen