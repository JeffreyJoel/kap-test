import React, { useState } from 'react';
import '../addProduct/mob_addProduct.scss';
import dropdown from "../../props/icons/Expand_left.svg";
import './Category.scss';

function Category() {
  const [selects, setSelects] = useState();
  const [important, setImportant] = useState();
  const [sub, setSub] = useState();


  return (<div>
    <div className="AddProduct__form__textInp">
      <label for="category">Category</label>
      <div id="category">
        <img src={dropdown} alt="dropdown" />
        <select value={selects} onChange={(e) => {
          setSelects(e.target.value);

        }}>
          <option value="0">Select</option>
          <option value="1">Women's Fashion</option>
          <option value="2">Men's Fashion</option>
          <option value="3">Kid's & Newborn's fashion</option>
          <option value="4">Children's Products</option>
          <option value="5">Phones & Tablets</option>
          <option value="6">Computers & game consoles</option>
          <option value="7">Electronics</option>
          <option value="8">Health & Beauty</option>
          <option value="9">Appliances</option>
          <option value="10">Pets</option>
          <option value="11">Sports & Recreation</option>
          <option value="12">For home</option>
          <option value="13">Cottage & Garden</option>
          <option value="14">Leisure & Entertainment</option>
          <option value="15">Construction & Repair</option>
          <option value="16">Auto and Moto</option>
          <option value="17">Services</option>
          <option value="18">Food</option>
        </select>

      </div>
    </div>


    {/* SubCategories */}
    <div className="AddProduct__form__textInp">
      <label for="category">Sub-Category</label>
      <div id="category">
        <img src={dropdown} alt="dropdown" />
        {selects === "1" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);

          }}>
            <option value="0">Select</option>
            <option value="1">Women's Clothing</option>
            <option value="2">Women's Footwear</option>
            <option value="3">Accessories for Women</option>
            </select>
        </div>}
        
        {selects === "2" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);

          }}>
            <option value="0">Select</option>
            <option value="1">Men's Clothing</option>
            <option value="2">Men's Footwear</option>
            <option value="3">Accessories for Men</option>
            </select>
        </div>}

        {selects === "3" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Kid's Clothing</option>
            <option value="2">Kid's Footwear</option>
            <option value="3">Kid's Accessories</option>
            <option value="4">Newborns's Clothing</option>
            <option value="5">Newborn's Footwear</option>
            <option value="6">Newborn's Accessories</option>
            <option value="7">Newborn's Envelopes</option>
            </select>
        </div>}

        {selects === "4" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Children's Sports</option>
            <option value="2">For School</option>
            <option value="3">Toys and Games</option>
            <option value="4">Development and Training</option>
            <option value="5">Creativity and Hobbies</option>
            <option value="6">Products for Mothers and Babies</option>
            </select>
        </div>}
        {selects === "5" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Smartphones</option>
            <option value="2">Tablets</option>
            <option value="3">Smartphone cases</option>
            <option value="4">Tablet cases</option>
            <option value="5">Accessories</option>
            <option value="6">Spare Parts</option>
            <option value="7">Push button Cellphones</option>
            <option value="8">Satellite Phones</option>
            <option value="9">Corded Phones</option>
            <option value="10">Portable Radio Stations</option>
            <option value="11">Radio Telephones</option>
            </select>
        </div>}
        {selects === "6" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Computers</option>
            <option value="2">Game Console</option>
            <option value="3">Games for Consoles and PC</option>
            <option value="4">Steering wheels, Joysticks, Game pads</option>
            <option value="5">VR helmets and 3D glasses</option>
            <option value="6">Games Consoles Accessories</option>
            <option value="7">Accessories for Computer Equipment</option>
            <option value="8">Data Storage</option>
            <option value="9">Presentation Equipment</option>
            <option value="10">Workplace Organization</option>
            <option value="11">Office Equipment</option>
            <option value="12">Consumables</option>
            <option value="13">Uninterruptible Power Supplies</option>
            <option value="14">Network Hardware</option>
            <option value="15">Computer Devices</option>
            </select>
        </div>}

        {selects === "7" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Audio and Video Equipment</option>
            <option value="2">Headphones and Bluetooth Headsets</option>
            <option value="3">Smart watches and Bracelets</option>
            <option value="4">Monowheels and Gyro Scooters</option>
            <option value="5">Photo and Video Cameras</option>
            <option value="6">Games Consoles Accessories</option>
            <option value="7">Ebooks</option>
            <option value="8">Optical Instruments</option>
            <option value="9">GPS Navigation</option>
            <option value="10">Portable Equipment</option>
            <option value="11">Quadcopters</option>
            </select>
        </div>}
        {selects === "8" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Beauty Technique</option>
            <option value="2">Medical Supplies</option>
            <option value="3">Perfumery</option>
            <option value="4">Cosmetics</option>
            <option value="5">Orthopedic Products</option>
            <option value="6">Optics</option>
            <option value="7">Specialty Meals</option>
            <option value="8">Hair Care</option>
            <option value="9">Face Care</option>
            <option value="10">Nail Care</option>
            <option value="11">Body Care</option>
            </select>
        </div>}

        {selects === "9" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Built-in Appliances</option>
            <option value="2">Climatic Equipment</option>
            <option value="3">Large Kitchen Appliances</option>
            <option value="4">Small Kitchen Appliances</option>
            <option value="5">Home Appliances</option>
            </select>
        </div>}
        {selects === "10" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Cat and Dog Food </option>
            <option value="2">Ammunition for Dogs</option>
            <option value="3">Vetapek</option>
            <option value="4">Goods for Pets</option>
            <option value="5">Products for Fish and Reptiles</option>
            </select>
        </div>}
        
        {selects === "11" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Moutaineering </option>
            <option value="2">Billiards</option>
            <option value="3">Boxing and Martial Arts</option>
            <option value="4">Bicycles and Accessories</option>
            <option value="5">Water Sports</option>
            <option value="6">Protection Equipment</option>
            <option value="7">Winter Sports</option>
            <option value="8">Team Sports</option>
            <option value="9">Horseback RIding</option>
            <option value="10">Hunting, Fishing and Tourism</option>
            <option value="11">Roller skates and Accessories</option>
            <option value="12">Scooters and Accessories</option>
            <option value="13">Skateboarding</option>
            <option value="14">Sports Protection</option>
            <option value="15">Sports Nutrition</option>
            <option value="16">Sports Games</option>
            <option value="17">Sports Bags</option>
            <option value="18">Tennis, Badminton, Squash</option>
            <option value="19">Fitness Equipment and Products</option>
            </select>
        </div>}

        {selects === "12" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">House Chemicals </option>
            <option value="2">Home Interior</option>
            <option value="3">Furniture</option>
            <option value="4">New Year's Goods</option>
            <option value="5">Lighting</option>
            <option value="6">Cookery and Cooking Utensils</option>
            <option value="7">Textiles</option>
            <option value="8">Goods for the Holidays</option>
            <option value="9">Household Goods</option>
            </select>
        </div>}

        {selects === "13" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Watering Accessories </option>
            <option value="2">Dry Clothes and Accessories</option>
            <option value="3">Decor</option>
            <option value="4">Showers and Washbasins</option>
            <option value="5">Furniture</option>
            <option value="6">Greenhouses</option>
            <option value="7">Picnic, Barbecue, Grill</option>
            <option value="8">Garden Tools</option>
            <option value="9">Saunas, Baths and Equipment</option>
            <option value="10">Pools and Accessories</option>
            <option value="11">Roller skates and Accessories</option>
            <option value="12">Seeds and Seedlings</option>
            <option value="13">Technics for Garden</option>
            <option value="14">Fertilizers and Plant Care</option>
            <option value="15">Fountains and Ponds</option>
            </select>
        </div>}

        {selects === "14" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Antiques</option>
            <option value="2">Audio Recordings</option>
            <option value="3">Videos</option>
            <option value="4">Icons</option>
            <option value="5">Books</option>
            <option value="6">Collecting</option>
            <option value="7">Musical Instruments</option>
            <option value="8">Board Games</option>
            <option value="9">Numismatics and Philately</option>
            <option value="10">Gifts Baskets</option>
            <option value="11">Fortune telling and Divination Goods</option>
            <option value="12">Flags and Coat of Arms</option>
            </select>
        </div>}

        {selects === "15" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Water Supply</option>
            <option value="2">Doors, Windows and Hardware</option>
            <option value="3">Plumbing</option>
            <option value="4">Heating and Ventilation Systems</option>
            <option value="5">Building and Decoration Materials</option>
            <option value="6">Building Tools</option>
            <option value="7">Electrics</option>
            </select>
        </div>}

        {selects === "16" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Cars</option>
            <option value="2">Tires and Wheels</option>
            <option value="3">Mototechnics</option>
            <option value="4">Audio and Video Equipment</option>
            <option value="5">Spare Parts</option>
            <option value="6">Instruments for Auto</option>
            <option value="7">Oils and Technical Fluids</option>
            <option value="8">Accessories and Equipment</option>
            <option value="9">Trailers</option>
            <option value="10">Anti-theft Devices</option>
            <option value="11">Car Chemistry and Car care Products</option>
            <option value="12">Electronics</option>
            </select>
        </div>}

        {selects === "17" && <div className='Sub'>
      <select value={sub} onChange={(e) => {
            setSub(e.target.value);
          }}>
            <option value="0">Select</option>
            <option value="1">Auto Services</option>
            <option value="2">Domestic Services</option>
            <option value="3">Custom made</option>
            <option value="4">Computer Services</option>
            <option value="5">Health and Beauty</option>
            <option value="6">Courier Orders</option>
            <option value="7">Master for an hour</option>
            <option value="8">Nannies, Nurses</option>
            <option value="9">Training</option>
            <option value="10">Organization of Holidays</option>
            <option value="11">Transportation </option>
            <option value="12">Repair and Construction</option>
            <option value="13">Cleaning</option>
            <option value="14">Animal Care</option>
            <option value="15">Photo and Video</option>
            <option value="16">Other Services</option>
            </select>
        </div>}
      </div>
    </div>
    
  {/* Questions */}

    <div >
      {selects === "1"  && <div className='Questions'>
        <label>1. Is the item brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2. Is there any visible damage to the material? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3. In your opinion, what is the present condition of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>

    <div >
      {selects === "2" && <div className='Questions'>
        <label>1. Is the item brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2. Is there any visible damage to the material? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3. In your opinion, what is the present condition of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "3" && <div className='Questions'>
        <label>1. Is the item brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2. Is there any visible damage to the material? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3. In your opinion, what is the present condition of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "4" && <div className='Questions'>
        <label>1. Is the item brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2. Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3. Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the item</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "5" && <div className='Questions'>
        <label>1. Is the device brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the ports and peripherals of the gadget? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "6" && <div className='Questions'>
        <label>1. Is the device brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the ports and peripherals of the gadget? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "7" && <div className='Questions'>
        <label>1. Is the device brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the ports and peripherals of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>

        {/* No Health Questions */}

    <div >
      {selects === "9" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the equipment? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "10" && <div className='Questions'>
        <label>1.Is the pet a newborn?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2. Does the pet have any pre-existing medical conditions? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes</option>
            <option value="1">No</option>
          </select>
          <label >If “Yes” please what are the medical conditions?</label>
          <textarea name="" id="" cols="40" rows="7"></textarea>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "11" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the equipment? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "12" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the home Item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "13" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>

    <div >
      {selects === "14" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the leisure item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>

    <div >
      {selects === "15" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
    <div >
      {selects === "16" && <div className='Questions'>
        <label>1. Is the equipment brand new?</label>
        <select id="" value={important} onChange={(e) => {
          setImportant(e.target.value);
        }}>
          <option name="" id="">Select</option>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
        {important === "1" && <div>
          <label >2.  Does the item have any visible scratches? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >3.  Does the item have any deformed part or any noticeable abnormalities?</label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Yes, but negligible</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
          <label >4. In your opinion, what is the present condition of the  item? </label>
          <select name="" id="">
            <option name="" id="">Select</option>
            <option value="0">Excellent</option>
            <option value="1">Good</option>
            <option value="2">Bad</option>
          </select>
        </div>}
      </div>}
    </div>
  </div>
  );
};

export default Category;
