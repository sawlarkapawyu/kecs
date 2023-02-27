import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import Image from 'next/image'
import logo from '@/images/logos/knu.jpeg'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

const language = ['English', 'Karen', 'Myanmar']
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]


const MultiStepForm = () => {

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Head>
        <title>Sign In - KECS</title>
      </Head>
      <nav aria-label="Top">
        {/* Top navigation start */}
        <div className="bg-sky-900 drop-shadow-md">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form>
                <div>
                  <label htmlFor="desktop-currency" className="sr-only">
                    Language
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-inherit focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-inherit bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      {language.map((language) => (
                        <option key={language}>{language}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </form>

              <div className="flex items-center space-x-6">
                <a href="/login" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
                <a href="/register" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
              </div>
            </div>
          </div>
      </nav>
      {/* Top navigation end */}

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <Image
                className="inline-block h-20 w-20 rounded-full"
                src={logo}
                alt=""
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signup your account</h2>
        </div>

        <div className="mt-8">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
            {/* Nav */}
            <h2 className="text-lg font-medium mb-4">Step {step} of 2</h2>
            <div className="flex mb-4">
              <div
                className={`w-1/2 border-r border-gray-400 ${
                  step === 1 ? "bg-sky-900 text-white" : "bg-gray-200"
                } p-2 text-center cursor-pointer`}
                onClick={() => setStep(1)}
              >
                Your Account
              </div>
              <div
                className={`w-1/2 ${
                  step === 2 ? "bg-sky-900 text-white" : "bg-gray-200"
                } p-2 text-center cursor-pointer`}
                onClick={() => setStep(2)}
              >
                Your Profile
              </div>
            </div>
                
            {step === 1 ? <Step1 /> : <Step2 />}
            <div className="flex justify-end mt-6">
              {step > 1 && (
                <button
                  className=" sr-only rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step < 2 && (
                <button
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

const Step1 = () => (
  <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
    <div className="sm:col-span-3">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Username
      </label>
      <div className="mt-1">
        <input
          id="username"
          name="username"
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
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1">
        <input
          id="password"
          name="password"
          type="password"
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-800 sm:text-sm"
        />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Confirm Password
      </label>
      <div className="mt-1">
        <input
          id="password"
          name="password"
          type="password"
          required
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-900 focus:outline-none focus:ring-sky-800 sm:text-sm"
        />
      </div>
    </div>
  </div>
);



const Step2 = () => (
  <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
    <div className="sm:col-span-2">
      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Title
      </label>
      <div className="mt-1">
          <select
          id="title"
          name="title"
          autoComplete="title"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          >
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          </select>
      </div>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          First Name
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
          Last Name
      </label>
      <div className="mt-1">
          <input
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>
    <div className="sm:col-span-3">
      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
      </label>
      <div className="mt-1">
          <select
          id="gender"
          name="gender"
          autoComplete="gender"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          >
          <option>Male</option>
          <option>Female</option>
          </select>
      </div>
    </div>
    <div className="sm:col-span-3">
      <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of Birth
      </label>
      <div className="mt-1">
      <input
          type="date"
          name="dob"
          id="dob"
          autoComplete="dob"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>

    <div className="sm:col-span-3">
      <label htmlFor="id_number" className="block text-sm font-medium text-gray-700">
          ID Number
      </label>
      <div className="mt-1">
          <input
          id="id_number"
          name="id_number"
          type="text"
          autoComplete="id_number"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
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
      <label htmlFor="occuption" className="block text-sm font-medium text-gray-700">
          Occuption
      </label>
      <div className="mt-1">
          <input
          id="occuption"
          name="occuption"
          type="text"
          autoComplete="occuption"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>
    <div className="sm:col-span-3">
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image
      </label>
      <div className="mt-1">
          <input
          id="image"
          name="image"
          type="file"
          autoComplete="image"
          className="mt-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          />
      </div>
    </div>
    
    <div className="sm:col-span-3">
      <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
          Nationality
      </label>
      <div className="mt-1">
          <select
          id="nationality"
          name="nationality"
          autoComplete="nationality"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
          >
          <option>Myanmar</option>
          <option>Thailand</option>
          <option>Others</option>
          </select>
      </div>
    </div>
    <div className="sm:col-span-3">
      <label htmlFor="education" className="block text-sm font-medium text-gray-700">
          Education
      </label>
      <div className="mt-1">
          <input
          id="education"
          name="education"
          type="text"
          autoComplete="education"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-900 focus:ring-sky-800 sm:text-sm"
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

    <div className="sm:col-span-6 flex justify-start">
      <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-sky-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2"
      >
          Create Account
      </button>
    </div>
  </div>
  
);

export default MultiStepForm;


