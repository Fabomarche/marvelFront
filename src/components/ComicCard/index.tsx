import { parseComicTitle } from '../../helpers/parseComicTitle'
import { CardProps } from '../../infrastructure/CardProps'
import './syles.scss'


const ComicCard: React.FC<CardProps> = ({ id, imgSrc, title }) => {
    console.log(id, imgSrc, title)
    const { comicName, comicYear } = parseComicTitle(title)

    return (
        <div className='comic-card-container' key={id}>
            <img src={imgSrc} />
            <h3>{comicName}</h3>
            <span>{comicYear}</span>


        </div>
    )
}

export default ComicCard