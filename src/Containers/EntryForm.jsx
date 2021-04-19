import React, { Component } from "react";
import { reduxForm, Field ,formValueSelector} from "redux-form";
import { input } from '../inputControl';
import { formValidator } from "../ValidateEntry";
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import EmployeeList from '../Components/EmployeeList';
import * as data from '../MOCK_DATA.json';

class EntryForm extends Component {
  constructor(props)
  {
    super(props)
   this.state={show:false,addedData:data};
  }

  render() {
   const { handleSubmit, reset, pristine, submitting, valid } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(values => {
            values["id"]=data.default.length+1;
            Object.assign(this.state.addedData,values)
            this.setState({addedData:values});
          })}>
          <table>
            <tr>
             <td>
                <label>First Name :</label>
              </td>
              <td>
                <Field
                  name="first_name"
                  type="text"
                   component={input}
                  id="first_name"
                  placeholder="enter your first name"
                />
              </td>
            </tr>
            <tr>
               <td>
                <label>Last Name :</label>
              </td>
              <td>
                <Field
                  name="last_name"
                  type="text"
                  component={input}
                  id="last_name"
                  placeholder="enter your last name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email Address :</label>
              </td>
              <td>
                <Field
                  name="email"
                  type="text"
                  component={input}
                  id="email"
                  placeholder="enter your email"
                />
              </td>
            </tr>
            <tr>
             <td>
                <label>Gender :</label>
              </td>
              <td>
              <div>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />{' '}
                  Male
                </label>
                <label>
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />{' '}
                  Female
                </label>
              </div>

              </td>
            </tr>
            <tr>
              <td>
                <label>Status :</label>
              </td>
              <td>
                <Field
                  name="status"
                  type="checkbox"
                  component={input}
                  id="status"
                />
              </td>
            </tr>
            
            <tr>
              <td>
                <Button
                  type="submit"
                  disabled={!valid || pristine || submitting}>Submit</Button>
                
              </td>
              <td>
                <Button type="button" onClick={reset}>
                  reset
                </Button>
              </td>
            </tr>
          </table>
        </form>
        <EmployeeList data={this.state.addedData}></EmployeeList>
      </div>
    );
  }
} 

EntryForm = reduxForm({
  form: 'EntryForm' ,// a unique identifier for this form
  validate:formValidator
})(EntryForm)

// Decorate with connect to read form values
const selector = formValueSelector('EntryForm') // <-- same as form name
EntryForm = connect(state => {
  const values = selector(state,'first_name', 'last_name', 'email','gender','status')
  return values
})(EntryForm)

export default EntryForm

