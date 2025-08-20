import { Box, Button, Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    const fecthData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        }
        catch (error) {
            alert("fecth Data error")
        }

    }

    useEffect(() => { fecthData() }, [])


    return (
        <div>Product


            <Box sx={{}}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <img src={product.image} alt={product.title} />
                <p>Price: ${product.price}</p>
                <Button variant="contained">Thêm vào giỏ hàng</Button>
            </Box>


        </div>


    )
}
export default Product;