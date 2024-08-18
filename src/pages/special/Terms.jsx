import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Terms() {
    const {t} = useTranslation()
    return (
        <div className='page'>
            <h3>{t('termsTitle')}</h3>
            <h4>{t('term1')}</h4>
            <h4>{t('term2')}</h4>
            <h4>{t('term3')}</h4>
            <h4>{t('term4')}</h4>
        </div>
    )
}
