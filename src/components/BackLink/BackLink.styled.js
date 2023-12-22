import { Link } from "react-router-dom";
import styled from "styled-components";


export const Button = styled.button(() => {
    return ({
        marginLeft: '15px',
        marginBottom: '10px',
        padding: '5px',

        border: 'solid 1px lightgrey',
        borderRadius: '4px',
        svg: {
            fill: 'black',
            stroke: 'black',
        },

        '&:hover, &:focus': {
            borderColor: 'grey',
            backgroundColor: 'grey',
            a: {
                color: 'white'
            },
            svg: {
                fill: 'white',
                stroke: 'white',
            }
        }
    })
});

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    gap: 4px;

    // button:hover, button:focus &{
    //     color: white;
    // }
`