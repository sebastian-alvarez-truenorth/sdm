import { FC } from 'react'

import AccessDenied from 'components/auth/AccessDenied';
import Layout from './Layout';
import IProps from 'interfaces/iprops';

const PrivateLayout: FC<IProps> = ({ children }) => {
  //const [session, loading] = useSession()
  const session = false;
  const loading = false;

  // When rendering client side don't display anything until loading is complete
  if (loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        { children }
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return <Layout>{children}</Layout>
}

export default PrivateLayout
