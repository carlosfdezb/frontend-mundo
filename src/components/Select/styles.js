import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h2`
    margin: 10px;
    color: #123e67;
`;

export const Selector = styled.select`
    border-radius: 20px;
    border: none;
    font-size: 14px;
    height: auto;
    padding: 20px;
    width: 100%;
    outline: none;
    margin-bottom: 10px;
    appearance: none; 
    background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png') no-repeat white right;
    background-position-x: calc(100% - 25px);
    
    option {
        font-size: 15px;
    }
    
`;