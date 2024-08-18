import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Connect() {
    const {t} = useTranslation()
    return (
        <div className='page centerpage'>
            <h1>{t('connectPromo')}</h1>
            <h2>{t('findOffice')}</h2>
            <h3>{t('countOfOffices')}</h3>
            <div style={{borderRadius:'35px',margin:'10px',background:'black',width:'calc(100% - 20px)',height:'400px'}}>
                <p style={{margin:'auto',top:'calc(50% - 16px)',position:'relative'}}>no map</p>
            </div>
        </div>
    )
}
