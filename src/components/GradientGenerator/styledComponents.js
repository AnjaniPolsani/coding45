// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-image: linear-gradient(${props => props.gradientValue});
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
`
export const Heading = styled.h1`
  font-size: 20px;
  color: #ffffff;
`

export const Heading1 = styled.p`
  font-size: 12px;
  color: #ffffff;
`

export const Para = styled.p`
  font-size: 10px;
  color: #ffffff;
`

export const ColorMainCont = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ColorCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputEle = styled.input`
  width: 100px;
`

export const ColorPara = styled.p`
  font-size: 12px;
  color: #ffffff;
`
export const Button = styled.button`
  width: 100px;
`
export const UnorderedListItem = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 400px;
`
