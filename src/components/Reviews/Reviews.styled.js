import styled from "styled-components";
const ReviewsList = styled.ul(() => {
    return ({
        listStyle: 'none',
        marginBottom: 0,
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '15px',
        li: {
            borderBottom: 'dashed 1px grey',
            span: {
                fontWeight: '500',
                color: 'grey',
            }
        },
        'li:last-child': {
             borderBottom: 'none',
        }
    })
});

export default ReviewsList;