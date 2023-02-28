import styled from 'styled-components'
import{fadeIn}from '../../styles/animation'


export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper=styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 110%; 
  margin-left: -40px;
`
export const Img=styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  margin: auto;
  width: 110%;
`
export const Button=styled.button`
  display: flex;
  position: relative;
  left: -40px;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  & svg {
    margin-right: 4px;
  }
`