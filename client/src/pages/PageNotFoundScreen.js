
import React from 'react';
import PageNotFoundImg from '../assets/PageNotFoundImg.png'


const pageNotFound = {
    maxwidth: "500px",
    height: "80%",
    padding: "30px",
    // marginBotton: "6rem",
    margin: "0 auto",
}

const PageNotFoundImgWidth = {
    width: "50%",
    maxHeight: "50%",
    marginTop: "3rem",
}


// eslint-disable-next-line
const PageNotFoundScreen = () => {
    return (
        <div style={pageNotFound}>
          <img src={PageNotFoundImg} alt="Page404" style={PageNotFoundImgWidth} />
          <h5 style={{textAlign: "center", color: "brown"}}>Page Not Found</h5>
        </div>
    )
}


export default PageNotFoundScreen
