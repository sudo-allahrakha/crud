import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Footer() {
  return (
    <div className='text-center'>

      <ButtonGroup size="lg" className="mb-2">
        <Button variant="secondary">Collect Cash</Button>
        <Button variant="secondary">Print Invoice</Button>
        <Button variant="secondary">Hold Order</Button>
        <Button variant="secondary">Cancel Order</Button>
      </ButtonGroup>
      
    </div>
  );
}

export default Footer;