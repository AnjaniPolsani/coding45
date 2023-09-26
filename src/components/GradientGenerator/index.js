import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Heading,
  Para,
  Heading1,
  InputEle,
  Button,
  ColorPara,
  MainContainer,
  ColorCont,
  ColorMainCont,
  UnorderedListItem,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onChangeDirectionId = value => {
    this.setState({activeDirectionId: value})
  }

  onClickGenerate = () => {
    const {activeDirectionId, color1, color2} = this.state
    this.setState({
      gradientValue: `to ${activeDirectionId},${color1},${color2}`,
    })
  }

  render() {
    const {color1, color2, activeDirectionId, gradientValue} = this.state
    console.log(gradientValue)
    return (
      <MainContainer  gradientValue={gradientValue} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnorderedListItem>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              details={each}
              key={each.directionId}
              onClicking={this.onChangeDirectionId}
              isActive={activeDirectionId === each.value}
            />
          ))}
        </UnorderedListItem>
        <Heading1>Pick the Colors</Heading1>
        <ColorMainCont>
          <ColorCont>
            <ColorPara>{color1}</ColorPara>
            <InputEle
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </ColorCont>

          <ColorCont>
            <ColorPara>{color2}</ColorPara>
            <InputEle
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </ColorCont>
        </ColorMainCont>
        <Button type="button" onClick={this.onClickGenerate}>
          Generate
        </Button>
      </MainContainer>
    )
  }
}
export default GradientGenerator
