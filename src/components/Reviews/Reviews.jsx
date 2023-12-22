import { fetchMovieReviews } from "API";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsList from "./Reviews.styled";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const searchParams = useParams();
    const { id } = searchParams;
    async function getMovieReviews(id) {
        try {
            const resp = await fetchMovieReviews(id);
            const result = resp.data.results;
            if (result.length === 0) {
                setReviews(null);
                Notify.failure("There is no information about reviews(");
                return;
            }
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
        reviews && (
            <section>
                <ReviewsList>
                    {reviews.map(({ id, author, content }) => (<li key={id}>
                        <h3>Author: <span>{author}</span></h3>
                        <p>{content}</p>
                    </li>))}
                </ReviewsList>  
            </section>)
    )
};

export default Reviews;