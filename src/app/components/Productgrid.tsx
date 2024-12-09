import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', discount: '-30%', image: '/syltherine.jpg', isNew: false },
    { id: 2, name: 'Leviosa', description: 'Stylish sofa chair', price: 'Rp 2.500.000', discount: null, image: '/leviosa.jpg', isNew: false },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', discount: '-50%', image: '/lolito.jpg', isNew: false },
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', discount: null, image: '/respira.jpg', isNew: true },
    { id: 5, name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', discount: null, image: '/grifo.jpg', isNew: false },
    { id: 6, name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', discount: null, image: '/muggo.jpg', isNew: false },
    { id: 7, name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', discount: '-50%', image: '/pingky.jpg', isNew: false },
    { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', discount: null, image: '/potty.jpg', isNew: true },
  ];

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="image-wrapper">
              <Image src={product.image} alt={product.name} width={300} height={200} className="product-image" />
              {product.discount && <span className="badge discount">{product.discount}</span>}
              {product.isNew && <span className="badge new">New</span>}
            </div>
            <div className="info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more">Show More</button>
      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
          background-color: #f3f7ff; /* Light Blue Background */
        }
        h1 {
          margin-bottom: 20px;
          font-size: 2rem;
          color: #00274d; /* Dark Blue Text */
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: #00274d; /* Dark Blue Text */
          border: 1px solid #d1e7ff; /* Light Blue Border */
        }
        .image-wrapper {
          position: relative;
        }
        .product-image {
          object-fit: cover;
        }
        .badge {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          color: white;
        }
        .badge.discount {
          background: #ffcc00; /* Yellow for Discount Badge */
        }
        .badge.new {
          background: #004aad; /* Blue for New Badge */
        }
        .info {
          padding: 15px;
          text-align: left;
        }
        .info h3 {
          margin: 5px 0;
        }
        .info h4 {
          color: #004aad; /* Blue Price Text */
        }
        .show-more {
          margin: 20px auto;
          padding: 10px 20px;
          background: #004aad;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          transition: all 0.3s;
        }
        .show-more:hover {
          background: #ffcc00;
          color: #00274d;
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;


