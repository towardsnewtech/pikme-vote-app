import React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import _Text from '../../shared/components/_Text'
import LinearGradient from 'react-native-linear-gradient'
import FilledButton from '../../shared/components/FilledButton'

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative'
    },
    header: {
        marginTop: 70,
        marginBottom: 30
    },
    btnBack: {
        padding: 1,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10
    }
})

const Interest = ({navigation}: any) => {
    const [selectedBtn, setSelectedBtn] = React.useState("Architecture Colorful ");
    const buttonList = ['Architecture', 'Abstract', 'Animal', 'Minimal', 'Nature', 'Food', 'Art', 'Business', 'Interior', 'Colorful', 'Technology', 'Plants', 'Portrait']

    const handleGoto = () => {
        navigation.navigate('Login', { name: "Login" });
    }

    return (
        // <SafeAreaView>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1b202f', '#1b202f']}
                style={styles.background}
            >
                <View style={styles.header}>
                    <_Text
                        name='Select topics you are interested in'
                        ftsize={22}
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        buttonList.map((btn, index) => (
                            selectedBtn.indexOf(btn) >= 0 ?
                                <TouchableOpacity key={index} onPress={() => { let str = selectedBtn.replace(btn + " ", ""); setSelectedBtn(str) }}>
                                    <LinearGradient
                                        colors={['#8fb5ff', '#8fb5ff']}
                                        style={styles.btnBack}
                                    >
                                        <View style={{ backgroundColor: '#232c42', padding: 11, borderRadius: 10 }}>
                                            <_Text
                                                name={btn}
                                                ftsize={20}
                                            />
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity key={index} onPress={() => setSelectedBtn(selectedBtn + btn + " ")}>
                                    <LinearGradient
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 0, y: 1 }}
                                        colors={['#999', '#999']}
                                        style={styles.btnBack}
                                    >
                                        <View style={{ backgroundColor: '#1b202f', padding: 11, borderTopRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                            <_Text
                                                name={btn}
                                                ftsize={20}
                                            />
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{ width: '100%', position: 'absolute', bottom: 50, left: '5%' }}>
                    <FilledButton
                        text='Continue'
                        width='100%'
                        onPress={handleGoto}
                    />
                </View>
            </LinearGradient>
        // </SafeAreaView>
    )
}

export default Interest