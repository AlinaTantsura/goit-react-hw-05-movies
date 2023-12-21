import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li(() => {
    return ({
        marginBottom: '8px',
        '&:last-child': {
            marginBottom: 0,
        }
    })
});

export const LinkStyled = styled(Link)`
    text-decoration: none;
    
    &:hover{
        color: white;
        background-color: gray;
    }
`