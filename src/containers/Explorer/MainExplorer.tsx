import AppLayout from '@/components/common/AppLayout'
import Header from '@/components/common/Header'
import StatusBar from '@/components/common/StatusBar'
import React from 'react'

const MainExplorer = () => {
    return(
        <AppLayout>
            <StatusBar peers={12} BTS2USD={5000}/>
            <Header title='Wallet Explorer' withStatusBar/>
        </AppLayout>
    )
}

export default MainExplorer