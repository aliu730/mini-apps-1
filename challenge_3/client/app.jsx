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
      accCreate: 
      <FormAcc 
        nameRead={this.userNameField.bind(this)}
        emailRead={this.emailField.bind(this)}
        passField={this.passField.bind(this)}
        onAccClick={this.onAccClicked.bind(this)}
      />,
      shipForm: 
      <ShipForm 
        line1Field={this.line1Field.bind(this)}
        line2Field={this.line2Field.bind(this)}
        cityField={this.cityField.bind(this)}
        stateField={this.stateField.bind(this)}
        zipField={this.zipField.bind(this)}
      />,
      currentDisplay: <FormAcc 
        nameRead={this.userNameField.bind(this)}
        emailRead={this.emailField.bind(this)}
        passField={this.passField.bind(this)}
        onAccClick={this.onAccClicked.bind(this)}
      />,
    }
  }
  //ACC CREATE:
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
  onAccClicked (e) { // goes to next form. (ships)
    e.preventDefault();
    console.log("clicked")
    this.setState({
      currentDisplay: this.state.shipForm,
    });

  }
  // SHIP STUFF
  line1Field (event) {
    this.setState({
      line1: event.target.value,
    });
  }
  line2Field (event) {
    this.setState({
      line2: event.target.value,   
    });
  }
  cityField (event) {
    this.setState({
      city: event.target.value,
    });
  }
  stateField (event) {
    this.setState({
      state: event.target.value,
    });
  }
  zipField (event) {
    this.setState({
      zip: event.target.value,
    });
  }
  render () {
    return (
      <div>
        {this.state.currentDisplay}
      </div>  
    )
  }
};

var FormAcc = (props) => {
  return (
    <form className="acccreate">
    <div className="accHead"> ACCOUNT CREATE MUST FILL </div>
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
      <button onClick={props.onAccClick}>Checkout</button> 
    </form>  
  )
};
var ShipForm = (props) => {
  return (
    <form className="shipForm">
    <div>Shipping Address</div>
    <label> Line1:
      <input type="text" placeholder="required" required /><br />
    </label>
    <label> Line2:
      <input type="text" placeholder="required" required /><br />
    </label>
    <label> City:
      <input type="text" placeholder="required" required /><br />
    </label>  
    <label> State:
      <input type="text" placeholder="required" required /><br />
    </label>
    <label> Zip:
      <input type="text" placeholder="required" required /><br />
    </label>
      <input type="submit" value="Next" />
    </form>
  )
};

var PayForm = (props) => {
  return (
    <form className="payForm">
      <div>Payment Method</div>
      <label> Credit Card #:
        <input type="text" placeholder="required" required /><br />
      </label>
      <label> Expiration Date:
        <input type="text" placeholder="required" required /><br />
      </label>
      <label> CVV:
        <input type="text" placeholder="required" required /><br />
      </label>
      <label> Billing Zip:
        <input type="text" placeholder="required" required /><br />
      </label>
    </form>  
  )
};


























ReactDOM.render(<App />, document.getElementById('app'));