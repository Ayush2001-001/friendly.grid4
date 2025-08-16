import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <><><div className="head">
      <div className="layout3">Layout 3</div>
      <div className="about">About</div>
      <div className="service">Service</div>
      <div className="contact">Contact</div>
    </div>
      <div className="container">
        <div className="main">
          <h1 className="blog">Blog Post Title</h1>
          <p className="test">
             by 
            <a href="#">Test</a>
            </p>
          <div className="horizontal-line"></div>
          <p className="post">Posted on August 24, 2013 at 9:00 PM</p>
          <div className="horizontal-line"></div>
          <div className="box1">900 x 300</div>
          <div className="horizontal-line1"></div>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</p>
          <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</p>
          <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</p>
          <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</p>
          <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</p>
        </div>
        <div className="sidebar">
           <div className="blog-search">
              <span>Blog Search</span>
             <div className="blog-search-box">
                <input type="text" />
                <div class="vl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125
                    L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
             </div>
            </div>
          <div className="box">
            <h3>Blog Categories</h3>
            <div className="category3">
            <div className="category">
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
            </div>
            <div className="category1">
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
              <div>Category Name</div>
            </div>
            </div>
          </div>
           <div className="box3">
            <h3>Side Widget Well</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
          </div>
        </div>
        <div className="horizontal-line1"></div>

      </div></><div className="your">Copyright© Your Website 2014</div></>
  );
}
