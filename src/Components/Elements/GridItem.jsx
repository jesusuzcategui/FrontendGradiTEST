import styled from "styled-components";

const GridItem = styled.div`
    width: ${(props) => (props) ? props.width : null};
`;

export default GridItem;