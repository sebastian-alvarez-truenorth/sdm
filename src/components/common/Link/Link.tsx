import { FC } from 'react';
import IProps from 'interfaces/iprops'

interface Props extends IProps {
  href: string
};

const Link: FC<Props> = ({ href, children }) => <a href={href}>{ children }</a>

export default Link;
