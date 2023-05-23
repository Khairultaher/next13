import { store } from "@/store/index";
import { setProduct } from "@/store/productSlice";

export default async function page({ params }) {
  const data = store
    .getState()
    .product.products.find((item) => item._id == params.id);

  store.dispatch(setProduct(data));

  return <div>{JSON.stringify(store.getState().product.product)}</div>;
}
