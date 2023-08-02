import { ButtonContainer } from './styles'
const Button = ({label, onClick}) => {
  return (
    <div>
      <ButtonContainer onClick={onClick} type='button'>
        {label}
      </ButtonContainer>
    </div>
  )
}
export default Button
