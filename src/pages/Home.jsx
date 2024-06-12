import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import Card from '../components/Card';
import Pic1 from '../pages/Pic1';
import Pic2 from '../pages/Pic2';
import Pic3 from '../pages/Pic3';
import Pic4 from '../pages/Pic4';

const images = {
    pic1: "https://images.pexels.com/photos/25039669/pexels-photo-25039669/free-photo-of-a-view-of-mountains-and-valleys-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    pic2: "https://images.pexels.com/photos/20721303/pexels-photo-20721303/free-photo-of-a-close-up-of-white-flowers-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    pic3: "https://images.pexels.com/photos/25583967/pexels-photo-25583967/free-photo-of-a-hand-holding-a-red-flower-in-front-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    pic4: "https://images.pexels.com/photos/13861099/pexels-photo-13861099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };


  
  export default function Home() {
    const { id } = useParams();
    const selectedImage = images[id] || images.pic1;
  
    return (
      <div>
        <Card imageUrl={selectedImage} />
        <div className='flex'>
          <Link to="/pic/pic1"><Pic1 /></Link>
          <Link to="/pic/pic2"><Pic2 /></Link>
          <Link to="/pic/pic3"><Pic3 /></Link>
          <Link to="/pic/pic4"><Pic4 /></Link>
        </div>
      </div>
    );
  }