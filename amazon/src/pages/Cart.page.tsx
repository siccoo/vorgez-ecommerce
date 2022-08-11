import HeaderComponent from 'src/features/product/components/Header.component'
import ProductComponent from 'src/features/product/components/Product.component';
import { useAppSelector } from 'src/hooks/redux/hooks';

const CartPage = () => {
    const { cart, products } = useAppSelector((state) => state.product);

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div>
            <HeaderComponent />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '48px'
                }}
            >
                {products.length > 0 && products.map((product) => (
                    <ProductComponent key={product._id} product={product} />
                ))}
            </div>

            <div style={{width: '80%', margin: 'auto'}}>
                <hr style={{marginTop: '16px'}} />
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    fontSize: '20px'
                }}
                >
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default CartPage