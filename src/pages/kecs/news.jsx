import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { News } from '@/components/kecs/news'


// import { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    HomeIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

const NewsPage = () => {
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
        <Banner />
        <News />
        <Footer />    
        </>
    )
}

export default NewsPage