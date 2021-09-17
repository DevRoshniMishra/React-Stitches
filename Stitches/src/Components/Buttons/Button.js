import { styled } from "@stitches/react";
import React from "react";

const ButtonStyled = styled("button", {
  height: '32px',
  backgroundColor: '#3366FF',
  borderRadius: '4px',
  color: 'White',
  border: 'none',
  outline: 'none',
  marginLeft: '20px',
  padding: '0px 16px',
  marginTop: '20px',
  display: "flex",
  alignItems: "center",
  '&:hover': {
    backgroundColor: '#2952CC',
  },
  '&:focus': {
    backgroundColor: '#2952CC',
    outline: '2px solid #D6E0FF'
  },
  '&:active': {
    backgroundColor: '#1F3D99',
  },
  '&:disabled': {
    backgroundColor: '#D6E0FF',
  },
  variants: {
    buttonType: {
      secondary: {
        backgroundColor: '#fff',
        color: '#474D66',
        border: '1px solid #D8DAE5',
        '&:hover': {
          backgroundColor: '#fff',
          border: '1px solid #8F95B2'
        },
        '&:focus': {
          backgroundColor: '#fff',
          outline: '2px solid #D6E0FF'
        },
        '&:active': {
          backgroundColor: '#fff',
          border: '1px solid #C1C4D6'
        },
        '&:disabled': {
          backgroundColor: '#fff',
          border: '1px solid #E6E8F0'
        }
      },
      minimal: {
        backgroundColor: '#fff',
        color: '#474D66',
        border: '1px solid #D8DAE5',
        '&:hover': {
          backgroundColor: '#fff',
          border: '1px solid #8F95B2'
        },
        '&:focus': {
          backgroundColor: '#fff',
          outline: '2px solid #D6E0FF'
        },
        '&:active': {
          backgroundColor: '#fff',
          border: '1px solid #C1C4D6'

        },
        '&:disabled': {
          backgroundColor: '#fff',
          border: '1px solid #E6E8F0'
        }
      },
      error: {
        backgroundColor: '#D14343',
        color: '#fff',
        border: '1px solid #D14343',
        '&:hover': {
          backgroundColor: '#A73636',
          border: '1px solid #A73636',
        },
        '&:active': {
          backgroundColor: '#7D2828',
          border: '1px solid #7D2828',
          borderRadius: '4px'
        },
        '&:focus': {
          backgroundColor: '#A73636',
          outline: '2px solid #A73636',
          borderRadius: '4px'
        },
        '&:disabled': {
          backgroundColor: '#F9DADA',
          border: '1px solid #F9DADA',
        },

      },
    }
  }
});



const Button = ({ children, leftIcon, rightIcon, type = "primary" }) => {

  return (
    <>

      <ButtonStyled buttonType={type}>  {leftIcon && (
        <div
          style={{
            marginRight: 5
          }}
        >
          {leftIcon}
        </div>
      )}
        {children}
        {rightIcon && (
          <div
            style={{
              marginLeft: 5
            }}
          >
            {rightIcon}
          </div>
        )} </ButtonStyled>;

    </>
  );

};

export default Button;
