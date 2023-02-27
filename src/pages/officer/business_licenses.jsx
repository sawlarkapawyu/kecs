import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/officer/sidebar'
import { Dialog, Menu, Transition } from '@headlessui/react'

import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
    HomeIcon,
  } from '@heroicons/react/20/solid'

const pages = [
    { name: 'KECS', href: '#', current: false },
    { name: 'Officer', href: '#', current: false },
    { name: 'Business & Licenses Management', href: '#', current: true },
]

const BusinessLicensesPage = () => {
    
    const company = [
    { name: 'Lindsay.,Ltd', email: 'lindsay@example.com', phone: '0983883833',  status: 'Pending' },
    { name: 'Walton.,Ltd', email: 'walton@example.com', phone: '0399383933',  status: 'Approved' },
    // More people...
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
                <nav className="flex py-4" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                            </a>
                        </div>
                        </li>
                        {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <a
                                href={page.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                            </div>
                        </li>
                        ))}
                    </ol>
                </nav>
              </div>
            </div>


            <div className="px-4 py-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Business & Licenses Management</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-sky-900 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                        Add business & Licenses
                    </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Business Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Email
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Phone
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {company.map((item) => (
                                <tr key={item.email}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {item.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.email}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.phone}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.status}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" className="text-sky-600 hover:text-sky-900 px-4">
                                    View<span className="sr-only">, {item.name}</span>
                                    </a>
                                    <a href="#" className="text-sky-600 hover:text-sky-900">
                                    Edit<span className="sr-only">, {item.name}</span>
                                    </a>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </Sidebar>
    </>
  )
}

export default BusinessLicensesPage