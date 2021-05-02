import { Fragment, FC } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { classNames } from 'utils'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  {
    name: 'Settings',
    href: '#',
  },
  {
    name: 'Sign out',
    href: '/api/auth/signout',
    cb: () => {
    },
  },
]

const PrivateNav: FC = () => {
  const session = false

  return (
    <>
      {session && (
        <div className="border-l dark:border-gray-600 pl-4 space-x-4 sm:flex sm:items-center">
          {/* Profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-500 flex text-sm rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">Open user menu</span>
                    Account
                    <ChevronDownIcon className="text-grray-400 w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                    {/* {session.user.image && <img className="h-8 w-8 rounded-full" src={session.user.image} alt="" />} */}
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Menu.Item disabled>
                      <div className="px-4 pt-2 pb-3 border-b cursor-default focus:outline-none">
                        <div className="text-xs text-gray-500">Signed in as</div>
                        <div className="text-sm font-medium">mocked.email@user.com</div>
                      </div>
                    </Menu.Item>
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            onClick={() => { }}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>

          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  )
}

export default PrivateNav

/**
 * Mobile version
 */
//  <div className="flex items-center px-4">
//  <div className="flex-shrink-0">
//    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//  </div>
//  <div className="ml-3">
//    <div className="text-base font-medium text-gray-800">{user.name}</div>
//    <div className="text-sm font-medium text-gray-500">{user.email}</div>
//  </div>
//  <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
//    <span className="sr-only">View notifications</span>
//    <BellIcon className="h-6 w-6" aria-hidden="true" />
//  </button>
// </div>
// <div className="mt-3 space-y-1">
//  {userNavigation.map((item) => (
//    <a
//      key={item.name}
//      href={item.href}
//      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
//    >
//      {item.name}
//    </a>
//  ))}
// </div>
