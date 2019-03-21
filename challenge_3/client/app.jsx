class Checkout extends React.Component {

    constructor() {
        super();
        this.state = {
            'start': true,
            'form1': false,
            'form2': false,
            'form3': false,
            'purchase': false,
            'name': '',
            'email': '',
            'password': '',
            'address': '',
            'address2': '',
            'city': '',
            'state': '',
            'zip': '',
            'phone': '',
            'creditcard': '',
            'expiration':'',
            'cvv': '',
            'billingZip': '',
            'summary': ''
        };
    }

    render() {
        let layout;
        if (this.state.start) 
            layout = (<div> 
                        <button className="checkout" type="submit" onClick={this.startCheckout.bind(this)}> Checkout </button>
                    </div>);
        else if (this.state.form1)
            layout = <Form1 click={this.handleAccountSubmit.bind(this)} change={this.handleChange.bind(this)}/>;
        else if (this.state.form2)
            layout = <Form2 click={this.handleAddressSubmit.bind(this)} change={this.handleChange.bind(this)}/>;
        else if (this.state.form3)
            layout = <Form3 click={this.handlePaymentSubmit.bind(this)} change={this.handleChange.bind(this)}/>;
        else if (this.state.purchase)
            layout = (<div> 
                        <button className="checkout" type="submit" onClick={this.home.bind(this)}> Purchase </button>
                        {this.state.summary}
                    </div>)    
        return layout;    
    };

    home() {
        this.setState({
            'start': true,
            'form1': false,
            'form2': false,
            'form3': false,
            'purchase': false
        });
    }

    startCheckout() {
        this.setState({
            'start': false,
            'form1': true,
            'form2': false,
            'form3': false,
        });
        fetch('/start', {
            'method': 'POST',
        });
    };

    handleChange(value, event){
        let obj = {};
        obj[value] = event.target.value;
        this.setState(obj);
    };

    handleAccountSubmit(event) {
        this.setState({
            'start': false,
            'form1': false,
            'form2': true,
            'form3': false,
        });
        fetch('/form1', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                'name': this.state.name,
                'email': this.state.email,
                'password': this.state.password
            })
        });
    };

    handleAddressSubmit() {
        this.setState({
            'start': false,
            'form1': false,
            'form2': false,
            'form3': true,
        });
        fetch('/form2', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                'address': this.state.address,
                'address2': this.state.address2,
                'city': this.state.city,
                'state': this.state.state,
                'zip': this.state.zip,
                'phone': this.state.phone
            })
        });
    };

    handlePaymentSubmit() {
        this.setState({
            'start': false,
            'form1': false,
            'form2': false,
            'form3': false,
            'purchase': true
        });
        fetch('/form3', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                'creditcard': this.state.creditcard,
                'expiration': this.state.expiration,
                'cvv': this.state.cvv,
                'billingZip': this.state.billingZip
            })
        }).then((res) => (res.text()))
        .then((res) => this.setState({
            'summary': res
        }));
    };

};


class Form1 extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(props) {
    return (    
    <div> Create an account
        <br/>
        <label>Name:
            <input type="text" name="name" onChange={this.props.change.bind(this, "name")}/>
        </label>
        <label>Email:
            <input type="email" name="email" onChange={this.props.change.bind(this, "email")}/>
        </label>
        <label>Password:
            <input type="password" name="password" onChange={this.props.change.bind(this, "password")}/>
        </label>
        <button onClick={this.props.click} value="Next">Next</button>
    </div>
    )}
};

class Form2 extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(props) {
    return (    
    <div> Shipping Address
        <br/>   
        <label>Address:
            <input type="text" name="address" onChange={this.props.change.bind(this, "address")}/>
        </label>
        <label>Address line 2 (optional):
            <input type="text" name="address2" onChange={this.props.change.bind(this, "address2")}/>
        </label>
        <label>State:
            <input type="text" name="state" onChange={this.props.change.bind(this, "state")}/>
        </label>
        <label>City:
            <input type="text" name="city" onChange={this.props.change.bind(this, "city")}/>
        </label>
        <label>Zip:
            <input type="text" name="zip" onChange={this.props.change.bind(this, "zip")}/>
        </label>
        <label>Phone:
            <input type="tel" name="phone" onChange={this.props.change.bind(this, "phone")}/>
        </label>
        <input className="f2" type="submit" onClick={this.props.click} value="Next"/>
    </div>
    )}
};

class Form3 extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(props) {
    return (    
    <div> Payment Information
        <br/>
        <label>Creditcard #:
            <input type="text" name="creditcard" onChange={this.props.change.bind(this, "creditcard")}/>
        </label>
        <label>CVV:
            <input type="text" name="cvv" onChange={this.props.change.bind(this, "cvv")}/>
        </label>
        <label>Expiration Date:
            <input type="month" name="expiration" onChange={this.props.change.bind(this, "expiration")}/>
        </label>
        <label>Billing Zip:
            <input type="text" name="zip" onChange={this.props.change.bind(this, "billingZip")}/>
        </label>
        <input className="f3" type="submit"  onClick={this.props.click} value="Next"/>
    </div>
    )}
};

ReactDOM.render(<Checkout />, document.getElementsByClassName('forms')[0]);






