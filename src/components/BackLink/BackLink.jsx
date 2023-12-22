// import { Link } from "react-router-dom";
import { Button, LinkStyled } from "./BackLink.styled";


const BackLink = ({to, children}) => {
    return (<Button>
        <LinkStyled to={to}>
            {children}
        </LinkStyled>
    </Button>)
};

export default BackLink;