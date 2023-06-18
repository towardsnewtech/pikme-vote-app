import React from 'react'

import { StyleSheet, View } from 'react-native'
import WithdrawLayout from '../../components/layout/withdrawLayout'
import FilledButton from '../../shared/components/FilledButton'
import Text from '../../shared/components/_Text'

import Balance from '../../components/withdraw/Balance'
import DebitCard from '../../components/withdraw/DebitCard'
import AddCard from '../../components/withdraw/AddCard'
import DebitCardAdded from '../../components/withdraw/DeditCardAdded'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setSelectedAccount } from '../../store/slices/auth.slice'
import { withdrawAmount } from '../../firebase/payment'

const styles = StyleSheet.create({
    buttonView: {
        bottom: 10,
        width: '100%',
    }
})

const WithdrawScreen = ({ navigation }: any) => {
    const { account } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const titleList = ["Total account balance", "Choose Payment Method", "Add A Card", "Choose Payment Method"]
    const btnNameList = ["Next", "Next", "Add", "Proceed"]

    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [amount, setAmount] = React.useState(0)
    const [payType, setPayType] = React.useState(0);
    const [upiId, setUpiId] = React.useState("") ;

    const [number, onChangeNumber] = React.useState("") ;
    const [expireDate, onChangeExpireDate] = React.useState("") ;
    const [cvv, onChangeCvv] = React.useState("") ;
    const [name, onChangeName] = React.useState("") ;

    const [cardNumber, setCardNumber] = React.useState("") ;
    const [validThru, setValidThru] = React.useState("") ;

    const addOneMonth = (str: string) => {
        let year = new Date().getFullYear() ;
        let month = str.split("/")[0] ;
        let day = str.split("/")[1] ;
        let curDate = new Date(year, parseInt(month), parseInt(day))
        curDate.setMonth(curDate.getMonth() + 1)
        
        return curDate.getMonth() + "/" + curDate.getDate();
    }

    const handleNext = async () => {
        if (selectedIndex == 1) {
            setSelectedIndex(3)
            return ;
        }
        if (selectedIndex == 2) {
            setCardNumber(number);
            setValidThru(addOneMonth(expireDate))
            setPayType(2)
        }
        if (selectedIndex < titleList.length - 1)
            setSelectedIndex(selectedIndex + 1)
        else {
            await withdrawAmount(amount) ;
            dispatch(setSelectedAccount({
                ...account,
                balance: account.balance - amount
            }))

            navigation.navigate('Profile', { name: "Profile" })
        }
    }

    const handlePrev = () => {
        if (selectedIndex == 0) {
            navigation.navigate("Profile", {name: "Profile"})
        }
        
        if (selectedIndex == 3) {
            setSelectedIndex(1)
            return ;
        }
        if (selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1)
    }

    return (
        <WithdrawLayout handlePrev={handlePrev}>
            <Text mt={50} name={titleList[selectedIndex]} />

            {selectedIndex == 0 && <Balance 
                balance={account.balance}  amount={amount} setAmount={setAmount} 
            />}

            {selectedIndex == 1 && <DebitCard 
                amount={amount} 
                setSelectedIndex={setSelectedIndex} 
                payType={payType} 
                setPayType={setPayType} 
            />}
            
            {selectedIndex == 2 && <AddCard 
                number={number} onChangeNumber={onChangeNumber}
                expireDate={expireDate} onChangeExpireDate={onChangeExpireDate}
                cvv={cvv} onChangeCvv={onChangeCvv}
                name={name} onChangeName={onChangeName}
                cardNumber={cardNumber} validThru={validThru}
            />}

            {selectedIndex == 3 && <DebitCardAdded 
                amount={amount} 
                payType={payType} 
                upiId={upiId} 
                setUpiId={setUpiId} 
            />}

            {
                <View style={styles.buttonView}>
                    <FilledButton
                        disabled={ 
                            (selectedIndex == 0 && amount == 0) || 
                            (selectedIndex == 1 && payType == -1) ||
                            (selectedIndex == 2 && number == "" && expireDate == "" && cvv == "" && name == "") ||
                            (selectedIndex == 3 && payType != 2 && upiId == "")
                        }
                        text={btnNameList[selectedIndex]} onPress={
                            (selectedIndex == 0 && amount == 0) || 
                            (selectedIndex == 1 && payType == -1) ||
                            (selectedIndex == 2 && number == "" && expireDate == "" && cvv == "" && name == "") ||
                            (selectedIndex == 3 && payType != 2 && upiId == "") ?
                            () => {}
                            : handleNext
                        }
                    />
                </View>
            }
        </WithdrawLayout>
    )
}

export default WithdrawScreen