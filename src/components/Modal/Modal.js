import React from 'react';
import styled from 'styled-components';

const ModalBgWrapper = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,.8);
`
const ModalContainer = styled.div`
    background-color: white;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 10px 50px;
    width: 60vh;
    height: 80vh;
`

const ScrollBox = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`

const ButtonClose = styled.button`
    position: absolute;
    right: 15px;
    top: 10px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    background: transparent;
    border:0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        top:0;
        left: 10px;
    content: ' ';
        height: 23px;
        width: 2px;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

const ImgWrapper = styled.div`
    width: 100%;
    height: 60%;
    background-image: url(${props => props.background});
    background-size: cover;
`
const Title = styled.h2`
    font-size: 2.2rem;
    color: black;
`
const Description = styled.p`
    font-size: 1.6rem;
    color: black;
`

const Modal = props => (
    <ModalBgWrapper>
        <ModalContainer>
            <ButtonClose onClick={ props.onClickHandler }/>
            <ScrollBox>
                <ImgWrapper background={ props.imageProduct } />
                <Title>{ props.title }</Title>
                <Description>{ props.description }</Description>
            </ScrollBox>
        </ModalContainer>
    </ModalBgWrapper>
);

export default Modal;