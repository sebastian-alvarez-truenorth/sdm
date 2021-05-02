import { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Container, Logo } from 'components/ui'
import PublicNav from './PublicNav'
import PrivateNav from './PrivateNav'
import SharedNav from './SharedNav'

const Navbar: FC = () => {
  const session = false;
  const loading = false;

  if (loading) return null;

  return (
 <>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>

      <Disclosure as="nav" className="bg-white dark:bg-gray-900 ring-1 ring-gray-900 ring-opacity-5 shadow-sm z-40">
        {({ open }) => (
          <>
            <Container>
              <div className={`flex justify-between h-16 nojs-show ${!session && loading ? 'loading' : 'loaded'}`}>
                <div className="flex-shrink-0 flex flex-grow items-center">
                  <Logo />
                </div>

                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 items-center">
                  <SharedNav />
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <PublicNav />
                  <PrivateNav />
                </div>

                {/* Mobile menu button */}
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </Container>

            {/* Mobile menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <SharedNav />
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <PublicNav />
                <PrivateNav />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Navbar;
