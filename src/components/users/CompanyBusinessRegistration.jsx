import { Container } from '@/components/Container'
import { CloudArrowUpIcon, LockClosedIcon, HomeIcon, ArrowPathIcon, ShieldCheckIcon, CogIcon, ServerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '@/images/logos/knu.jpeg'

const pages = [
    { name: 'KECS', href: '#', current: false },
    { name: 'Registration', href: '#', current: true },
    { name: 'Company / Business Registration', href: '#', current: true },
  ]

export function CompanyBusinessRegistration() {
    return (
        <Container>
            {/* Breadcrumbs Section Start */}
            <nav className="flex py-4 bg-white border-b border-gray-200" aria-label="Breadcrumb">
                <ol role="list" className="flex w-full max-w-screen-xl mx-auto space-x-4">
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
            
            <form className="py-8 space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div>
                            <div className="text-center">
                            <Image
                                className="inline-block w-20 h-20 rounded-full"
                                src={logo}
                                alt=""
                            />
                            </div>
                            <h3 className="text-lg font-medium leading-6 text-center text-gray-900">KNU-Karen National Union <br></br> Central Economic Committee <br></br>Company, Business Registration Application</h3>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant’s (Fields to be created accordingly)</h3>
                        </div>
                        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Company Name	(In English)
                                </label>
                                <div className="mt-1">
                                    <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Company Name	(In Burmese)
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
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Original Business Registration Number (Legal registration number of a base country) 
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

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <div className="mt-1">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Business Registration Number (Myanmar) 
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
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                        className="h-full py-0 pl-3 text-gray-500 bg-transparent border-transparent rounded-md pr-7 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                        className="block w-full pl-16 border-gray-300 rounded-md focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Number of business licenses obtained and registration number  
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
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Businesses operating in KNU area 
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
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <p className='text-justify'>This form is the registration of a business. This is only a form that recognizes a business that has registered its basic information with KNU. KNU does not endorse this business. Registration does not grant a business license or permission to implement any project. This registration may not be used to obtain licenses from Myanmar governments.</p>
                        </div>
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
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
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
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-start">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Send
                    </button>
                    </div>
                </div>
            </form>            
        </Container>
    )
}