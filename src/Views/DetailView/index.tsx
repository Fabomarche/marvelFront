import { useParams } from 'react-router-dom';
import { useFetchOneCharacter } from '../../hooks/useFetchOneCharacter';
import MainLayout from '../../components/MainLayout'
import CharacterResume from '../../components/CharacterResumeDetail'
import CardsList from '../../components/CardsList';
import ComicCard from '../../components/ComicCard';

import './styles.scss'

const DetailView = () => {
    const { id } = useParams();
    const { isLoading, character, characterComics } = useFetchOneCharacter(id)

    console.log(characterComics)
    return (
        <div className='detail-view'>
            <MainLayout>
                {isLoading ? "loding..."
                    : <>
                        <CharacterResume name={character.name} description={character.description} imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                        <div className='detail-inner-container'>
                            <h2 className='layout-title'>Comics {id}</h2>
                            <CardsList data={characterComics} ChildComponent={ComicCard} />

                        </div>

                    </>
                }

            </MainLayout>

        </div>
    )
}

export default DetailView