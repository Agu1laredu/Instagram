import styled from 'styled-components'

export const List = styled.ul`
display: flex;
overflow: scroll;
width: 110%;
margin-left: -25px;
margin-bottom: 20px;
&::-webkit-scrollbar {
    display: none;
`;

export const Item = styled.li`
padding: 0 8px;
`;