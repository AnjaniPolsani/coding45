// Write your code here
import {ListItem, Button1} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClicking, isActive} = props
  const {value, displayText} = details
  const onClickEle = () => {
    onClicking(value)
  }
  return (
    <ListItem>
      <Button1 isActive={isActive} onClick={onClickEle} type="button">
        {displayText}
      </Button1>
    </ListItem>
  )
}
export default GradientDirectionItem
