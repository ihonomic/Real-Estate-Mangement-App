import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  // Regex -Input a comma after 3 digits
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card">
      <h3 className="card__title">{props.title}</h3>
      <div className="card__header">
        <img
          src={props.photo_main}
          alt="'loading pic"
          className="card__header__photo"
        />
      </div>
      <p className="card__location">
        {props.address}, {props.city}, {props.state}
      </p>
      <div className="row">
        <div className="col-2-of-3">
          <p className="card__info">Price: N{numberWithCommas(props.price)}</p>
          <p className="card__info">Bedrooms: {props.bedrooms} </p>
          <p className="card__info">Bathrooms: {props.bathrooms}</p>
        </div>

        <div className="col-2-of-3">
          <p className="card__saletype">{props.sale_type} </p>
          <p className="card__hometype">{props.home_type} </p>
          <p className="card__sqft">Sqft: {numberWithCommas(props.sqft)} </p>
        </div>
      </div>
      <Link className="card__link" to={`/listings/${props.slug}`}>
        View Listing
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sale_type: PropTypes.string.isRequired,
  home_type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  sqft: PropTypes.number.isRequired,
  photo_main: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
