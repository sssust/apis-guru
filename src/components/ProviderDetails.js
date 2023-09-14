import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const ProviderDetails = () => {
  let params = useParams();
  const [providerDetails, setProviderDetails] = useState({});

  const getProviderDetails = (name) => {
    axios
      .get(`https://api.apis.guru/v2/${name}.json`)
      .then((res) => {
        const data = res?.data?.apis;
        const temp = Object.keys(data);
        setProviderDetails(data[temp[0]]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (params.name) {
      getProviderDetails(params.name);
    }
  }, [params]);
  const imgUrl = providerDetails?.info?.["x-logo"]?.url;
  console.log("provider details : ", providerDetails);
  return (
    <>
      <div className="details-container">
        <div className="details-header">
          <div className="details-logo">
            <img width="120px" height="120px" src={imgUrl} alt="img" />
          </div>
          <div className="details-title">{providerDetails?.info?.title}</div>
        </div>
        <div className="details-content">
          <div className="details-sec">
            <div className="sec-title">Description</div>
            <div className="description">{providerDetails?.info?.description}</div>
          </div>
          <div className="details-sec">
            <div className="sec-title">Swagger</div>
            <div className="description">{providerDetails?.swaggerUrl}</div>
          </div>
          <div className="details-sec">
            <div className="sec-title">Contact</div>
            <div className="description">
              <div className="contact">
                <div className="contact-left">Email</div>{" "}
                <div className="contact-right">{providerDetails?.info?.contact?.email}</div>
              </div>
              <div className="contact">
                <div className="contact-left">Name</div>{" "}
                <div className="contact-right">{providerDetails?.info?.contact?.name}</div>
              </div>
              <div className="contact">
                <div className="contact-left">Url</div>{" "}
                <div className="contact-right">{providerDetails?.info?.contact?.url}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="details-footer">
          <Link className="footer-btn" to="/">
            <span className="btn-text">Explore more APIs</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProviderDetails;
