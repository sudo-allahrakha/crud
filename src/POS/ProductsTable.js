import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ProductPurchased from './ProductPurchased';
function ProductsTable() {
    return (
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
                <ProductPurchased />
                <ProductPurchased />
                <ProductPurchased />
                <ProductPurchased />
                <tr>
                    <td colSpan={5}>
                        <h3 className='text-center'>Grand Total</h3>
                    </td>
                    <td colSpan={2}>
                        <h3 className='text-center'>520</h3>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ProductsTable;