import React from 'react'
import ContPartiLayout from '../../components/layout/contpartiLayout'
import ImportPhoto from '../../components/contparti/ImportPhoto'
import SelectPhoto from '../../components/contparti/SelectPhoto'
import UploadPhoto from '../../components/contparti/UploadPhoto'

const UploadPhotoScreen = ({navigation}: any) => {
    const [step, setStep] = React.useState(0) ;
    const [img, setImg] = React.useState("") ;
    const [curY, setCurY] = React.useState(0);
    const [pic, setPic] = React.useState(null);

    return (
        <ContPartiLayout>
            { step == 0 && <ImportPhoto 
                setStep={setStep} 
                navigation={navigation} 
                setImg={setImg} img={img} 
            /> }
            
            { step == 1 && <SelectPhoto 
                setStep={setStep} 
                img={img} 
                curY={curY} setCurY={setCurY}
                pic={pic} setPic={setPic}
            /> }
            
            { step == 2 && <UploadPhoto 
                setStep={setStep} 
                navigation={navigation} 
                img={img} 
                curY={curY}
                pic={pic}
            /> }
        </ContPartiLayout>
    )
}

export default UploadPhotoScreen