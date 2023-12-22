import { fetchMovieCast } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CastList from "./Cast.styled";
import { Notify } from "notiflix";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const searchParams = useParams();
    const { id } = searchParams;
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    async function getCast(id) {
        try {
            const resp = await fetchMovieCast(id);
            const result = resp.data.cast;
            if (result.length === 0) {
                setCast(null);
                Notify.failure("There is no information about cast");
                return;
            }
            setCast(resp.data.cast);
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCast(id);
    }, [id])

    return (
        cast && (
            <section>
                <CastList>
                    {cast.map(({ id, character, name, profile_path }) => (
                        <li key={id}>
                            <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg} alt={name} width={70} />
                            <p>{name}</p>
                            {character && (
                                <>
                                    <b>Character:</b>                    
                                    <p> {character}</p>
                                </>
                            )}
                            
                        </li>))}
                </CastList>
            </section>
        )
        
    )
}
export default Cast;