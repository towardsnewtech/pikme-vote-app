import React from 'react'
import ContPartiLayout from '../../components/layout/contpartiLayout';
import PayConfirmation from '../../components/contparti/PayConfirmation';

const PayConfirmationScreen = ({navigation}: any) => {
    return (
        <ContPartiLayout>
            <PayConfirmation navigation={navigation} />
        </ContPartiLayout>
    )
}

export default PayConfirmationScreen