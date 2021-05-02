import { FC } from 'react'

import { classNames } from 'utils'
import IProps from 'interfaces/iprops';

interface Props extends IProps {
  className?: string
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<Props> = ({ children, className, el = 'div', clean }) => {
  const rootClassName = classNames(clean ? '' : 'max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative', className)

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
