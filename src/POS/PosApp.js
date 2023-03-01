import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import ProductsTable from './ProductsTable';
import Customer from './Customer';
import PaymentMethod from './PaymentMethod';
import Product from './Product';
import Footer from './Footer';
function PosApp() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Product/>
                <ProductsTable />
                <Customer />
                <PaymentMethod/>
                <Footer />
            </div>

        </>
    );
}

export default PosApp;
