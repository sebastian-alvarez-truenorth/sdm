import { useState } from 'react'
import Link from 'components/common/Link'
import { Layout } from 'components/common'

export default function Page() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <>
      <div className="flex w-full h-full flex-grow max-w-7xl mx-auto">
        {/* 😼 I recived an invitation code, now? */}
        <section className="md:w-1/2 dark:bg-gray-800 flex flex-col">
          <div className="p-4 sm:p-6 md:px-16 md:py-32">
            <div className="max-w-sm mx-auto">
              <h2 className="text-3xl font-extrabold">Already a customer?</h2>
              <p className="my-4">
                If you recieved an invitation code via email, your account has already been created.
              </p>
              <Link href="/examples/open-account">
                {/* PoC: This component is used in two different /apps [dashboard, portal] */}
                <button onClick={() => setShowSignInModal(true)} value="Open Account" />
              </Link>
            </div>
          </div>
        </section>

        {/* 👵 I'm older than you boy... I alrady have an account here. */}
        <section className="md:w-1/2 bg-gray-200 dark:bg-gray-700 flex flex-col">
          <div className="p-4 sm:p-6 md:px-16 md:py-32">
            <div className="max-w-sm mx-auto">
              <h2 className="text-center text-3xl font-extrabold">Apply for your Account</h2>
              {/* <SignIn /> */}
            </div>
          </div>
        </section>
      </div>

      {/* {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} onSubmit={() => Promise.resolve()} />} */}
    </>
  )
}

Page.Layout = Layout
