import HeaderComponent from "src/features/product/components/Header.component"
import { useAppDispatch, useAppSelector } from "src/hooks/redux/hooks";

const HomePage = () => {
  const { cart, products } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  return (
    <div>
      <HeaderComponent />
    </div>
  )
}

export default HomePage