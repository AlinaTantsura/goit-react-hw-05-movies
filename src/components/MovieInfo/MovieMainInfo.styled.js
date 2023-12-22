import styled from "styled-components";

const MovieMainInfo = styled.div(() => {
    return ({
        padding: '15px',
        display: 'flex',
        gap: '15px',
        ul: {
            display: 'flex',
            gap: '10px',
            listStyle: 'none',
            padding: 0,
        },
        img: {
                width: '250px',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '6px',
            },
   }) 
});

export default MovieMainInfo;