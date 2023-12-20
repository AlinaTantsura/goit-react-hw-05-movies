import { fetchMovieReviews } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const searchParams = useParams();
    const { id } = searchParams;
    async function getMovieReviews(id) {
        try {
            const resp = await fetchMovieReviews(id);
            setReviews(resp.data.results);

        }
        catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getMovieReviews(id)
    }, [id])
    
    return (
       !reviews ? (<p>We don't have any reviews for this movie</p>)
        : (<ul>
             {reviews.map(({ id, author, content }) => (<li key={id}>
                <h3>Author: {author}</h3>
                 <p>{content}</p>
             </li>))}
        </ul>)  
    )
};

export default Reviews;