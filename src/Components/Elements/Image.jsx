import styled from "styled-components";

const Image = styled.img`
    width: ${ (props) => (props.isThumb) ? '30%' : '100%' };
    
    & img {
        object-fit: cover;
        width: 100%;
    }

    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

export default Image;