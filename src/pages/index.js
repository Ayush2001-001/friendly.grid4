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
          <p className="test">by <a href="#">Test</a></p>
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
            <div className="box2">
            <h3 className="blog">Blog Search</h3>
            <div className="search">
            <input type="text"></input> 
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
