import { FC, useState } from 'react'
// import SignInModal from 'components/auth/SignInModal'

const PublicNav: FC = () => {
  const session = false;
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <>
      {!session && (
        <div className="space-x-4">
          <a
            href={`/api/auth/signin`}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Sign in
          </a>
          <button
            type="button"
            onClick={() => setShowSignInModal(true)}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-bold rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Sign In Modal
          </button>
        </div>
      )}
      {/* {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} onSubmit={() => Promise.resolve()} />} */}
    </>
  )
}

export default PublicNav
