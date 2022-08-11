import HeaderComponent from 'src/features/product/components/Header.component'
import ProductComponent from 'src/features/product/components/Product.component';
import { useAppSelector } from 'src/hooks/redux/hooks';

const CartPage = () => {
    const { cart, products } = useAppSelector((state) => state.product);

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
        </div>
    )
}

export default CartPage