import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { BusinessLicense, CompanyPage } from '@/components/users/BusinessLicense'


// import { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    HomeIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

const BusinessLicensePage = () => {
  
    return (
        <>
        <Head>
            <title>KECS - Karen National Union Economic Committee Secetartiat</title>
            <meta
            name=""
            content=""
            />
        </Head>
        <Header />
        {/* <Banner /> */}
        <BusinessLicense />
        <Footer />    
        </>
    )
}

export default BusinessLicensePage