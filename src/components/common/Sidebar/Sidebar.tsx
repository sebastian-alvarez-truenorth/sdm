import { FC } from 'react'
import Link from 'components/common/Link'
import { classNames } from 'utils'
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  CollectionIcon,
} from '@heroicons/react/outline'

// <SidebarLink text="Overview" icon={<DashboardIcon color="mode.color" />} href="/examples/dashboard" />
// <SidebarLink text="Activity" icon={<ActivityIcon color="mode.color" />} href="/examples/activity" />
// <SidebarLink text="Payments" icon={<InOutIcon color="mode.color" />} href="/examples/payments" />
// <SidebarLink text="Fund Clearbank" icon={<MoneyIcon color="mode.color" />} href="/examples/fund-clearbank" />
// <SidebarLink text="Account Info" icon={<InfoIcon color="mode.color" />} href="/examples/account-info" />
// <SidebarLink text="Cards" icon={<CardIcon color="mode.color" />} href="/examples/cards" />
// <SidebarLink text="Statements" icon={<TextFileIcon color="mode.color" />} href="/examples/statements" />
// <SidebarLink text="Integrations" icon={<PuzzleIcon color="mode.color" />} href="/examples/integrations" />
const navItems = [
  { name: 'Overview', href: '/dashboard', icon: CollectionIcon, current: false },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon, current: false },
  { name: 'Account', href: '/account', icon: CogIcon, current: false },
  { name: 'Password', href: '/password', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '/notifications', icon: BellIcon, current: false },
  { name: 'Plan & Billing', href: '/pricing', icon: CreditCardIcon, current: true },
  { name: 'Integrations', href: '/integrations', icon: ViewGridAddIcon, current: false },
]

const Sidebar: FC = () => {
  return (
    <nav className="sticky top-8 px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              className={classNames(
                item.current
                  ? 'bg-gray-50 text-primary-600 hover:bg-white'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
