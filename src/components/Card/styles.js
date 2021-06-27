import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardDiv = styled.div`
    height: auto;
    width: 50vw;
    background: #e0e0e9;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 100px;
`;

export const Title = styled.h1`
    color: #123e67;
    font-size: 3em;
`