import styled from "styled-components";

const MovieAddInfo = styled.div(() => {
    return ({
        // borderTop: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;',
        padding: '15px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        h4: {
            margin: 0,
            padding: 0,
        },
        ul: {
            marginBottom: 0,
        }
    })
});

export default MovieAddInfo;