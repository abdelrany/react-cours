import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import axios from 'axios';


export class Contact extends Component {
  state = {
    showContactToggle: true
  }

  show(message) {
    console.log("hello", message);
    this.setState({
      showContactToggle: !this.state.showContactToggle

    });
  }

  onDeleteContact = async (id, dispatch) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/ ${id}`)
    dispatch({
      type: "DELETE",
      payload: id
    })


  }

  render() {
    const { id, name, email, phone } = this.props.data;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card" style={{ width: "400px", margin: '1% auto' }}>
              <div className="card-body">
                <h5 className="card-title">
                  {name}  <i onClick={this.show.bind(this, name)} className="fa fa-sort-down" style={{ cursor: 'pointer' }} ></i>
                  <Link to={`/contact/edit/${id}`}>
                    <i class="fa fa-pencil-square" aria-hidden="true"
                      style={{
                        float: 'right',
                        cursor: 'pointer',
                        marginLeft: '10px'
                      }}>
                    </i></Link>

                  <i className="fa fa-times" aria-hidden="true" style={{ color: 'red', float: 'right', cursor: 'pointer' }}
                    onClick={this.onDeleteContact.bind(this, id, dispatch)}></i>
                </h5>
                {(this.state.showContactToggle) ? (
                  <ul>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                  </ul>) : (null)}
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.defaultProps = {
  name: " smiya",
  email: "Email@gmail0com",
  phone: "0690855272"
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contact  