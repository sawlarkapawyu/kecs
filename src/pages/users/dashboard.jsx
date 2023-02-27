import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/users/sidebar'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    ChevronRightIcon,
    ChevronUpDownIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
  } from '@heroicons/react/20/solid'

const registration = [
  { no: '1', type: 'Central', name: 'Lindsay Walton', status: 'Pending', id_no: '3/kakaya(na)123455', company_name: 'Lindsay Walton., Ltd', date: '12/12/2022' },
  // More people...
]

const DashbaordPage = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

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
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">User Dashboard</h1>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-4">
                <button
                  type="button"
                  className="order-0 inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                >
                  Create
                </button>
              </div>
            </div>

            {/* Projects table (small breakpoint and up) */}
            <div className="px-6 lg:px-8">
              <div className="mt-8 flow-root">
                <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            No.
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Type
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Name
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Status
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            ID Number
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Company Name
                          </th>
                          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                            Date
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-0">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {registration.map((item) => (
                          <tr key={item.id_no}>
                            <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                              {item.no}
                            </td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.type}</td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.name}</td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.status}</td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.id_no}</td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.company_name}</td>
                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.date}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
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
        </Sidebar>
    </>
  )
}

export default DashbaordPage