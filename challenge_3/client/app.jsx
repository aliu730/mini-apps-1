class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      name: "",
      email: "",
      password: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      cc: "",
      expDate: "",
      zip: "",
      zipBill: "",
    }
  }
  userNameField (event) {
    // console.log(event);
    this.setState({
      name: event.target.value,
    });
  }
  emailField (event) {
    this.setState({
      email: event.target.value,
    });    
  }
  passField (event) {
    this.setState({
      pass: event.target.value,
    });
  }
  render () {
    return (
      <div>
        <FormAcc 
          nameRead={this.userNameField.bind(this)}
          emailRead={this.emailField.bind(this)}
        />
      </div>  
    )
  }
};

var FormAcc = (props) => {
  return (
    <form className="acccreate">
    <label>
      Name:
      <input onChange={props.nameRead} type="text" placeholder="required" required/><br />
    </label>
    <label>
      Email:
      <input onChange={props.emailRead} type="text" placeholder="required" required/><br />
    </label>
    <label>
      Password: 
      <input onChange={props.passField} type="text" placeholder="required" required/><br />
    </label>
      <input type="submit" value="Checkout" /> 
    </form>  
  )
};
ReactDOM.render(<App />, document.getElementById('app'));