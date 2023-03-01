
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProductPurchased() {
    return (
    <tr>
        <td><Form.Check aria-label="option 1" /></td>
        <td>3	</td>
        <td>Life Boy</td>
        <td> <Form.Control type="number" min="1" placeholder="Quantity" /></td>
        <td>80</td>
        <td>240</td>
        <td><Button variant="danger">Delete</Button></td>
    </tr>
    )
}

