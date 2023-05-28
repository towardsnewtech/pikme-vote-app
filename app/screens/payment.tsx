import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { GooglePay, RequestDataType, AllowedCardNetworkType, AllowedCardAuthMethodsType } from 'react-native-google-pay'

const allowedCardNetworks: AllowedCardNetworkType[] = ['VISA', 'MASTERCARD']
const allowedCardAuthMethods: AllowedCardAuthMethodsType[] = ['PAN_ONLY', 'CRYPTOGRAM_3DS']

const requestData: RequestDataType = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'USD',
  },
  merchantName: 'Example Merchant',
}

const stripeRequestData: RequestDataType = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      gateway: 'stripe',
      gatewayMerchantId: '',
      stripe: {
        publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
        version: '2018-11-08',
      },
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '123',
    totalPriceStatus: 'FINAL',
    currencyCode: 'USD',
  },
  merchantName: 'Example Merchant',
}


const PaymentTest = () => {
    const payWithGooglePay = () => {
      // Check if Google Pay is available
      GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
        .then((ready) => {
          console.log('google pay')
          if (ready) {
            // Request payment token
            GooglePay.requestPayment(requestData)
              .then(( ) => console.log('success'))
              .catch(err => console.log(err)) 
          }
        })
    }

    const payWithStripeGooglePay = () => {
      // Check if Google Pay is available
      GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
        .then((ready) => {
          console.log('stripe pay')
          if (ready) {
            // Request payment token
            GooglePay.requestPayment(stripeRequestData)
              .then(( ) => console.log('success'))
              .catch(err => console.log(err)) 
          }
        })
    }

    React.useEffect(() => {
      if(Platform.OS == 'android') {
        GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST)
      }
    }, [])

    return (
        <View
            style={{
                marginTop: 300,
                alignItems: 'center'
            }}
        >
            <TouchableOpacity onPress={payWithGooglePay}>
                <Text>Google Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={payWithStripeGooglePay}>
                <Text>Stripe Google Pay</Text>
            </TouchableOpacity>
        </View>
    )
} 

export default PaymentTest

const styles = StyleSheet.create({
    button: {
      width: 300,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });