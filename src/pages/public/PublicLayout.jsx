import { Outlet } from 'react-router-dom'
import Header from '../../components/public/Header'

function Layout() {
  return (
    <div>
        <Header />
        <Outlet></Outlet>
    </div>
  )
}

export default Layout