import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useParams } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fecthData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      alert("fecth Data error");
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      Home
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={3}>
            <Box sx={{}}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.title} />
              <Link to={`/product/ ${product.id}`}>
                <button>Xem chi tiết</button>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Home;
