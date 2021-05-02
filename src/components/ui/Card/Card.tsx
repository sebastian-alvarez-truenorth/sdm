import { FC } from 'react'
import { classNames } from 'utils'

interface Props {
  className?: string
  children?: any
  clean?: boolean
}

const Card: FC<Props> = ({ children, className, clean }) => {
  const rootClassName = classNames(className, {
    'bg-white shadow-md overflow-hidden sm:rounded-md': !clean,
  })

  return <div className={rootClassName}>{children}</div>
}

export default Card
