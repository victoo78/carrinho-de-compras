
import fetchProducts from '../../api/fetchProducts';
import React, { useEffect, useContext } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';


import './Products.css';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);


  useEffect(() => {
    fetchProducts('camiseta').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

 

  return (

    (loading && <Loading/>) || (<section className='products container'>
     
      {products.map((product) => <ProductsCard key={product.id} data={product} />)}
    </section>)


    
  );
};

export default Products;
