import { Banner } from "@/components/Banner";
import Products from "@/components/Products";

// export const metadata = {
//   title: "Home"
// };

// export async function generteMetadata({ params, searchParams }) {
//   const product = await getProducts(params.id);
//   return { title: product.title };
// }

export default async function Home({ props }) {
  // SSR
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store"
  });

  // ISR
  // const res = await fetch("http://localhost:3000/api/product", {
  //   next: {revalidate: 10}
  // });

  // SSG
  //const res = await fetch("http://localhost:3000/api/product");

  const data = await res.json();

  return (
    <div className="max-w-contentContainer mx-auto bg-white">
      <Banner />
      <Products products={data} />
    </div>
  );
}
