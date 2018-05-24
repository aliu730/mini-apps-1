class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      page: 0,
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
      cvv: "",
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
        onAccClick={this.onAccClicked.bind(this)}
      />,
      payForm: 
      <PayForm
        cc={this.cc.bind(this)}
        expDate={this.expDate.bind(this)}
        cvv={this.cvv.bind(this)}
        zipFieldBill={this.zipFieldBill.bind(this)}
        onAccClick={this.onAccClicked.bind(this)}
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
  generateData () {
    var data = {};
    data.name = this.state.name;
    data.email = this.state.email;
    data.password = this.state.password;
    data.line1 = this.state.line1;
    data.line2 = this.state.line2;
    data.city = this.state.city;
    data.state = this.state.state;
    data.zip = this.state.zip;
    data.cc = this.state.cc;
    data.expDate = this.state.expDate;
    data.cvv = this.state.cvv;
    data.zipBill = this.state.zipBill;
    return data;
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
  onAccClicked (e) { // goes to next form. (ships)
    e.preventDefault();
    if (this.state.page === 0) {
      this.setState({
        currentDisplay: this.state.shipForm,
      });
      this.state.page = 1;
    } else if (this.state.page === 1) {
      this.setState({
        currentDisplay: this.state.payForm,
      });
      this.state.page = 2;
    } else { // we post here
      var jsonData = this.state;
      var data = this.generateData();
      //console.log(data);
      $.ajax({
        url: "/post",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data) {
          console.log(data);
        },
        failure: function (error) {
          console.log(error);
        },
      });
      this.state.page = 0;
      this.setState({
        currentDisplay: this.state.accCreate,
      })
    }
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
  // Pay Form stuff
  cc (event) {
    this.setState({
      cc: event.target.value,
    });
  }
  expDate (event) {
    this.setState({
      expDate: event.target.value,
    });
  }
  cvv (event) {
    this.setState({
      cvv: event.target.value,
    })
  }
  zipFieldBill (event) {
    this.setState({
      zipBill: event.target.value,
    });
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
      <input onChange={props.passField} type="text" placeholder="required" /><br />
    </label>
      <input type="submit" value="Next" onClick={props.onAccClick}/> 
    </form>  
  )
};
var ShipForm = (props) => {
  return (
    <form className="shipForm">
    <div>Shipping Address</div>
    <label> Line1:
      <input onChange={props.line1Field} type="text" placeholder="required" required /><br />
    </label>
    <label> Line2:
      <input onChange={props.line2Field} type="text" placeholder="required" required /><br />
    </label>
    <label> City:
      <input onChange={props.cityField} type="text" placeholder="required" required /><br />
    </label>  
    <label> State:
      <input onChange={props.stateField} type="text" placeholder="required" required /><br />
    </label>
    <label> Zip:
      <input onChange={props.zipField} type="text" placeholder="required" required /><br />
    </label>
      <input type="submit" value="Next" onClick={props.onAccClick} />
    </form>
  )
};

var PayForm = (props) => {
  return (
    <form className="payForm">
      <div>Payment Method</div>
      <label> Credit Card #:
        <input onChange={props.cc} type="text" placeholder="required" required /><br />
      </label>
      <label> Expiration Date:
        <input onChange={props.expDate} type="text" placeholder="required" required /><br />
      </label>
      <label> CVV:
        <input onChange={props.cvv} type="text" placeholder="required" required /><br />
      </label>
      <label> Billing Zip:
        <input onChange={props.zipFieldBill} type="text" placeholder="required" required /><br />
      </label>
      <input type="submit" value="Finalize No Refunds" onClick={props.onAccClick} />
    </form>  
  )
};

























ReactDOM.render(<App />, document.getElementById('app'));