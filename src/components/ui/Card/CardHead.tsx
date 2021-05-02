import React, { FC } from 'react'

import IProps from 'interfaces/iprops'

interface Props extends IProps {
  title: string,
  action: any,
  actionTitle?: string,
  actions? : any []
};

const CardHead: FC<Props> = ({ title, action, actionTitle = '', actions }) => {
  return (
    <div className="px-4 py-5 sm:px-6 flex w-full justify-between items-start">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Feature description.</p>
      </div>
      <div>
        {typeof action === 'function' ? (
          <button onClick={action} data-test-id="widget_header_action">
            {actionTitle}
          </button>
        ) : null}
        {actions}
      </div>
    </div>
  )
}

export default CardHead
