import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChartPieIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const languages = ['English', 'Karen', 'Myanmar']


const registration = [
  {
    name: 'Company Registration',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/users/company',
    icon: ChartBarIcon,
  },
  {
    name: 'Small Business Registration',
    description: "Connect with third-party tools that you're already using.",
    href: '/users/business',
    icon: Squares2X2Icon,
  },
  {
    name: 'Large Enterprises Registration',
    description: "Connect with third-party tools that you're already using.",
    href: '/users/business',
    icon: Squares2X2Icon,
  },
    {
      name: 'Business Licenses Registration',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/users/business_licenses',
      icon: CursorArrowRaysIcon,
    },

]

const callsToAction = [
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
]
const department1 = [
  { name: 'Agriculture', href: '#', icon: InformationCircleIcon },
  { name: 'Alliance', href: '#', icon: BuildingOfficeIcon },
  { name: 'Defense', href: '#', icon: NewspaperIcon },
  { name: 'Education & Culture', href: '#', icon: BriefcaseIcon },
  { name: 'Foreign Affairs', href: '#', icon: ShieldCheckIcon },
  { name: 'Forestry', href: '#', icon: BriefcaseIcon },
  { name: 'Tax and Finance', href: '#', icon: ShieldCheckIcon },
]
const department2 = [
  { name: 'Health and Welfare', href: '#', icon: UserGroupIcon },
  { name: 'Interior and Religious Affairs', href: '#', icon: GlobeAltIcon },
  { name: 'Judiciary', href: '#', icon: BookmarkSquareIcon },
  { name: 'Livestock and Fishery', href: '#', icon: ComputerDesktopIcon },
  { name: 'Mining', href: '#', icon: GlobeAltIcon },
  { name: 'Organising and Information', href: '#', icon: BookmarkSquareIcon },
  { name: 'Transportation', href: '#', icon: ComputerDesktopIcon },
]

const user_guides = [
  { name: 'License Application user guide', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Company Application user guide', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Amendment user guide', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Extension user guide ', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Renewal user guide ', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <header className='relative z-10'>
      <Container>
        <nav aria-label="Top">
          {/* Top navigation start */}
          <div className="bg-sky-900 drop-shadow-md">
              <div className="flex items-center justify-between h-10 px-4 mx-auto sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form>
                  <div>
                    <label htmlFor="desktop-currency" className="sr-only">
                      Language
                    </label>
                    <div className="relative -ml-2 border-transparent rounded-md group bg-inherit focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="desktop-currency"
                        name="currency"
                        className="flex items-center rounded-md border-transparent bg-inherit bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                      >
                        {languages.map((Language) => (
                          <option key={Language}>{Language}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                        <ChevronDownIcon className="w-5 h-5 text-gray-300" aria-hidden="true" />
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

        <Popover className="relative bg-white">
          <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true" />
            <div className="relative z-20">
              <div className="flex items-center justify-between px-6 py-5 mx-auto sm:py-4 md:justify-start md:space-x-10 lg:px-8 bg-gradient-to-r from-sky-900 to-sky-500">
                <div>
                  <a href="#" className="flex">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="w-auto h-8 sm:h-10"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                    />
                  </a>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                  <Popover.Group as="nav" className="flex space-x-10">
                    <a href="/" className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                      Home
                    </a>
                    <a href="/kecs/about" className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                      About Us
                    </a>

                    {/* For Registration */}
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group inline-flex items-center rounded-md text-base font-medium text-white hover:text-gray-900'
                            )}
                          >
                            <span className='flex items-center text-sm font-semibold leading-6 text-white gap-x-1'>Registrations</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-white' : 'text-white',
                                'ml-2 h-5 w-5 group-hover:text-white'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg top-full md:block">
                              <div className="grid px-4 py-6 mx-auto gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                {registration.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex md:h-full lg:flex-col">
                                      <div className="flex-shrink-0">
                                        <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-md bg-sky-500 sm:h-12 sm:w-12">
                                          <item.icon className="w-6 h-6" aria-hidden="true" />
                                        </span>
                                      </div>
                                      <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                        <div>
                                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-sky-600 lg:mt-4">
                                          Learn more
                                          <span aria-hidden="true"> &rarr;</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="bg-gray-50">
                                <div className="px-4 py-5 mx-auto space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                  {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                      >
                                        <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">{item.name}</span>
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    {/* User Guide */}
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                            User Guide
                        <ChevronDownIcon className="flex-none w-5 h-5 text-white" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                            <div className="p-4">
                            {user_guides.map((item) => (
                                <div
                                key={item.name}
                                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                >
                                <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                    <item.icon className="w-6 h-6 text-gray-600 group-hover:text-sky-600" aria-hidden="true" />
                                </div>
                                <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-gray-900">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                                </div>
                            ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                <item.icon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </Popover>
                    
                    <a href="#" className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                      Legal Resources 
                    </a>
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                            )}
                          >
                            <span className='flex items-center text-sm font-semibold leading-6 text-white gap-x-1'>Departments</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-white' : 'text-white',
                                'ml-2 h-5 w-5 group-hover:text-white'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                          >
                            <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-lg top-full md:block">
                              <div className="absolute inset-0 flex">
                                <div className="w-1/2 bg-white" />
                                <div className="w-1/2 bg-gray-50" />
                              </div>
                              <div className="relative grid grid-cols-1 mx-auto lg:grid-cols-2">
                                <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                  <div>
                                    <ul role="list" className="mt-5 space-y-6">
                                      {department1.map((item) => (
                                        <li key={item.name} className="flow-root">
                                          <a
                                            href={item.href}
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                          >
                                            <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                            <span className="ml-4">{item.name}</span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <ul role="list" className="mt-5 space-y-6">
                                      {department2.map((item) => (
                                        <li key={item.name} className="flow-root">
                                          <a
                                            href={item.href}
                                            className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                          >
                                            <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                            <span className="ml-4">{item.name}</span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </nav>
                                <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                  <div>
                                    <h3 className="text-base font-medium text-gray-500">From the blog</h3>
                                    <ul role="list" className="mt-6 space-y-6">
                                      {blogPosts.map((post) => (
                                        <li key={post.id} className="flow-root">
                                          <a href={post.href} className="flex p-3 -m-3 rounded-lg hover:bg-gray-100">
                                            <div className="flex-shrink-0 hidden sm:block">
                                              <img className="object-cover w-32 h-20 rounded-md" src={post.imageUrl} alt="" />
                                            </div>
                                            <div className="flex-1 w-0 sm:ml-8">
                                              <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                              <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-6 text-sm font-medium">
                                    <a href="#" className="text-sky-600 hover:text-sky-500">
                                      View all posts
                                      <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <a href="/kecs/news" className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                      News
                    </a>
                    <a href="/kecs/contact" className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
                      Contact Us
                    </a>
                  </Popover.Group>
                  <div className="flex items-center md:ml-12">
                    
                  </div>
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {registration.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-sky-500 sm:h-12 sm:w-12">
                              <item.icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                          View all products
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Pricing
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Docs
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Company
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Resources
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Blog
                    </a>
                    <a href="#" className="text-base font-medium text-gray-900 rounded-md hover:text-gray-700">
                      Contact Sales
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-600 hover:bg-sky-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-sky-600 hover:text-sky-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Container>
    </header>
  )
}
