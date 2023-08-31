import React from 'react'
import { Button } from 'react-bootstrap'
import { Card, CardImg } from 'react-bootstrap/esm'

const Products = () => {
   
    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]
        

    return (
        <div className='row'>
            <h2 className="text-center">Colors</h2>
            {productsArr.map((product) => (
                <div key={product.title} className="col  md-6 mb-4">
                    <Card className='p-2'>
                        <CardImg variant='top' src={product.imageUrl}></CardImg>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ fontWeight: 'bold', color: 'red' }}>${product.price}</p>
                                <Button variant="success">ADD TO CART</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
      </div>
  )
}

export default Products