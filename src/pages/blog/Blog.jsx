import React from 'react';
import Header from '../../components/header/Header';
import BlogHeader from '../../components/blogHeader/BlogHeader';
import BlogBanner from '../../components/banner/BlogBanner';
import './blog.scss'

function Blog(){
  return (
    <div className="Blog">
      <div className="Blog__header bs">
        <Header Main bs/>
      </div>
            <BlogHeader/>
            <hr />
        <BlogBanner/>
        <hr />
        <div className='Blog__post'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum quam tortor sed massa tellus accumsan. Donec suspendisse non urna, morbi ac nam volutpat consequat.<br/> Non fringilla fames lacus mattis facilisi ut. Purus molestie ut curabitur venenatis nibh augue tincidunt cursus nunc.<br/>
Orci aliquam adipiscing odio sed nibh dui risus lectus. Placerat eget arcu sagittis dis tortor. At est amet, faucibus nulla quis sem massa. Diam pharetra dictumst nunc, tincidunt nibh. Elementum volutpat lectus sit feugiat. At sagittis, posuere sit euismod auctor. Amet nec aenean ut consequat nulla at tellus. Faucibus lobortis nisl, placerat aliquet neque malesuada. Odio purus nisl pharetra sollicitudin rutrum elementum hac. Sed in elementum, nulla posuere purus tincidunt. Ridiculus porttitor egestas nibh aenean a et elit purus. Placerat vitae, tempor sed et tempus eget. Tristique faucibus id vel nam luctus tincidunt. Posuere nullam vitae eleifend parturient.
            </p>
        </div>
    </div>
  );
}
export default Blog;