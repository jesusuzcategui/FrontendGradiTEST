import styled from "styled-components";

const Text = styled.div`
    font-size: ${(props) => (props.size == 1) ? '4rem' : (props.size == 2) ? '3rem' : (props.size == 3) ? '2rem' : (props.size == 4) ? '1rem' : '.8rem' };
    color: ${(props) => (props.color == 'black') ? '#000' : (props.color == 'grey') ? '#cdcdcd' : '#e42020'};
    text-align: ${(props) => (!props.align) ? 'left' : props.align};
`;

export default Text;