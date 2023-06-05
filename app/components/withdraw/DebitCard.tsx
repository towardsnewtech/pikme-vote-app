import React from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import _Text from '../../shared/components/_Text'
import LinearGradient from 'react-native-linear-gradient';
import _OutLinedButton from '../../shared/components/_OutLinedButton';

const klarna = require('../../assets/images/payment/debit-card/klarna.png');
const applePay = require('../../assets/images/payment/debit-card/apple-pay.png');
const googlePay = require('../../assets/images/payment/debit-card/google-pay.png');
const debitCard = require('../../assets/images/payment/debit-card/debit-card.png');

const styles = StyleSheet.create({
    body: {
        marginTop: 40,
        alignSelf: "flex-start",
        paddingLeft: 30,
        paddingRight: 30
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },
    linearRadioBtn: {
        width: 20,
        height: 20,
        borderRadius: 10,
        padding: 5,
        overflow: 'hidden',
    },
    clickRadioBtn: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#88ff88',
    }
})

const DebitCard = ({amount, setSelectedIndex, payType, setPayType}: any) => {
    const payList = [
        {
            source: applePay,
            label: 'Apple Pay'
        },
        {
            source: googlePay,
            label: 'Google Pay'
        }
    ]

    const handleSelect = (index: number) => {
        setPayType(index)
    }

    return (
        <ScrollView style={{width: '100%'}}>
            <_Text
                name="Total amount"
                ftweight='600'
                mt={90}
                align='center'
            />
            <_Text
                name={`$${amount.toFixed(2)}`}
                ftsize={60}
                mt={10}
                align='center'
            />
            <View style={styles.body}>
                {
                    payList.map((item, index) => (
                        <TouchableOpacity
                            style={{
                                width: '100%'
                            }}
                            key={index}
                            onPress={() => handleSelect(index)}
                        >
                            <View style={styles.item}>
                                <View
                                    style={{
                                        flexDirection: 'row', alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        source={item.source}
                                    />
                                    <_Text
                                        name={item.label}
                                        ml={10}
                                    />
                                </View>
                                <LinearGradient
                                    colors={['#34394a', '#282c3e']}
                                    start={{ x: 0.0, y: 1.0 }}
                                    end={{ x: 1.0, y: 1.0 }}
                                    style={styles.linearRadioBtn}
                                >
                                    {
                                        payType == index && 
                                        <View style={styles.clickRadioBtn}></View>
                                    }
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <View style={styles.item}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center'
                        }}
                    >
                        <Image
                            source={debitCard}
                        />
                        <_Text
                            name="Debit Card"
                            ml={10}
                        />
                    </View>
                    <_OutLinedButton
                        text='+  Add a card'
                        width='45%'
                        onPress={() => setSelectedIndex(2)}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default DebitCard