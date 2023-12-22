import styled from "styled-components";

const Form = styled.form(() => {
    return ({
        paddingTop: "5px",
        paddingLeft: "20px",
        input: {
            outline: 'none',
            border: 'solid 1px lightgrey',
            borderRadius: '5px',
            padding: '4px 8px',
            marginRight: '15px',
        },
        'input:focus': {
            border: 'solid 2px grey',
        },
        button: {
            padding: '4px 8px',
            border: 'solid 1px lightgrey',
            borderRadius: '5px',
        },
        'button:hover, button:focus': {
            borderColor: 'grey',
            backgroundColor: 'grey',
            color: 'white',
        }
    })
});

export default Form;