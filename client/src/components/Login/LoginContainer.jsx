import { connect } from 'react-redux'

import { setEmailText, setPasswordText } from '../../store/login/actions'
import Login from './Login'

const LoginContainer = (props) => {
  return (
    <Login email={props.email} password={props.password}
      setEmailText={props.setEmailText} setPasswordText={props.setPasswordText}
    />
  )
}

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password
})
const mapDispatchToProps = { setEmailText, setPasswordText }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)