import React from 'react';
import searchIcon from '../../props/icons/Search_alt.svg';
import './search.scss';

function Search(){
  return(
    <div className="Search">
        <img src={searchIcon} alt="Search" />
        <input type="text" name="Search" id="searchBox" placeholder="Find Item"/>
    </div>
  )
}
export default Search;