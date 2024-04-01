import Header from '../Header/index.tsx'
import './styles.scss'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='layout-container'>
      <Header />
      <div className='layout-inner-container'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout