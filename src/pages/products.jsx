import React, { useEffect, useState } from "react"; // Import React
import { Grid, Stack, Typography } from "@mui/material";
import CardProduct from "../components/CardProduct";
import { useParams, useSearchParams } from "react-router-dom";
import products from "./../data/products";

function Products() {
  const { categories } = useParams();
  const [productData, setProductsData] = useState([]);
  const [ categoryData, setCategoryData ] = useState()
  let [searchParams, setSearchParams] = useSearchParams() 
  const queryParams = searchParams.get("q")

  useEffect(() => {
    if (categories){
      const filterArray = products.filter(
        (item) => item.category === categories
        )
      const filterCategory = products.find((item) => item.url === categories)
      setCategoryData(filterCategory)
      setProductsData(filterArray);
    }
    if(queryParams) {
      const filterProduct = products.filter(
        (item) => item.title.toLowerCase().includes(queryParams.toLowerCase())
      )
      setProductsData(filterProduct)
    }
  }, [categories, queryParams]);

  return (
    <>
      <Stack spacing={1}>
        <Typography variant="h2" color={"primary"}>
          {categories ? categoryData?.title : "resultados de " + queryParams}
        </Typography>
        <Typography variant="h5" color={"primary"}>
          {productData?.length} produtos encontrados 
        </Typography>
      </Stack>
      <Grid container spacing={2} mt={5}
      >
        {productData &&
        productData.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} mb={4} key={index}>
            <CardProduct item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Products;
