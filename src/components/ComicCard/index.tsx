
import './syles.scss'

const ComicCard = ({ key, img, title, year }) => {
    return (
        <div className='comic-card-container' key={key}>
            <img src={img} />
            <h3>Whois ..?? lalalal long infinity cominc #1</h3>
            <span>1967</span>


        </div>
    )
}

export default ComicCard