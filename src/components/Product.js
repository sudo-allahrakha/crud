import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Products from '../data/data.js'
import { useState } from 'react';

let initProduct = {
    id: -1,
    title: "...",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    totalPrice: 0,
    quantity: 0

}

function Product() {

    let [product, setProduct] = useState(initProduct)
    let [cart, setCart] = useState([])
    let [deleteProduct, setDeleteProduct] = useState(-1)


    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
   


    let productChangeHandler = ({ target: { value } }) => {
        let productId = value
        if (productId == -1) {
            return setProduct(initProduct)
        }
        let productsCopy = JSON.parse(JSON.stringify(Products));
        let tempProduct = productsCopy.find(product => product.id == productId)
        let tempProductPrice = tempProduct.price
        tempProduct = { ...tempProduct, quantity: 1, totalPrice: tempProductPrice }

        setProduct(tempProduct)


    }

    let quantityChangedHandler = (quantity) => {
        let tempProduct = { ...product }
        tempProduct.quantity = quantity
        tempProduct.totalPrice = tempProduct.price * quantity

        setProduct(tempProduct)
    }


    let addProuduct = () => {

        let copyCart = [...cart]
        let index = copyCart.findIndex(p => p.id == product.id)
        if (index > -1) {
            let tempProduct = copyCart[index]
            tempProduct.totalPrice = parseInt(tempProduct.totalPrice) + parseInt(product.totalPrice)
            tempProduct.quantity = parseInt(tempProduct.quantity) + parseInt(product.quantity)
            copyCart[index] = tempProduct
        } else {
            copyCart.push(product)
        }
        setCart(copyCart)
        setProduct(initProduct)
    }

    let changeQuantity = (quantity, product_id) => {
        let copyCart = [...cart]

        let index = copyCart.findIndex(p => p.id == product_id)
        if (index > -1) {
            let tempProduct = copyCart[index]
            tempProduct.quantity = parseInt(quantity)
            tempProduct.totalPrice = tempProduct.price * quantity
            copyCart[index] = tempProduct
            setCart(copyCart)
        }

    }

    let deleteConfirmation = (product_id) => {
        setShow(true)
        setDeleteProduct(product_id)

    }


    let deleteProudct = () => {

        let product_id = deleteProduct
        let copyCart = [...cart]
        let newCart = copyCart.filter(product => product.id != product_id)
        setCart(newCart)
        setDeleteProduct(-1)
        setShow(false)

    }

    return (

        <>
            <div className='card card-body my-2'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Select value={product.id} onChange={productChangeHandler}>
                                <option value={product.id}>{product.title}</option>
                                {Products.map(product => <option key={product.id} value={product.id}>{product.title}</option>)}
                            </Form.Select>
                        </Col>
                        <Col>

                            <Form.Control type='text' value={product.price} disabled placeholder='Unit Price' />
                        </Col>


                        <Col>
                            <Form.Control min={1} value={product.quantity} type='number' name='quantity' onChange={(event) => { quantityChangedHandler(event.target.value) }} placeholder="Quantity" />
                        </Col>
                        <Col>
                            <Form.Control type='text' value={product.totalPrice} disabled placeholder="Total Price" />
                        </Col>

                        <Col>

                            <Button variant="primary" disabled={product.id == -1 ? true : false} onClick={addProuduct}>Add</Button>

                        </Col>
                        <Col>


                            <Button variant="secondary" onClick={() => setProduct(initProduct)} >Clear</Button>
                        </Col>
                    </Row>
                </Form>
            </div>


            <Table bordered responsive>
                <thead>
                    <tr>
                        <th><Form.Check aria-label="option 1" /></th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cart.map((cartItem, index) =>

                            <tr key={cartItem.id}>
                                <td><Form.Check aria-label="option 1" /></td>
                                <td>{cartItem.id}	</td>
                                <td>{cartItem.title}</td>
                                <td> <Form.Control onChange={(event) => changeQuantity(event.target.value, cartItem.id)} type="number" min="1" value={cartItem.quantity} placeholder="Quantity" /></td>
                                <td>{cartItem.price}</td>
                                <td>{cartItem.quantity * cartItem.price}</td>
                                <td><Button onClick={() => deleteConfirmation(cartItem.id)} variant="danger">Delete</Button></td>
                            </tr>

                        )
                    }


                    <tr key={99}>
                        <td colSpan={5}>
                            <h3 className='text-center'>Grand Total</h3>
                        </td>
                        <td colSpan={2}>
                            <h3 className='text-center'>{
                                cart.reduce((sum, product) => sum + (product.quantity * product.price), 0)
                            }</h3>
                        </td>
                    </tr>
                </tbody>
            </Table>



            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure, you don't want to purchase this product?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={deleteProudct} >Yes</Button>
                </Modal.Footer>
            </Modal>
        </>


    );
}

export default Product;