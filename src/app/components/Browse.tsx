'use client';
import React from 'react'
import styles from '../styles.module.css'; 
import "../styles/globals.css";

import Image from 'next/image';

const Browse = () => {
  const categories = [
    { title: 'Dining', image: '/dining.jpg', alt: 'Dining Area' },
    { title: 'Living', image: '/living.jpg', alt: 'Living Room' },
    { title: 'Bedroom', image: '/bedroom.jpg', alt: 'Bedroom' },
  ];

  return (
    <div className={styles.container}>
      <h1>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="cards">
        {categories.map((category, index) => (
          <div className="card" key={index}>
            <Image src={category.image} alt={category.alt} width={300} height={200} className="card-image" />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
      <style jsx>{`
 
      `}</style>
    </div>
  );
};

export default Browse;
