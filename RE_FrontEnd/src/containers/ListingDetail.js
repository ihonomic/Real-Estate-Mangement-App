import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

const ListingDetail = (props) => {
  const [realtorSlug, setRealtorSlug] = useState("");
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id; // get slug id from url

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://127.0.0.1:8000/api/listings/${slug}`, config)
      .then((res) => {
        setListing(res.data);
        setRealtorSlug(res.data.realtor.slug); //
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {
        console.log("ops! Can't retrieve Data");
      });
  }, [props.match.params.id]); // If list changes, Re-run useEffect

  useEffect(() => {
    const slug = realtorSlug;
    console.log(slug);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (slug) {
      axios
        .get(`http://127.0.0.1:8000/api/realtors/${slug}`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {
          console.log("Can't Retreive the realtor");
        });
    }
  }, [realtorSlug]);

  const displayInteriorImages = () => {
    let images = [];

    images.push(
      <div key={1} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_1}
                alt="photo_1"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_2 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_2}
                alt="photo_2"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_3 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_3}
                alt="photo_3"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={2} className="row">
        <div className="col-1-of-3">
          {listing.photo_4 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_4}
                alt="photo_4"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_5 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_5}
                alt="photo_5"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>

        <div className="col-1-of-3">
          {listing.photo_6 ? (
            <div className="listingdetail__display">
              <img
                src={listing.photo_6}
                alt="photo_6"
                className="listingdetail__display__image"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
    return images;
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title> QuickOwner -Listing | {`${listing.title}`}</title>
        <meta name="QuickOwner Listing Page" content="QuickOwner Listing" />
      </Helmet>
      <div className="listingdetail__header">
        <h1 className="listingdetail__title">{listing.title}</h1>
        <p className="listingdetail__location">
          {listing.city}, {listing.state}, {listing.zipcode}
        </p>
      </div>

      <div className="row">
        <div className="listingdetail__breadcrumb">
          <Link className="listingdetail__breadcrumb__link" to="/">
            Home
          </Link>
          / {listing.title}
        </div>
      </div>

      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail__display">
            <img
              src={listing.photo_main}
              alt="listing photo"
              className="listingdetail__display__image"
            />
          </div>
        </div>

        {/* Realtor Details */}
        <div className="col-1-of-4">
          <div className="listingdetail__display">
            <img
              src={realtor.photo}
              alt="realtor photo"
              className="listingdetail__display__image"
            />
          </div>
          <h3 className="listingdetail__realtor">{realtor.full_name}</h3>
          <p className="listingdetail__contact">{realtor.phone}</p>
          <p className="listingdetail__contact">{realtor.email}</p>
          <p className="listingdetail__about">{realtor.description}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Home Type: {listing.home_type}
            </li>
            <li className="listingdetail__list__item">Price: N{price}</li>
            <li className="listingdetail__list__item">
              Bedrooms: {listing.bedrooms}
            </li>
            <li className="listingdetail__list__item">
              Bathrooms: {listing.bathrooms}
            </li>
            <li className="listingdetail__list__item">
              Square Feet: {listing.sqft}
            </li>
          </ul>
        </div>

        <div className="col-1-of-2">
          <ul className="listingdetail__list">
            <li className="listingdetail__list__item">
              Sale Type: {listing.sale_type}
            </li>
            <li className="listingdetail__list__item">
              Address: {listing.address}
            </li>
            <li className="listingdetail__list__item">City": {listing.city}</li>
            <li className="listingdetail__list__item">
              State: {listing.state}
            </li>
            <li className="listingdetail__list__item">
              Zipcode: {listing.zipcode}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="listingdetail__description">{listing.description}</p>
      </div>
      {displayInteriorImages()}
    </div>
  );
};

export default ListingDetail;
