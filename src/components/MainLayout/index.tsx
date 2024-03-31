import Header from '../Header/index.tsx'
import './styles.scss'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='layout-inner-container'>
        {children}
      </div>
    </>
  )
}

export default MainLayout