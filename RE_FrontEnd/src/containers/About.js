import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../assets/images/House.jpg";

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/realtors/topseller/"
        );
        setTopSeller(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/realtors/");
        setRealtors(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let result = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display ">
            <img
              src={realtor.photo}
              alt="realtor-photo"
              className="about__display__image"
            />
          </div>
          <h3 className="about__realtor">{realtor.full_name}</h3>
          <h3 className="about__contact">{realtor.phone}</h3>
          <h3 className="about__contact">{realtor.email}</h3>
          <h3 className="about__about">{realtor.description}</h3>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i++) {
      result.push(
        <div key={i} className="row custom__grid ">
          <div className="col-1-of-3  ">
            {allRealtors[i] ? allRealtors[i] : null}
          </div>
        </div>
      );
    }
    return result;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img
              src={seller.photo}
              alt="realtor-photo"
              className="about__display__image"
            />
          </div>
          <h3 className="about__topseller">Top Seller: </h3>
          <p className="about__realtor">{seller.full_name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className="about">
      <Helmet>
        <title>QuickOwner - About US</title>
        <meta name="description" content="About us" />
      </Helmet>
      <header className="about__header">
        <h1 className="about__heading">About QuickOwner</h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4 ">
            <h2 className="about__subheading">
              Need A Perfect Home? Let's Help you find it
            </h2>
            <p className="about__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              eaque provident, id dignissimos tempora blanditiis hic eum
              exercitationem numquam nostrum delectus architecto, nesciunt iusto
              similique inventore a quidem ipsa in! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dignissimos error sint aut nostrum
              nemo totam, incidunt ad esse fuga ab, hic optio a sequi laborum
              quos, odit illum eveniet culpa?
            </p>
            <div className="about__display">
              <img
                src={House}
                alt="failed to load about image"
                className="about__display__image"
              />
              <p className="about__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                recusandae deserunt cum voluptates fugiat possimus, culpa quae
                voluptatibus porro quia, vitae quasi amet, illum nesciunt
                tenetur iste quod at molestiae! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ullam, doloremque. Possimus, nisi
                quos. Ipsum culpa suscipit temporibus corrupti laboriosam harum
                tempore pariatur voluptatem qui, porro dolor obcaecati vitae
                dolores facilis.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">QuickOwner Expert Team</h2>
        </div>
        <div className="">{getAllRealtors()}</div>
      </section>
    </main>
  );
};

export default About;
