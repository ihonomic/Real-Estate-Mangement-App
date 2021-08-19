import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const ListingForm = ({ setListings }) => {
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "0+",
    bedrooms: "0+",
    home_type: "Self Contain",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    has_photos: "2+",
    open_house: "false",
    keywords: "",
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://127.0.0.1:8000/api/listings/search/", {
        sale_type,
        price,
        bedrooms,
        home_type,
        bathrooms,
        sqft,
        days_listed,
        has_photos,
        open_house,
        keywords,
      })

      .then((res) => {
        setLoading(false);
        setListings(res.data);
        // window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [onSubmit, onChange]);

  return (
    <form className="listingform" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-1-of-6">
          {/* sale_type */}
          <div className="listingform__section">
            <label htmlFor="sale_type" className="listingform__label">
              Sale or Rent
            </label>
            <select
              name="sale_type"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={sale_type}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          {/* sqft */}
          <div className="listingform__section">
            <label htmlFor="sqft" className="listingform__label">
              Sqft
            </label>
            <select
              name="sqft"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>2200+</option>
              <option>2500+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="price" className="listingform__label">
              Minimum Price
            </label>
            <select
              name="price"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={price}
            >
              <option>0+</option>
              <option>N800,000+</option>
              <option>N1,000,000+</option>
              <option>N1,200,000+</option>
              <option>N1,400,000+</option>
              <option>N1,600,000+</option>
              <option>N1,800,000+</option>
              <option>N2,000,000+</option>
              <option>N2,200,000+</option>
              <option>Any</option>
            </select>
          </div>
          {/* days_listed */}
          <div className="listingform__section">
            <label htmlFor="days_listed" className="listingform__label">
              Days Listed
            </label>
            <select
              name="days_listed"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={days_listed}
            >
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
        </div>
        {/* bedrooms */}
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="bedrooms" className="listingform__label">
              Bedrooms
            </label>
            <select
              name="bedrooms"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={bedrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
          {/* has_phptos */}
          <div className="listingform__section">
            <label htmlFor="has_photos" className="listingform__label">
              Number of Photos
            </label>
            <select
              name="has_photos"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={has_photos}
            >
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>
        </div>
        {/* home_type */}
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="home_type" className="listingform__label">
              Home Type
            </label>
            <select
              name="home_type"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={home_type}
            >
              <option>Self Contain</option>
              <option>Duplex</option>
              <option>Mansion</option>
              <option>Bungalow</option>
              <option>Family</option>
            </select>
          </div>
          {/* keywords */}
          <div className="listingform__section">
            <label htmlFor="keywords" className="listingform__label">
              Keywords
            </label>
            <input
              name="keywords"
              className="listingform__input"
              type="text"
              onChange={(e) => onChange(e)}
              value={keywords}
            />
          </div>
        </div>
        {/* bathrooms */}
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="bathrooms" className="listingform__label">
              Bathrooms
            </label>
            <select
              name="bathrooms"
              id=""
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={bathrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>

          {/* open house */}
          <div className="listingform__altsection">
            <label htmlFor="open_house" className="listingform__label">
              Open House
            </label>
            <input
              name="open_house"
              className="listingform__checkbox"
              type="checkbox"
              onChange={(e) => onChange(e)}
              value={open_house}
            />
          </div>
        </div>

        {/* ---- */}
        <div className="col-1-of-6">
          {loading ? (
            <div className="listingform__loader">
              <Loader type="Oval" color="#424242" height={50} width={50} />
            </div>
          ) : (
            <button className="listingform__button listingform__button--primary ">
              Search
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

ListingForm.propTypes = {
  setListings: PropTypes.func.isRequired,
};
export default ListingForm;
