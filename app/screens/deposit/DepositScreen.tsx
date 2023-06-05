import React from 'react'

import { StyleSheet, TextInput, View } from 'react-native'
import DepositLayout from '../../components/layout/depositLayout'
import FilledButton from '../../shared/components/FilledButton'
import Balance from '../../components/deposit/Balance'
import Text from '../../shared/components/_Text'
import DebitCard from '../../components/deposit/DebitCard'
import AddCard from '../../components/deposit/AddCard'
import DebitCardAdded from '../../components/deposit/DeditCardAdded'
import { depositAmount } from '../../firebase/payment'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setSelectedAccount } from '../../store/slices/auth.slice'

const styles = StyleSheet.create({
    buttonView: {
        // position: 'absolute',
        bottom: 20,
        width: '100%',
    }
})

const DepositScreen = ({ navigation }: any) => {
    const titleList = ["Enter Amount", "Choose Payment Method", "Add A Card", "Choose Payment Method"]
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

    const {account} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch() ;

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
            await depositAmount(amount) ;
            dispatch(setSelectedAccount({
                ...account,
                balance: account.balance + amount
            }))

            const routes = navigation.getState().routes ;
            const previous_screen_name = routes[routes.length - 2].params.name ;

            navigation.navigate(`${previous_screen_name}`, { name: `${previous_screen_name}` })
        }
    }

    const handlePrev = () => {
        if (selectedIndex == 0) {
            const routes = navigation.getState().routes ;
            const previous_screen_name = routes[routes.length - 2].params.name ;
            navigation.navigate(`${previous_screen_name}`, { name: `${previous_screen_name}` })
        }

        if (selectedIndex == 3) {
            setSelectedIndex(1)
            return ;
        }
        if (selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1)
    }

    return (
        <DepositLayout handlePrev={handlePrev}>
            <Text mt={50} name={titleList[selectedIndex]} />

            {selectedIndex == 0 && <Balance 
                amount={amount} setAmount={setAmount} 
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
        </DepositLayout>
    )
}

export default DepositScreen