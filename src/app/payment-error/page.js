import ErrorPage from '@/components/error/ErrorPage'
import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Header />
            <ErrorPage />
            <Footer />
        </div>
    )
}

export default Page