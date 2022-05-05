import axios from 'axios'
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from './Context'
import GroupInput from './helper/GroupInput'


class EditContact extends Component {
    state={
        name: '',
        phone: '',
        email: '',
        errors: {}
    }
    
  
   async componentDidMount(){
     const id =this.props.match.params.id;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        });      
    }

   
    onChangeImput=(e)=>this.setState({
      [e.target.name]: e.target.value
    })
    submit=async(dispatch,size,e )=>{
      e.preventDefault();
      const {name,phone,email} = this.state;
      if(name===""){
        this.setState({errors:{name:"The Name is required"}})
        return;
      }
      if(phone===""){
      this.setState({errors:{phone:"The Phone is required"}})
      return;
      }
      if(email===""){
        this.setState({errors:{email:"The Email is required"}})
        return;
      }
      const newContact ={
        name,
        phone,
        email
      }
      const res =await axios.put('https://jsonplaceholder.typicode.com/users',newContact)
      dispatch({
        type: "Edit",
        payload: res.data
      })
      this.setState({
      name: '',
      phone: '',
      email: '',
      errors:{}
    }) 
    }
  render() {
    const { name, phone, email ,errors} = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <form onSubmit={this.submit.bind(this, dispatch,value.contacts.length)}>
                <div className="card" style={{width:"400px",margin: "0 auto",marginTop: "30px",marginBottom: "16px"}}>
                    <div className="card-body">
                        <h4 className="card-title">Edit Contact</h4>
                        <div className="card-text" >
                        <GroupInput
                        label="Name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={ this.onChangeImput}
                        error={errors.name}
                        
                        />
                        <GroupInput
                        label="Phone"
                        name="phone"
                        type="phone"
                        value={phone}
                        onChange={ this.onChangeImput}
                        error={errors.phone}
                        
                        />
                        <GroupInput
                        label="Email"
                        name ="email"
                        type="email"
                        value={email}
                        onChange={ this.onChangeImput}
                        error={errors.email}
                        
                        />
                              <button className="btn btn-danger btn-block " style={{marginTop: "12px" }}>Update Contact</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
          )
        }}
        </Consumer>
      )
    
  }
}

export default EditContact