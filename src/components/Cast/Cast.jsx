import { fetchMovieCast } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const searchParams = useParams();
    const { id } = searchParams;
    async function getCast(id) {
        try {
            const resp = await fetchMovieCast(id);
            // console.log(resp);
            setCast(resp.data.cast);
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCast(id);
    }, [id])
    // getCast(id);

    return (
        cast && (
            <ul>
            {cast.map(({ id, character, name, profile_path }) => (
                <li key={id}>
                    <img src={profile_path} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>

                </li>))}
        </ul>
        )
        
    )
}
export default Cast;