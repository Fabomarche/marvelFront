import { parseComicTitle } from '../../helpers/parseComicTitle'
import { CardProps } from '../../infrastructure/CardProps'
import './syles.scss'


const ComicCard: React.FC<CardProps> = ({ id, imgSrc, title }) => {
    console.log(id, imgSrc, title)
    const { comicName, comicYear } = parseComicTitle(title)

    return (
        <div className='comic-card-container' key={id}>
            <img src={imgSrc} />
            <div className='comic-card-inner-container'>
                <h3>{comicName}</h3>
                <span>{comicYear}</span>
            </div>


        </div>
    )
}

export default ComicCard