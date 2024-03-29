import Header from '../Header/index.tsx'
import Search from '../Search/index.tsx'
import './styles.scss'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='layout-inner-container'>
        <Search />
        {children}
      </div>
    </>
  )
}

export default MainLayout