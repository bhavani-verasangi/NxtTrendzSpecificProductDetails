// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="product-list-item">
      <img src={imageUrl} className="image" alt={`similar product ${title}`} />
      <p className="title">{title}</p>
      <p className="brand">{brand}</p>
      <div className="price-container">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            className="star"
            alt="start"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
