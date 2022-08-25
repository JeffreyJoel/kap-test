import React from 'react';
import './mob_addProduct.scss';
import cancel from "../../props/icons/Close_round.svg";
import addImage from "../../props/icons/Add_square.svg";
import Category from '../forms/Category';
import { States } from '../../util';
import Select from '../forms/select/Select';



function AddProduct({hide}) {


    const handleAddImage = () =>{
        hide(false);
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
    }
    console.log(States[0].name);
    return (
      <div className="AddProduct">
        <div className="AddProduct__header">
          <span>
            <img src={cancel} alt="cancel" onClick={handleAddImage} />
          </span>
          <h3>Add item</h3>
        </div>

        <form className="AddProduct__form">
          <div className="AddProduct__form__image">
            <label for="image_prod">
              <img src={addImage} alt="addImage" />
              <p>Add images</p>
            </label>
            <input type="file" id="image_prod" accept=".jpg, .jpeg, .png" multiple/>
            <p className="size">(min 250kb, max 1.5mb)</p>
          </div>
          <div className="AddProduct__form__textInp">
            <label for="item">Item Name</label>
            <input type="text" name="item" />
          </div>
            <Category/>
          <div className="AddProduct__form__textInp">
            <label for="itemdesc">Item Description</label>
            <input type="text" name="itemdesc" />
          </div>
          <div className="AddProduct__form__textInp">
            <label for="swapfor">Swap For?</label>
            <input type="text" name="swapfor" />
          </div>
          <div className="AddProduct__form__switch">
            <p>I’m Open to Offers</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="AddProduct__form__location">
            <Select payloads={States}/>
            <div className="AddProduct__form__location__textInp">
              <label for="city">city</label>
              <input type="text" name="city" />
            </div>
          </div>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
}

export default AddProduct
