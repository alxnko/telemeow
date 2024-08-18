import React from 'react'

export default function SimpleCard({className,children}) {
    return (
        <div className={'post '+className}>
                {children}
        </div>
    )
}
