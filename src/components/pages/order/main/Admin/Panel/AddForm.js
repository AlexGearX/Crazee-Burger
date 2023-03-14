import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';


const EMPTY_PRODUCT = {
    title: "",
    imageSource: "",
    price: "",
  }

export default function AddForm() {
const { handleAdd } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  
  
  const handleChange = (event) => { 
    setNewProduct({...newProduct, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = (event) => { 
    event.preventDefault();
    handleAdd(newProduct);
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className='image-preview'>Image Preview</div>
      <div className='input-fields'>
        <input type="text" name='title' placeholder="Nom du produit (ex: Super Burger)" onChange={handleChange}></input>
        <input type="text" name='imageSource' placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleChange}></input>
        <input type="text" name='price' placeholder='Prix' onChange={handleChange}></input>
      </div>
      <button className='submit-button'>Validation</button>  
    </AddFormStyled> 
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width:70%;

  .image-preview{
    background: red;
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .input-fields{
    background: blue;
    grid-area: 1/2/-2/-1;
    display: grid;
  }
  .submit-button{ 
    background: brown;
    grid-area: 4/2/-1/-1;
    width: 50%;
  }
`;