import { mockedProducts } from "./mocked-products";
import ProductCard from "./ProductCard";
import GridContainer from "../grid/GridContainer";
import Griditem from "../grid/Griditem";

export default function Product() {
  console.log(mockedProducts);
  const renderProductCads = () => {
    if (mockedProducts && mockedProducts.length > 0) {
      return mockedProducts.map(prod => 
        <Griditem xs={4}>
          <ProductCard 
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            img={prod.img}
            price={prod.price}
            code={prod.code}
          />
        </Griditem>
      )
    }
  }

  return (
    <GridContainer spacing={5}>
      {renderProductCads()}
    </GridContainer>
  )
}