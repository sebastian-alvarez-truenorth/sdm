import { FC } from 'react'

const Navbar: FC = () => {
  const session = false;
  const loading = false;

  if (loading) return null;

  return (
    <div>
      NavBar
    </div>
  )
}

export default Navbar;
