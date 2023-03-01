import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Product() {
    return (
        <div className='card card-body my-2'>
            <Form>
                <Row>
                    <Col>
                        <Form.Select>
                            <option>...</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </Form.Select>
                    </Col>
                    <Col>

                        <Form.Control type='text' disabled placeholder='Product' />
                    </Col>

                    <Col>
                        <Form.Control type='number' placeholder="Quantity" />
                    </Col>
                    <Col>
                        <Form.Control type='number' placeholder="Quantity" />
                    </Col>
                    <Col>

                        <Form.Control type='text' disabled placeholder='Unit Price' />
                    </Col>
                    <Col>

                    <Button variant="primary" className="mx-2">Add</Button>
                    <Button variant="secondary">Clear</Button>
                    </Col>
                </Row>
            </Form>
        </div>


    );
}

export default Product;