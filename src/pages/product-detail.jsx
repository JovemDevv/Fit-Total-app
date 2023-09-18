import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import products from "../data/products"
import { Grid, Stack, Typography, IconButton, Box } from "@mui/material"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CardProduct from "../components/CardProduct"

function ProductDetail() {
    const {id}= useParams()
        const [productData, setProductData] = useState()
    const [imageShow, setImageShow] = useState("")
    const [arrayImageShow, setArrayImageShow] = useState([])
    const [open, setOpen] = useState(false);
    const [otherProducts,setOtherProducts] = useState([])

    useEffect(() => {
        const filterArray = products.filter((item) => ( item.category === productData?.category && item.id !== productData?.id)
        )
        setOtherProducts(filterArray)
    }, [productData])

    useEffect(() => {
        const filterProduct = products.find((item) => item.id === parseInt(id))
        setProductData(filterProduct)
        setImageShow(filterProduct.listImages[0])
    }, [id])

    function handleShowImage() {
        const arrayImage = []
        const newArrayImage = productData?.listImages?.filter (
            (item) => item !== imageShow
            )
        arrayImage.push({ src: imageShow })
        newArrayImage?.forEach((image) => {
          arrayImage.push({ src: image })
        })
        setArrayImageShow(arrayImage)
        setOpen(true)
      }
      

      return (
        <>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={arrayImageShow}
          />
          <Grid container>
          <Grid item xs={10} md={1} sm={12} order={{xs:3, sm:3, md:1}}>
            <Grid container>
            <Grid item 
              xs={4} 
              sm={4} 
              md={12} 
              >
              
                    <Grid container>
                    {productData?.listImages.map((item, index) => (
                <Grid item 
                    xs={12} 
                    sm={12} 
                    md={12} 
                    key={index}
                    order={{xs:3, sm:3, md:1 }}
                >
                    <Box sx={{ width: "100%", height: "auto" }}>
                    <IconButton onClick={() => setImageShow(item)} sx={{ width: "100%", height: "auto" }}>
                        <img
                        src={item}
                        alt={"imagem do produto"}
                        height={"auto"}
                        width={"100%"}
                        style={{ borderRadius: "20px", overflow: "hidden" }}
                        />
                    </IconButton>
                    </Box>
                </Grid>
                ))}
                    </Grid>
                    
                </Grid>
                
            </Grid>
            </Grid>

            <Grid item  sm={10} xs={6} md={6} order={{xs:2, sm:2, md:2 }}>
              <IconButton onClick={handleShowImage} sx={{ width: "100%", height: "auto" }}>
                <img
                  src={imageShow}
                  alt="Imagem do produto"
                  height={"auto"}
                  width={"100%"}
                  style={{ borderRadius: "20px", overflow: "hidden", marginLeft: "20px", marginRight:"20px"}}
                />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={5} md={5} order={{xs:1, sm:1, md:2}}>
              <Stack spacing={5}>
                <Typography gutterBottom variant="h2" component="div" color="primary">
                  {productData?.title}
                </Typography>
                <Typography gutterBottom variant="h3" component="div" color="primary">
                  {productData?.category}
                </Typography>
                <Typography gutterBottom variant="h2" component="div" color="primary">
                  R$ {productData?.price}
                </Typography>
                <Typography variant="body1" color="primary">
                  {productData?.description}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} mt={10} mb={2} order={{xs:4, sm:4}}>
              <Typography variant="h2" color="primary">
                Produtos da mesma categoria
              </Typography>
              <Grid container mt={6} mb={3} spacing={5}>
                {otherProducts.length > 0 &&
                  otherProducts.slice(0, 3).map((item, index) => (
                    <Grid item xs={12} md={6} lg={4} xl={4} key={index}>
                      <Box m={3}>
                        <CardProduct item={item} />
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </>
      );
      
      
}

export default ProductDetail