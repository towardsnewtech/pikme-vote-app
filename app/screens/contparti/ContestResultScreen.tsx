import React from 'react'
import ContPartiLayout from '../../components/layout/contpartiLayout'
import ContestResult from '../../components/contparti/ContestResult'

const ContestResultScreen = ({navigation}: any) => {
    return (
        <ContPartiLayout>
            <ContestResult navigation={navigation} />
        </ContPartiLayout>
    )
}

export default ContestResultScreen