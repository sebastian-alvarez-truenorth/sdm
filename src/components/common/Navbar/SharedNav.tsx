import { FC } from 'react'
import Link from 'components/common/Link'
import { classNames } from 'utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: window.location.href.match('dashboard') },
  { name: 'Sidebar Page', href: '/examples/page', current: window.location.href.match('examples/page') },
  { name: 'Dynamic List', href: '/examples/list', current: window.location.href.match('examples/list') },
  { name: 'Testing Form', href: '/examples/form', current: window.location.href.match('examples/form') },
]

const SharedNav: FC = () => {
  return (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames(
              item.current
                ? 'border-primary-500 text-gray-900 dark:text-gray-100'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:hover:text-gray-500',
              'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </>
  )
}

export default SharedNav

/**
 * Mobile version
 */
// {navigation.map((item) => (
//   <a
//     key={item.name}
//     href={item.href}
//     className={classNames(
//       item.current
//         ? 'bg-primary-50 border-primary-500 text-primary-700'
//         : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
//       'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
//     )}
//     aria-current={item.current ? 'page' : undefined}
//   >
//     {item.name}
//   </a>
// ))}
