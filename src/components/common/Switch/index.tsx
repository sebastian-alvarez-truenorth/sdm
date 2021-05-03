import { Switch } from '@headlessui/react'
import { classNames } from 'utils'
import { IProps } from 'interfaces'

interface ISwitchProps extends IProps {
  enabled: boolean,
  onChange: any,
  title: string,
  titleDetail: string
}

const SwitchButton = ({ enabled, onChange, title, titleDetail }: ISwitchProps) => (
  <Switch.Group as="div" className="flex items-center">
    <Switch
      checked={enabled}
      onChange={onChange}
      className={classNames(
        enabled ? 'bg-primary-500' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
    <Switch.Label as="span" className="ml-3">
      <span className="text-sm font-medium text-gray-900">{ title }</span>
       <span className="text-sm text-gray-500">{ titleDetail }</span>
      </Switch.Label>
    </Switch.Group>)

export default SwitchButton;