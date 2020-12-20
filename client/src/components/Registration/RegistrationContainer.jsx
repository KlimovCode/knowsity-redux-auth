import { connect } from 'react-redux'

import { setEmailText, setPasswordText, setRepeatPasswordText } from '../../store/registration/actions'
import Registration from './Registration'

const RegistrationContainer = (props) => {
  return (
    <Registration email={props.email} password={props.password}
      setEmailText={props.setEmailText} setPasswordText={props.setPasswordText}
    />
  )
}

const mapStateToProps = state => ({
  email: state.registration.email,
  password: state.registration.password,
  repeatPassword: state.registration.repeatPassword
})
const mapDispatchToProps = { setEmailText, setPasswordText, setRepeatPasswordText }

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)