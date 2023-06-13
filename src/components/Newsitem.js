import React, { Component } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Newsitem = (props)=> {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;


    return (
      
      <div className="news-item">
      <div className="my-3">
        <div className="card"> {/* Add the 'news-item-container' class here */}
       
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position:'absolute',
          right:'0'
        }
      }>
          <span className="badge rounded-pill bg-danger"> {source}
          </span>
          </div>
          <img src={!imageUrl ? "https://www.teslarati.com/wp-content/uploads/2023/05/U5A0094-Edit-3-scaled.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
      <FacebookShareButton url={newsUrl}>
        <FontAwesomeIcon icon={faFacebook} className="meta-icon" />
      </FacebookShareButton>
      
      {/* Twitter Share Button */}
      <TwitterShareButton url={newsUrl} title={title}>
        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
      </TwitterShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={newsUrl}>
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </WhatsappShareButton>
    </div>

    );
  }

 

export default Newsitem;
