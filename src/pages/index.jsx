import React from "react";
import Hero from "../components/hero";
import Category  from "../components/category";
import Products  from "../components/Products";
import Hero2  from "../components/hero2";
import About from "../components/About";
import Footer from "../components/footer";



const MainPage = () =>
{
    return <div>
         <Hero/>
     <Category/>
     <Products/>
     <Hero2/>
     <About/>
     <Footer/>
    </div>
}


export default MainPage;