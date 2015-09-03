
import Parse from '../parse';
import User from '../user';

class Register extends React.Component {
  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.username).value,
      email: React.findDOMNode(this.refs.email).value,
      password: React.findDOMNode(this.refs.password).value
    }
    if (!(data.username && data.email && data.password)) {
      alert('Please complete registration form')
      return;
    }
    render () {

    }
  }
}

export default Register;
