import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signup } from '../../actions';

class Signup extends React.Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    // handleSubmit comes from the reduxForm
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name='email' type='text' component='input' />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name='password' type='password' component='input' />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button type='submit'>Sign up</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'signup' })
)(Signup);
