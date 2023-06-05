import React from 'react'
import ContPartiLayout from '../../components/layout/contpartiLayout';
import Category from '../../components/contparti/Category';

const CategoryScreen = ({navigation}: any) => {
    return (
        <ContPartiLayout>
            <Category navigation={navigation} />
        </ContPartiLayout>
    )
}

export default CategoryScreen