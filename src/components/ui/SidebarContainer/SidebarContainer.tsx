import { FC } from 'react'
import { Sidebar } from 'components/common'
import { Container } from 'components/ui'

interface Props {
  children?: any
}

const SidebarContainer: FC<Props> = ({ children }) => {
  return (
    <Container className="pb-10 lg:py-12 relative">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 w-full">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <Sidebar />
        </aside>

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 flex-1">{children}</div>
      </div>
    </Container>
  )
}

export default SidebarContainer
