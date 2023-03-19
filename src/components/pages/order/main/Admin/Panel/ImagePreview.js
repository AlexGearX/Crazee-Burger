import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';

export default function ImagePreview({imageSource}) {
  return (
      <ImagePreviewStyled >
          {imageSource ?
              <img src={imageSource} alt="" />
              :
              <span className='empty-image'>Aucune image</span>}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    img{
        object-fit: contain;
        object-position: center;
        height: 100%;
        width: 100%;
    }
    .empty-image{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.greySemiDark};
    }
`
