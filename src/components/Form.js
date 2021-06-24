import React from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBRadio
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBValidation isValidated>
      <div className='mb-3 pb-1'>
        <MDBInput
          label='Textarea'
          id='validationTextarea'
          textarea
          placeholder='Required example textarea'
          required
          validation='Please enter a message in the textarea.'
          invalid
        />
      </div>
      <div className='mb-2 pb-1'>
        <MDBCheckbox
          invalid
          validation='Example invalid feedback text'
          label='Check this checkbox'
          id='validationFormCheck1'
          required
        />
      </div>
      <MDBRadio label='Toggle this radio' required id='validationFormCheck2' name='radio-stacked' />
      <MDBRadio
        validation='More example invalid feedback text'
        invalid
        label='Or toggle this other radio'
        required
        id='validationFormCheck3'
        name='radio-stacked'
      />

      <div className='mt-3 mb-5'>
        <input type='file' className='form-control' aria-label='file example' required />
        <div className='invalid-feedback'>Example invalid form file feedback</div>
      </div>
      <div>
        <MDBBtn type='submit' disabled>
          Submit form
        </MDBBtn>
      </div>
    </MDBValidation>
  );
}
