import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/users/sidebar'

const DashbaordPage = () => {

  return (
    <>
        <Head>
            <title>KECS - Karen National Union Economic Committee Secetartiat</title>
            <meta
            name=""
            content=""
            />
        </Head>
        <Sidebar>
            {/* Page title & actions */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">KECS - User Dashboard</h1>
              </div>
            </div>
        

            {/* Company table (small breakpoint and up) */}
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              
            </div>
        </Sidebar>
    </>
  )
}

export default DashbaordPage