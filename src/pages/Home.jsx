import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import girl from "../assets/girl.jpg";
import girl2 from "../assets/girl2.jpg";
import clothes from "../assets/clothes.jpg";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CarouselItem } from "react-bootstrap";

const Home = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    getStore();

    return () => {};
  }, []);

  async function getStore() {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    console.log(data);
    setStore(data);
  }
  async function getMensClothing() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    console.log(data);
    setStore(data);
  }
  async function getWomensClothing() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    console.log(data);
    setStore(data);
  }
  async function getJewelery() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(data);
    setStore(data);
  }
  async function getElectronics() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );

    console.log(data);
    setStore(data);
  }

  return (
    <>
      <Carousel className="mb-4">
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={girl} />
          <Carousel.Caption>
            <h3>Elegant</h3>
            <p>Pleasing and graceful in appearance or style.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={girl2} />
          <Carousel.Caption>
            <h3>Fancy</h3>
            <p>A very expensive and very high quality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={clothes} />
          <Carousel.Caption>
            <h3>Classic</h3>
            <p>
              It can adapt to current fashions while maintaining its essential
              essence.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h3 className="mb-4 mt-4 text-center">WELCOME!</h3>
        <h6 className="text-center">
          Discover a secure online shopping experience with us with free return
          shipping. Try on multiple sizes or styles tin the comfort of your own
          home. Elevate your style with high-quality designer clothing and
          accessories. Our curated range offers wardrobe staples that you will
          love for years. Shop confidently with us knowing that you can return
          anything you don't absolutely love. Our range will continue to grow as
          we do so please keep in touch. Follow us on Instagram, sign up for our
          newsletter and save us to your favourites in your contacts. We look
          forward to delivering beautiful things into you life in 2024!
        </h6>
        <h3 className="mb-4 mt-4 text-center">Our Products</h3>

        <div className="text-center mb-4">
          <Button onClick={getStore} className="mx-2" variant="outline-dark">
            View All
          </Button>
          <Button
            onClick={getMensClothing}
            className="mx-2"
            variant="outline-dark"
          >
            Men's Clothing
          </Button>
          <Button
            onClick={getWomensClothing}
            className="mx-2"
            variant="outline-dark"
          >
            Women's Clothing
          </Button>
          <Button onClick={getJewelery} className="mx-2" variant="outline-dark">
            Jewelry
          </Button>
          <Button
            onClick={getElectronics}
            className="mx-2"
            variant="outline-dark"
          >
            Electronics
          </Button>
        </div>
      </Container>
      <Container>
        <Row>
          {store.map((item) => {
            return (
              <Col className="mb-4" key={item.id} sm="6" md="3">
                <Card className="mb-4">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text className="itemCategory">
                      Category: {item.category}
                    </Card.Text>
                    <Button variant="dark">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
