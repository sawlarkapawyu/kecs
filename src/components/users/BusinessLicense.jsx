import { Container } from '@/components/Container'
import { CloudArrowUpIcon, LockClosedIcon, HomeIcon, ArrowPathIcon, ShieldCheckIcon, CogIcon, ServerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '@/images/logos/knu.jpeg'
import Head from 'next/head'
import { Fragment, useState } from 'react'
import Sidebar from '@/components/users/sidebar'
import { Button, Input, message, Steps, theme } from 'antd';
import { PencilIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const pages = [
    { name: 'KECS', href: '#', current: false },
    { name: 'Registration', href: '#', current: true },
    { name: 'Business & Licneses', href: '#', current: true },
]

const Step1 = () => (
    <div className='grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6'>
      <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Company (or) Owner Name
        </label>
        <div className="mt-1">
          <input
            id=""
            name=""
            type="text"
            required
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm"
          />
        </div>
      </div>
      
    <div className="sm:col-span-2">
      <label htmlFor="" className="block text-sm font-medium text-gray-700">
          Company/Business Structure
      </label>
      <div className="mt-1">
          <select
          id=""
          name=""
          autoComplete=""
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          >
          <option>Sole Proprietorship</option>
          <option>Joint Venture Company</option>
          <option>Public Company </option>
          <option>Private Company</option>
          <option>Others</option>
          </select>
      </div>
    </div>
    <div className="sm:col-span-2">
        <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
          Company/Business Key Personnel
        </label>
        <div className="mt-1">
          <input
            id="company_website"
            name="company_website"
            type="text"
            required
            className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sky-900 focus:outline-none focus:ring-sky-900 sm:text-sm"
          />
        </div>
    </div>

    <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Register with the government 
            </label>
            <div className="mt-1">
                <input
                    id=""
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    Yes    
                </label>
                <input
                id=""
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                No
                </label>
            </div>
        </div>
    
    <div className="sm:col-span-2">
      <label htmlFor="" className="block text-sm font-medium text-gray-700">
        Registration Number
      </label>
      <div className="mt-1">
          <input
          type="text"
          name=""
          id=""
          autoComplete="street-address"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label htmlFor="" className="block text-sm font-medium text-gray-700">
        Contact number 
      </label>
      <div className="mt-1">
          <input
          type="text"
          name=""
          id=""
          autoComplete=""
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Company Email Address 
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="region"
          id="region"
          autoComplete="address-level1"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
            Company Address (Original) 
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="postal-code"
          id="postal-code"
          autoComplete="postal-code"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>
  

</div>
);
  
const Step2 = () => (
    <div className='grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6'>
        <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Building to be used for business operation
            </label>
            <div className="mt-1">
                <input
                    id=""
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    On    
                </label>
                <input
                id=""
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                Lease
                </label>
            </div>
        </div>
        <div className="sm:col-span-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            If rented Whom do you rent from Lease Period 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Building to be used for business operation
            </label>
            <div className="mt-1">
                <input
                    id="on"
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    On    
                </label>

                <input
                id="lease"
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                Lease
                </label>
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            If rented Whom do you rent from Lease Period 
            </label>
            <div className="mt-1">
                <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            A harmful items or chemical being used in the business.
            </label>
            <div className="mt-1">
                <input
                    id=""
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    Yes    
                </label>
                
                <input
                id=""
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    No
                </label>
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                If any, provide the name
            </label>
            <div className="mt-1">
                <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Use of powerful machines 
            </label>
            <div className="mt-1">
                <input
                    id=""
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    Yes    
                </label>
                
                <input
                id=""
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    No
                </label>
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                If any, please indicate what type of machine
            </label>
            <div className="mt-1">
                <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                />
            </div>
        </div>

        <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Businesses that are licensed by the government 
            </label>
            <div className="mt-1">
                <input
                    id=""
                    name="notification-method"
                    type="radio"
                    defaultChecked=""
                    className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    Yes    
                </label>
                
                <input
                id=""
                name="notification-method"
                type="radio"
                defaultChecked=""
                className="w-4 h-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                />  
                <label htmlFor="" className="px-5 ml-3 text-sm font-medium text-gray-700">
                    No
                </label>
            </div>
        </div>

        <div className="sm:col-span-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                If applicable, please attach
            </label>
            <div className="mt-1">
                <input class="block w-full text-sm font-medium text-white-900 border border-white-300 cursor-pointer bg-white-50 dark:text-white-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></input>
            </div>
        </div>

    </div>
  );

const Step3 = () => (
<div className='grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6'>
    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Trading name (if different from the above name) 
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>
    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Permitted Location 
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>

    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Proposed project 
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>

    <div className="sm:col-span-2">
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Prefer Location to operate (Provide the map) 
        </label>
        <div className="mt-1">
            <input class="block w-full text-sm font-medium text-white-900 border border-white-300 cursor-pointer bg-white-50 dark:text-white-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></input>
        </div>
    </div>

    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Number of License  
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>

    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Operation start date 
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>

    <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
            Operation period 
        </label>
        <div className="mt-1">
            <input
            type="text"
            name=""
            id=""
            autoComplete=""
            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
            />
        </div>
    </div>
</div>
);

const steps = [
    {
      title: 'Business Information',
      content: < Step1></Step1>,
      
    },
    {
      title: 'Additional Questions',
      content: < Step2></Step2>,
    },
    {
      title: 'Business Licnese',
      content: < Step3></Step3>,
    },
  ];
  
export function BusinessLicense() {

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
        <Container>
            {/* Breadcrumbs Section Start */}
            <nav className="flex py-4 bg-white border-b border-gray-200" aria-label="Breadcrumb">
                <ol role="list" className="flex w-full max-w-screen-xl space-x-4">
                    <li className="flex">
                    <div className="flex items-center">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                        </a>
                    </div>
                    </li>
                    {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                        <svg
                            className="flex-shrink-0 w-6 h-full text-gray-200"
                            viewBox="0 0 24 44"
                            preserveAspectRatio="none"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                        </svg>
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
            {/* Breadcrumbs Section End */}
           
            <div className="py-4 border-b border-gray-200">
                <Steps className='px-4 mt-6 sm:px-6 lg:px-8 ' current={current} items={items} />
                
                <div className='px-4 mt-6 sm:px-6 lg:px-8'>{steps[current].content}</div>
                    <div style={{ marginTop: 24}} className='px-4 mt-6 sm:px-6 lg:px-8 '>
                        {current < steps.length - 1 && (
                        <Button onClick={() => next()} className='inline-flex justify-center text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-900 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button onClick={() => message.success('Processing complete!')} className='inline-flex justify-center text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-900 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Done
                        </Button>
                        )}
                        {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className='inline-flex justify-center text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-900 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2'>
                            Previous
                        </Button>
                        )}
                </div>    
            </div>      
        </Container>
    )
}