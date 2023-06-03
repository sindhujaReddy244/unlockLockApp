// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Img = styled.img`
  width: 96px;
`
export const Heading = styled.p`
  color: #e2e8f0;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`
export const Button = styled.button`
  background-color: #06b6d4;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
