import React from 'react';
import './blogheader.scss';

function BlogHeader(){
  return(
    <div className="BlogHeader">
        <div className="BlogHeader__title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Vulputate volutpat dolor
        </div>
        <div className="BlogHeader__links">
            <p className='active'>News</p>
            <p>Lifestyle</p>
            <p>Entertainment</p>
            <p>Movies</p>
        </div>
    </div>
  )
}
export default BlogHeader;