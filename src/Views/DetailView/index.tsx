import MainLayout from '../../components/MainLayout'
import CharacterResume from '../../components/CharacterResumeDetail'
import CardsList from '../../components/CardsList'
import './styles.scss'


const DetailView = () => {
    return (
        <div className='detail-view'>
            <MainLayout>
                <CharacterResume />
                <div className='detail-inner-container'>
                    <h2 className='layout-title'>Comics</h2>
                    {/* <CardsList data={ } /> */}

                </div>

            </MainLayout>

        </div>
    )
}

export default DetailView