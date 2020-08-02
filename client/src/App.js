import React, { Component } from "react";
import axios from "axios";
import Header from "./header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorName: "",
      organisationType: "",
      businessNature: "",
      gst: "",
      pan: "",
      aadhar: "",
      mailingAddress: "",
      registeredAddress: "",
      msme: "",
      registrationNo: "",
      contactPerson: "",
      contactNo: "",
      designation: "",
      email: "",
      website: "",
      bankName: "",
      branchName: "",
      branchAddress: "",
      beneficiaryName: "",
      accountNo: "",
      ifscCode: "",
      paymentMethod: "",
      financePerson: "",
      financeNo: "",
      authSig: "",
      degSig: "",
      gstCert: "",
      msmeCert: "",
      panC: "",
      aadharC: "",
      cc: "",
      coi: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: this.state,
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
    }).then((response) => {
      if (response.data.status === "success") {
        console.log(response);
        alert("Your form has been submitted successfully");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });

    //   axios({
    //     method: "POST",
    //     url: "http://localhost:5000/test",
    //     data: this.state,
    //     // headers: {
    //     //   "content-type": "multipart/form-data",
    //     // },
    //   }).then((res) => {
    //     console.log(res);
    //   });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "", file: null });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <nav
            className="navbar navbar-light"
            style={{
              backgroundColor: "#00004d",
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <span
              className="navbar-text"
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              Vendor Details
            </span>
          </nav>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="vendorName">Vendor Name</label>
              <input
                type="text"
                className="form-control"
                id="vendorName"
                value={this.state.vendorName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="organisationType">Type of Organisation</label>
              <select
                id="organisationType"
                className="form-control"
                // value={this.state.organisationType}
                onChange={this.handleChange.bind(this)}
              >
                <option defaultValue>Choose...</option>
                <option>Sole Proprietor</option>
                <option>Partnership</option>
                <option>Private Limited Company</option>
                <option>Public Limited Company</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="businessNature">Nature of Business</label>
              <select id="businessNature" className="form-control">
                <option defaultValue>Choose...</option>
                <option>Courier Agency</option>
                <option>CHA</option>
                <option>Consultancy</option>
                <option>Internet Service Provider</option>
                <option>Property Landlord</option>
                <option>Software and Website</option>
                <option>Translator</option>
                <option>Consultant</option>
                <option>Test Lab</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="gst">GST</label>
              <input
                type="text"
                className="form-control"
                id="gst"
                value={this.state.gst}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="pan">PAN</label>
              <input
                type="text"
                className="form-control"
                id="pan"
                value={this.state.pan}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="aadhar">Aadhar</label>
              <input
                type="text"
                className="form-control"
                id="aadhar"
                value={this.state.aadhar}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mailingAddress">Mailing Address</label>
            <input
              type="text"
              className="form-control"
              id="mailingAddress"
              value={this.state.mailingAddress}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registeredAddress">Registered Address</label>
            <input
              type="text"
              className="form-control"
              id="registeredAddress"
              value={this.state.registeredAddress}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="msme">MSME</label>
              <input
                type="text"
                className="form-control"
                id="msme"
                value={this.state.msme}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="registrationNo">Company Registration No.</label>
              <input
                type="text"
                className="form-control"
                id="registrationNo"
                value={this.state.registrationNo}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                type="text"
                className="form-control"
                id="contactPerson"
                value={this.state.contactPerson}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="contactNo">Contact Name</label>
              <input
                type="text"
                className="form-control"
                id="contactNo"
                value={this.state.contactNo}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className="form-control"
                id="designation"
                value={this.state.designation}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={this.state.website}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <nav
            className="navbar navbar-light"
            style={{
              backgroundColor: "#00004d",
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <span
              className="navbar-text"
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              Bank Information
            </span>
          </nav>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                value={this.state.bankName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="branchName">Branch Name</label>
              <input
                type="text"
                className="form-control"
                id="branchName"
                value={this.state.branchName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="branchAddress">Branch Address</label>
            <input
              type="text"
              className="form-control"
              id="branchAddress"
              value={this.state.branchAddress}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="beneficiaryName">Beneficiary Name</label>
              <input
                type="text"
                className="form-control"
                id="beneficiaryName"
                value={this.state.beneficiaryName}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="accountNo">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="accountNo"
                value={this.state.accountNo}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ifscCode">IFSC Code</label>
              <input
                type="text"
                className="form-control"
                id="ifscCode"
                value={this.state.ifscCode}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="paymentMethod">Payment Method</label>
              <input
                type="text"
                className="form-control"
                id="paymentMethod"
                value={this.state.paymentMethod}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="financePerson">Finance Contact Person</label>
              <input
                type="text"
                className="form-control"
                id="financePerson"
                value={this.state.financePerson}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="financeNo">Finance Contact No.</label>
              <input
                type="text"
                className="form-control"
                id="financeNo"
                value={this.state.financeNo}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <nav
            className="navbar navbar-light"
            style={{
              backgroundColor: "#00004d",
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <span
              className="navbar-text"
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              Declaration
            </span>
          </nav>
          <nav
            className="navbar navbar-light bg-light"
            style={{ marginBottom: "15px" }}
          >
            <span className="navbar-text">
              I hereby affirm that all information supplied is true and accurate
              to the best of my knowledge. I undertake the responsibility to
              provide you proactively the revised profile and bank details
              immediately on any change of above information.
            </span>
          </nav>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="authSig">Authorised Signatory Name</label>
              <input
                type="text"
                className="form-control"
                id="authSig"
                value={this.state.authSig}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="degSig">Designation</label>
              <input
                type="text"
                className="form-control"
                id="degSig"
                value={this.state.degSig}
                onChange={this.handleChange.bind(this)}
              />
            </div>
          </div>
          <nav
            className="navbar navbar-light"
            style={{
              backgroundColor: "#00004d",
              marginBottom: "15px",
              marginTop: "15px",
            }}
          >
            <span
              className="navbar-text"
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              List of Documents Submitted
            </span>
          </nav>
          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="gstCert"
                  onChange={this.onFileChange.bind(this)}
                />
                <label className="custom-file-label gstCert" htmlFor="gstCert">
                  GST Certificate
                </label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="msmeCert"
                  onChange={this.onFileChange.bind(this)}
                />
                <label
                  className="custom-file-label msmeCert"
                  htmlFor="msmeCert"
                >
                  MSME Certificate
                </label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="panC"
                  onChange={this.onFileChange.bind(this)}
                />
                <label className="custom-file-label panC" htmlFor="panC">
                  PAN Card
                </label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="aadharC"
                  onChange={this.onFileChange.bind(this)}
                />
                <label className="custom-file-label aadharC" htmlFor="aadharC">
                  Aadhar Card
                </label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="cc"
                  onChange={this.onFileChange.bind(this)}
                />
                <label className="custom-file-label cc" htmlFor="cc">
                  Cancel Cheque
                </label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="coi"
                  onChange={this.onFileChange.bind(this)}
                />
                <label className="custom-file-label coi" htmlFor="coi">
                  Certificate of Incorporation
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginBottom: "40px" }}
          >
            Submit My Form
          </button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onFileChange = (event) => {
    document.getElementsByClassName(event.target.id)[0].innerText =
      event.target.files[0].name;
    const event_id = event.target.id;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ [event_id]: reader.result });
    };
  };

  // onNameChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // onEmailChange(event) {
  //   this.setState({ email: event.target.value });
  // }

  // onMessageChange(event) {
  //   this.setState({ message: event.target.value });
  // }
  // onFileChange(event) {
  //   // console.log(event);
  //   console.log(event.target);
  //   let file = event.target.files[0];
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: reader.result,
  //     });
  //   };
  // }
  // onFileChange1(event) {
  //   let file1 = event.target.files[0];
  //   let reader1 = new FileReader();
  //   reader1.readAsDataURL(file1);
  //   reader1.onloadend = () => {
  //     this.setState({
  //       file1: reader1.result,
  //     });
  //   };
  // }
}
