import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from '../components/NavBar';
import ProductsTable from '../components/ProductsTable';
import Customer from '../components/Customer';
import PaymentMethod from '../components/PaymentMethod';
import Product from '../components/Product';
import Footer from '../components/Footer';

function PosApp() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Product/>
                {/* <ProductsTable /> */}
                <Customer />
                <PaymentMethod/>
                <Footer />
            </div>

        </>
    );
}

export default PosApp;
