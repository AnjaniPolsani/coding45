// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  border-radius: 2px;
  list-style-type: none;
`

export const Button1 = styled.button`
  text-align: center;
  width: 80px;
  background-color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: #ffffff;
  height: 40px;
`