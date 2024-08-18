import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Help() {
    const {t} = useTranslation()
    return (
        <div className='page'>
            <h2>{t('help1')}</h2>
            <hr />
            <h3>{t('help1answ')}</h3>
        </div>
    )
}
