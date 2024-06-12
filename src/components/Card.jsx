import React from 'react';

export default function Card({ imageUrl }) {
  return (
    <div className='w-[99%] object-cover'>
      <img className='w-[99%] h-[400px]' src={imageUrl} />
    </div>
  );
}
