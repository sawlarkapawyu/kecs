import Head from 'next/head'
import Sidebar from '@/components/officer/sidebar'
import {
    MagnifyingGlassIcon,
  } from '@heroicons/react/20/solid'

const RegistrationPage = () => {
    
    const company = [
      { no: '1', type: 'Central', from_name: 'Mr.Smith', status: 'Registered', from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },
      { no: '2', type: 'Central', from_name: 'Mr.Dmith', status: 'Rejected',from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },
      { no: '3', type: 'Central', from_name: 'Mr.Tmith', status: 'Panding', from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },
      { no: '4', type: 'District', from_name: 'Ms.Lmith', status: 'Registered', from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },
      { no: '5', type: 'District', from_name: 'Ms.Kay', status: 'Registered', from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },
      { no: '6', type: 'Central', from_name: 'Ms.Su', status: 'Registered', from_id_no: '3/kakaya(na)12345', company_name: 'ABC.,Ltd', regDate: '11/08/2018' },

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
            {/* Page title */}
            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Registration</h1>
              </div>
            </div>
            
            {/* Company table (small breakpoint and up) */}
            <div className="mt-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">                
                <div className="border-b border-gray-200 py-2 sm:flex sm:items-center">
                    <div className="min-w-0 flex-1">
                        <div
                        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        aria-hidden="true"
                        >
                        <MagnifyingGlassIcon className="mr-3 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                        type="text"
                        name="search"
                        id="search"
                        className="block rounded-md border-gray-300 pl-9 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        placeholder="Search"
                        />
                    </div>
                    <div className="mt-4 flex sm:mt-0 sm:ml-4">
                        <button
                        type="button"
                        className="order-0 inline-flex items-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                        >
                        Create
                        </button>
                    </div>
                    </div>
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        No
                      </th>
                      <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Type
                      </th>
                      <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                        Name
                      </th>
                      <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                        Stauts
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
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {company.map((item) => (
                      <tr key={item.regNumber}>
                        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {item.no}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {item.type}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.from_name}</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.status}</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.from_id_no}</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.company_name}</td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{item.regDate}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
                          <a href="#" className="text-sky-600 hover:text-sky-900 px-2">
                            View<span className="sr-only">, {item.name}</span>
                          </a>
                          <a href="#" className="text-sky-600 hover:text-sky-900 px-2">
                            Edit<span className="sr-only">, {item.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </Sidebar>
    </>
  )
}

export default RegistrationPage