import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/users/sidebar'
import { Button, Input, message, Steps, theme } from 'antd';
import { PencilIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const Step1 = () => (
    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
      <div className="sm:col-span-3">
        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <div className="mt-1">
          <input
            id="company_name"
            name="company_name"
            type="text"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm"
          />
        </div>
      </div>
  
      <div className="sm:col-span-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-800 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
      <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
          Phone Number
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
              Country
              </label>
              <select
              id="country"
              name="country"
              autoComplete="country"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
              >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
              </select>
          </div>
          <input
              type="text"
              name="phone-number"
              id="phone-number"
              className="block w-full rounded-md border-gray-300 pl-16 focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
              placeholder="+1 (555) 987-6543"
          />
          </div>
      </div>
    </div>
    <div className="sm:col-span-3">
        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
          Company Website
        </label>
        <div className="mt-1">
          <input
            id="company_website"
            name="company_website"
            type="text"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm"
          />
        </div>
    </div>
    <div className="sm:col-span-3">
      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
          Street address
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="street-address"
          id="street-address"
          autoComplete="street-address"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="city"
          id="city"
          autoComplete="address-level2"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
          State / Province
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="region"
          id="region"
          autoComplete="address-level1"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
          ZIP / Postal code
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="postal-code"
          id="postal-code"
          autoComplete="postal-code"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>
  

</div>
);
  
const Step2 = () => (
    <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
        <div className="sm:col-span-3">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Original Business Registration Number 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>
        <div className="sm:col-span-3">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Name of registered base country 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Number of business licenses obtained and registration number 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-3">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Businesses operating in KNU area 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Company Owner Name
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Nationality 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
            </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                Percentage 
            </label>
            <div className="mt-1 flex">
                <input
                type="text"
                name=""
                id=""
                autoComplete=""
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
                />
                <div className='px-4'></div>
                <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5 text-gray-300" aria-hidden="true" />
                    Add
                </button>
            </div>
        </div>

        <div className="sm:col-span-6">
            <h1 class="text-grey-darkest">List of your business</h1>
            <div class="flex mt-4">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />  <div className='px-4'></div>
            <button className='p-2 inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800'>                
            <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5 text-gray-300" aria-hidden="true" />Add</button>
            </div>
        </div>
        <div className="sm:col-span-6">
            <h1 class="text-grey-darkest">List of your director</h1>
            <div class="flex mt-4">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />  
            <div className='px-4'></div>
            <button className='p-2 inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-800'>                
            <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5 text-gray-300" aria-hidden="true" />Add</button>
            </div>
        </div>

    </div>
    
  );

const Step3 = () => (
<div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div className="space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                A. Memorandum and Articles of Association
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCS up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                B. Copy of National Identification Card, passport or other certified certificate of each director
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCS up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                C. To submit the application letter application form
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCS up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                D. Presenting the main business objectives of the company
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCS up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                E. Presenting the main business objectives of the company
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOCS up to 10MB</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

      
  


);

const steps = [
    {
      title: 'Company Information',
      content: < Step1></Step1>,
      
    },
    {
      title: 'Additional Questions',
      content: < Step2></Step2>,
    },
    {
      title: 'Required Documents',
      content: < Step3></Step3>,
    },
  ];
  

const CompanyRegistrationPage = () => {

const { token } = theme.useToken();
const [current, setCurrent] = useState(0);

const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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

            <Steps className='mt-6 px-4 sm:px-6 lg:px-8 ' current={current} items={items} />
            
                <div className='mt-6 px-4 sm:px-6 lg:px-8'>{steps[current].content}</div>
                    <div style={{ marginTop: 24}} className='mt-6 px-4 sm:px-6 lg:px-8 '>
                        {current < steps.length - 1 && (
                        <Button onClick={() => next()} className='inline-flex justify-center rounded-md border border-transparent bg-sky-900 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button onClick={() => message.success('Processing complete!')} className='inline-flex justify-center rounded-md border border-transparent bg-sky-900 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Done
                        </Button>
                        )}
                        {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className='inline-flex justify-center rounded-md border border-transparent bg-sky-900 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Previous
                        </Button>
                        )}
                </div>
                
            {/* Company table (small breakpoint and up) */}
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              
            </div>
        </Sidebar>
    </>
  )
}

  

export default CompanyRegistrationPage