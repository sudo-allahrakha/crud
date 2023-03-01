import Form from 'react-bootstrap/Form';

function PaymentMethod() {
  return (

    <div className='my-2'>
      <Form>
      <Form.Check 
        type="radio"
        id="custom-switch"
        label="Credit Card"
      />
      <Form.Check 
        type="radio"
        id="custom-switch"
        label="Cash"
      />
      
    </Form>
    </div>

    
  );
}

export default PaymentMethod;