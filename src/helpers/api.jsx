import image1 from "../../public/images/image1.png"
import image2 from "../../public/images/image2.png"
import image3 from "../../public/images/image3.png"

export const getProducts = () => {
    return [
        { id: '1', name: 'Product 1', description:"description 1", price: 1000.99, image:image1 },
        { id: '2', name: 'Product 2', description:"description 2", price: 1400.99, image:image2 },
        { id: '3', name: 'Product 3', description:"description 3", price: 1900.99, image:image3 },
      ];
}
export const getProductById = (productId) => {
  const products = getProducts();
  return products.find(product => product.id === productId);
}