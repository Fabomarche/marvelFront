
import './syles.scss'

const ComicCard = ({ id, img, title }) => {


    return (
        <div className='comic-card-container' key={id}>
            <img src={img} />
            <h3>Whois ..?? lalalal long infinity cominc #1</h3>
            <span>1967</span>


        </div>
    )
}

export default ComicCard