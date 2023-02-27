import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/officer/sidebar'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/20/solid'

const DashbaordPage = () => {

    const stats = [
      { name: 'Total Users', stat: '25' },
      { name: 'Total Company Registration', stat: '20' },
      { name: 'Total Business & License Registration ', stat: '55' },
    ]

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
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">KECS - Officer Dashboard</h1>
              </div>
            </div>
            {/* Pinned projects */}
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              <h2 className="sr-only text-sm font-medium text-gray-900">Briefly Information</h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                      <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                    </div>
                  ))}
                </dl>
            </div>

            {/* Company table (small breakpoint and up) */}
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              
            </div>
        </Sidebar>
    </>
  )
}

export default DashbaordPage