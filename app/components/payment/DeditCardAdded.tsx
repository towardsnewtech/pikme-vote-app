import React from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import _Text from '../../shared/components/_Text'
import LinearGradient from 'react-native-linear-gradient';
import _OutLinedButton from '../../shared/components/_OutLinedButton';

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
        width: '100%'
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
    },
    debitcard: {
        backgroundColor: '#2a3041',
        padding: 20,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    visainput: {
        borderWidth: 1,
        borderColor: '#4775a4',
        borderRadius: 15,
        backgroundColor: '#2b3d57',
        padding: 10,
        marginBottom: 10
    }
})

const DebitCardAdded = ({amount}: {amount: number}) => {
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

    const [payType, setPayType] = React.useState(0);

    const handleSelect = (index: number) => {
        setPayType(index)
    }

    return (
        <ScrollView style={{width: '100%'}}>
            <_Text
                name="Total amount"
                ftweight='600'
                mt={40}
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
                            <View style={{ ...styles.item, marginBottom: 20 }}>
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
            </View>

            <View style={styles.debitcard}>
                <TouchableOpacity onPress={() => handleSelect(2)}>
                    <View style={{ ...styles.item, marginBottom: 10 }}>
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
                        <LinearGradient
                            colors={['#34394a', '#282c3e']}
                            start={{ x: 0.0, y: 1.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            style={styles.linearRadioBtn}
                        >
                            {
                                payType == 2 &&
                                <View style={styles.clickRadioBtn}></View>
                            }
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                <TextInput style={styles.visainput} placeholder='***************3812' placeholderTextColor={'#888'} />
                <_OutLinedButton
                    text='+  Add a card'
                    width='100%'
                />
            </View >
        </ScrollView>
    )
}

export default DebitCardAdded