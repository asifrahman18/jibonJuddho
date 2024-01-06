import { Button, Container,Table } from '@radix-ui/themes';
import React from 'react';

function App() {
  return (
    <Container className="my-5 gradient-form">

      <Table.Row>

        <Table.Cell className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p>Please login to your account</p>


            <input className='mb-4' placeholder='Email address' id='form1' type='email'/>
            <input className='mb-4' placeholder='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <Button className="mb-4 w-100 gradient-custom-2">Sign in</Button>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Button className='mx-2'>
                Danger
              </Button>
            </div>

          </div>

        </Table.Cell>

        <Table.Cell className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </Table.Cell>

      </Table.Row>

    </Container>
  );
}

export default App;