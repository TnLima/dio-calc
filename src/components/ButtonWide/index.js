import { ButtonWide } from './styles'
const Button = ({label, onClick}) => {
  return (
    <div>
      <ButtonWide onClick={onClick} type='button'>
        {label}
      </ButtonWide>
    </div>
  )
}
export default Button
