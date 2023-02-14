import { Container } from '@/components/Container'
import { CloudArrowUpIcon, LockClosedIcon, HomeIcon, ArrowPathIcon, ShieldCheckIcon, CogIcon, ServerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '@/images/logos/knu.jpeg'

const pages = [
    { name: 'KECS', href: '#', current: false },
    { name: 'Registration', href: '#', current: true },
    { name: 'Small Business Registration', href: '#', current: true },
  ]

export function SmallBusinessRegistration() {
    return (
        <Container>
            {/* Breadcrumbs Section Start */}
            <nav className="flex border-b border-gray-200 bg-white py-4" aria-label="Breadcrumb">
                <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4">
                    <li className="flex">
                    <div className="flex items-center">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                        </a>
                    </div>
                    </li>
                    {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                        <svg
                            className="h-full w-6 flex-shrink-0 text-gray-200"
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
            
            <form className="space-y-8 divide-y divide-gray-200 py-8">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div>
                            <div className="text-center">
                            <Image
                                className="inline-block h-20 w-20 rounded-full"
                                src={logo}
                                alt=""
                            />
                            </div>
                            <h3 className="text-lg text-center font-medium leading-6 text-gray-900">KNU-Karen National Union <br></br> District Economic Committee <br></br>Small Business Registration Application</h3>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant’s (Fields to be created accordingly)</h3>
                        </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Owner Name
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Registration No./National Identity Card No
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Type of Business
                        </label>
                        <div className="mt-1">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            >
                            <option>Myanmar</option>
                            <option>Thailand</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
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
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                className="block w-full rounded-md border-gray-300 pl-16 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                placeholder="+1 (555) 987-6543"
                            />
                            </div>
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
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            State / Province
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            ZIP / Postal code
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Period of business establishment  
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Number of workers 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Building to be used for business operation
                        </label>
                        <div className="mt-1">
                            <input
                                id=""
                                name="notification-method"
                                type="radio"
                                defaultChecked=""
                                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                On    
                            </label>
                            <input
                            id=""
                            name="notification-method"
                            type="radio"
                            defaultChecked=""
                            className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />  
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                            Lease
                            </label>
                        </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        If rented Whom do you rent from Lease Period 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Building to be used for business operation
                        </label>
                        <div className="mt-1">
                            <input
                                id=""
                                name="notification-method"
                                type="radio"
                                defaultChecked=""
                                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                On    
                            </label>

                            <input
                            id=""
                            name="notification-method"
                            type="radio"
                            defaultChecked=""
                            className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />  
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                            Lease
                            </label>
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        If rented Whom do you rent from Lease Period 
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        A harmful items or chemical being used in the business.
                        </label>
                        <div className="mt-1">
                            <input
                                id=""
                                name="notification-method"
                                type="radio"
                                defaultChecked=""
                                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                Yes    
                            </label>
                            
                            <input
                            id=""
                            name="notification-method"
                            type="radio"
                            defaultChecked=""
                            className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />  
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                No
                            </label>
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            If any, provide the name
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Use of powerful machines 
                        </label>
                        <div className="mt-1">
                            <input
                                id=""
                                name="notification-method"
                                type="radio"
                                defaultChecked=""
                                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                Yes    
                            </label>
                            
                            <input
                            id=""
                            name="notification-method"
                            type="radio"
                            defaultChecked=""
                            className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />  
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                No
                            </label>
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            If any, please indicate what type of machine
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Businesses that are licensed by the government 
                        </label>
                        <div className="mt-1">
                            <input
                                id=""
                                name="notification-method"
                                type="radio"
                                defaultChecked=""
                                className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                Yes    
                            </label>
                            
                            <input
                            id=""
                            name="notification-method"
                            type="radio"
                            defaultChecked=""
                            className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                            />  
                            <label htmlFor="" className="ml-3 px-5 text-sm font-medium text-gray-700">
                                No
                            </label>
                        </div>
                        </div>
                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            If applicable, please attach
                        </label>
                        <div className="mt-1">
                            <input class="block w-full text-lg text-white-900 border border-white-300 cursor-pointer bg-white-50 dark:text-white-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></input>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-6 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Registration Date 
                    </label>
                    <div className="mt-1">
                        <input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Name of Registrator
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="text"
                        id="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        National Identity Card No
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="text"
                        id="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        />
                    </div>
                    </div>
                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="text"
                        id="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                        />
                    </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-start">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Send
                    </button>
                    </div>
                </div>
            </form>              
        </Container>
    )
}