import { useParams } from 'react-router-dom';
import MainLayout from '../../components/MainLayout'
import { useFetchOneCharacter } from '../../hooks/useFetchOneCharacter';
import CharacterResume from '../../components/CharacterResumeDetail'
import { useFetchCharacterComics } from '../../hooks/useFetchCharacterComics';
import CardsList from '../../components/CardsList';
import ComicCard from '../../components/ComicCard';

import './styles.scss'


const DetailView = () => {
    const { id } = useParams();
    const { isLoading, character } = useFetchOneCharacter(id)
    const { isLoadingComics, comics } = useFetchCharacterComics(id)




    return (
        <div className='detail-view'>
            <MainLayout>
                {isLoading ? "loding..."
                    :
                    <CharacterResume name={character.name} description={character.description} imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                }

                <div className='detail-inner-container'>
                    <h2 className='layout-title'>Comics</h2>
                    {isLoadingComics ? "loading..."
                        : <CardsList data={comics} ChildComponent={ComicCard} useCustomStyles={true} />
                    }


                </div>
            </MainLayout>

        </div>
    )
}

export default DetailView