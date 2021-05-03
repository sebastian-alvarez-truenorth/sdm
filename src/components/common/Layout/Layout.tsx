import { FC } from 'react'

import IProps from 'interfaces/iprops'
import { Navbar, Footer } from 'components/common'

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      <Navbar />
      <main className="md:flex flex-row w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
