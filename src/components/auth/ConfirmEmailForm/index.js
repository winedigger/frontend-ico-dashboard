import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './styles.css';

import { required } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import Button from '../../common/Button';

class ConfirmEmailForm extends Component {
  componentWillMount() {
    const { email, verificationId } = this.props;
    this.props.change('verificationId', verificationId);
    this.props.change('email', email);
  }

  render() {
    const { spinner, handleSubmit, invalid, error } = this.props;

    return (
      <div>
        <div className={s.title}>Sign Up</div>

        {error && <div className={s.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={s.field}>
            <Field
              component={RenderInput}
              name="code"
              type="text"
              placeholder="Enter PIN"
              validate={required}/>
          </div>

          <Field
            component={RenderInput}
            name="email"
            type="hidden"
            disabled/>

          <Field
            component={RenderInput}
            name="verificationId"
            type="hidden"
            disabled/>

          <div className={s.button}>
            <Button type="submit" spinner={spinner} disabled={invalid}>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

const FormComponent = reduxForm({
  form: 'verifySignUp',
  initialValues: {
    code: '',
    email: '',
    verificationId: ''
  }
})(ConfirmEmailForm);

export default FormComponent;