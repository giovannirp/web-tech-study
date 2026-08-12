import "./Card.css"

// Import da imagem
import imgCard from "../assets/img-card.jpg"

const Card = () => {
    return (
        <section>
            <article className="card">
                <img src={imgCard} className="img-card" />
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque delectus, maxime et voluptatem quae aut qui nisi placeat deleniti sapiente adipisci sunt deserunt id. Voluptatibus asperiores commodi explicabo placeat!</p>
            </article>
            <hr />
        </section>
    )
}

export default Card;