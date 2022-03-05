import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border: solid 1px #ccc;
    background-color: #fff;
    border-radius: 3px;
    border-collapse: collapse;

    & tr th {
        background-color: #ddd;
        color: #2d2d2d;
        text-align: center;
    }

    & tr td {
        border: 1px solid #ccc;
        color: #2d2d2d;
        text-align: center;
    }
`;

export default Table;