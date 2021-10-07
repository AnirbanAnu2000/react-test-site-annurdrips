import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import Vmc from '../inc/Vmc';
import Sr1 from '../images/sr1.jpg';
import Sr2 from '../images/sr2.jpg';
import Sr3 from '../images/sr3.jpg';

function Home(){
  return (
    <>
      <Slider/>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="main-heading">Anirban APP</h3>
              <div className="underline mx-auto"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla consequuntur, dolor reiciendis quidem rem quam et soluta porro tenetur necessitatibus odit dolorem optio, quod perspiciatis vitae? Nemo, libero. Illum, nostrum voluptatum ut repudiandae ad nisi odio facere repellendus sit iusto non, ipsam dolorem dolor amet nemo accusamus possimus. Nihil!</p>
              <Link to="/about" className="btn btn-primary shadow">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* our mission vision & values */}
      <Vmc/>
      {/* our services */}
      <section className="section border1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <h3 className="main-heading">Ous Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow rounded-3 p-3">
                <img src={Sr1} alt="" className="img-fluid border-bottom rounded-top" />
                <div className="card-body">
                <h5>Service 01</h5>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe adipisci voluptatem natus dolorum inventore assumenda, explicabo voluptatum.</p>
                <Link to="/services" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow rounded-3 p-3">
                <img src={Sr2} alt="" className="img-fluid border-bottom rounded-top" />
                <div className="card-body">
                <h5>Service 01</h5>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe adipisci voluptatem natus dolorum inventore assumenda, explicabo voluptatum.</p>
                <Link to="/services" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow rounded-3 p-3">
                <img src={Sr3} alt="" className="img-fluid border-bottom rounded-top" />
                <div className="card-body">
                <h5>Service 01</h5>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe adipisci voluptatem natus dolorum inventore assumenda, explicabo voluptatum.</p>
                <Link to="/services" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;