<div className="App">
  <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={this.state.name}
        // onChange={this.onNameChange.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        value={this.state.email}
        // onChange={this.onEmailChange.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        className="form-control"
        rows="5"
        id="message"
        value={this.state.message}
        // onChange={this.onMessageChange.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="file">File Upload</label>
      <input
        type="file"
        className="form-control"
        rows="5"
        id="file"
        // value={this.state.file}
        onChange={this.onFileChange.bind(this)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="file1">File Upload</label>
      <input
        type="file"
        className="form-control"
        rows="5"
        id="file1"
        // value={this.state.file}
        onChange={this.onFileChange.bind(this)}
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
</div>;
