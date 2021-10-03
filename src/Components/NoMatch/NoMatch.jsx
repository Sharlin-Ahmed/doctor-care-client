import React from 'react';
import NoMatchPic from '../../images/NoMatch.png';
const  NoMatch = () => {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent : 'center'}}>
            <img src={NoMatchPic} alt="No Match Pic"  className="img-fluid" />
        </div>
    )
}
export default NoMatch;