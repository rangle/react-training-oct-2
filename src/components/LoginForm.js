import React from 'react';

const isValidEmail = value => /.+@.+/.test(value);
const isValidPassword = value =>
  value.length >= 8 &&
  /[a-z]*/.test(value) &&
  /[A-Z]*/.test(value) &&
  /[0-9]*/.test(value);

const validateField = (type, value) => {
  if (type === 'email') {
    return isValidEmail(value);
  } else if (type === 'password') {
    return isValidPassword(value);
  }

  return true;
};

export class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
  };

  handleUpdate = (type, value) => {
    this.setState(() => ({
      [type]: value,
      [`${type}Error`]: !validateField(type, value),
    }));
  };

  render() {
    const { email, password, emailError, passwordError } = this.state;

    return (
      <main className="pa4 black-80">
        <form className="measure center" noValidate>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                value={email}
                onChange={e => this.handleUpdate('email', e.target.value)}
              />
              {emailError ? <span>Please enter a valid email</span> : null}
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => this.handleUpdate('password', e.target.value)}
              />
              {passwordError ? (
                <span>Please enter a valid password</span>
              ) : null}
            </div>
          </fieldset>

          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
        </form>
      </main>
    );
  }
}
