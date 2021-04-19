import React from 'react'

class Contact extends React.Component{

  constructor(){

    super()
    this.state ={
      fname:null,
      lname:null,
      cname:null

    }

  }
  submit(){
    alert(this.state)
  }
  render()
  {
    return (
      <div className="padleft_right">
         <div className="row">
         <div className="col-sm-8 m-auto">
         <h1>Request a demo</h1>
          <br/>
         <div className="form-group">
         <input type="text" placeholder="First Name" className="form-control"  onChange={(e)=>{this.setState({fname:e.target.value})}} />
         </div>
         <br/>
         <div className="form-group">
         <input type="text" placeholder="Last Name" className="form-control" onChange={(e)=>{this.setState({lname:e.target.value})}} />
         </div>
         <br/>
         <div className="form-group">
         <input type="text" placeholder="Company Name" className="form-control" onChange={(e)=>{this.setState({cname:e.target.value})}} />
         </div>
         <br/>
         <button className="btn btn-danger" onClick={()=>this.submit()}>Send Message</button>
        </div>
      </div>
      </div>
    );
  }

}
export default Contact;
