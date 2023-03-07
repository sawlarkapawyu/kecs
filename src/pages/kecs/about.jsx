import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/kecs/about'
import { Banner } from '@/components/Banner'

// import { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    HomeIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

const AboutPage = () => {
    // const [dataError, setDataError] = useState(null)
    // const [loading, setLoading] = useState(true)
    
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
        <About />
        <Footer />    
        </>
    )
}

export default AboutPage