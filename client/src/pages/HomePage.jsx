import React from 'react';
import Navbar from '../components/Navbar';
import Slide from '../components/Slide';
import Categories from '../components/Categories';
import Listings from '../components/Listings';

// function HomePage() {
//   return (
//     <div>
//      <Navbar />
//      <Slide />
//      <Categories />
//      <Listings />
//     </div>
//   )
// }

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage;
