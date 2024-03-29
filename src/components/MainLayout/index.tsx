import Header from '../Header/index.tsx'
import Search from '../Search/index.tsx'
import './styles.scss'

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Header />
      {title && <h2 className='layout-title'>{title}</h2>}
      <div className='layout-inner-container'>
        <Search />
        {children}
      </div>
    </>
  )
}

export default MainLayout