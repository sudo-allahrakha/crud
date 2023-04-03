
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProductPurchased(props) {
    
    let changeQuantity=()=>{

    }
    
    return (
    <tr key={props.cartItem.id}>
        <td><Form.Check aria-label="option 1" /></td>
        <td>{props.cartItem.id}	</td>
        <td>{props.cartItem.title}</td>
        <td> <Form.Control onChange={changeQuantity}  type="number" min="1" value={props.cartItem.quantity} placeholder="Quantity" /></td>
        <td>{props.cartItem.price}</td>
        <td>{props.cartItem.quantity*props.cartItem.price}</td>
        <td><Button variant="danger">Delete</Button></td>
    </tr>
    )
}

