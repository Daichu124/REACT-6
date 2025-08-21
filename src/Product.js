import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(product, "product");

  return (
    <div>
      Detail 11111111
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/detail">Detail</Link>
      <Box>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img src={product.image} alt={product.title} />
        <button>Thêm vào giỏ hàng</button>
      </Box>
    </div>
  );
}
export default Detail;
