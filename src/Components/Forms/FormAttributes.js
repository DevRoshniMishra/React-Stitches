import { styled } from "@stitches/react";
import React from "react";

const FormInput = styled("input", {

    width: '216px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid #D8DAE5',
    backgroundColor: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#8F95B2',
    padding: '8px 12px',
    '&:hover': {
        color: '#696F8C'
    },
    '&:focused': {
        color: '#696F8C',
        outline: '1px solid #9DB5FF'
    },
    '&:disabled':{
        color:'##8F95B2',
        backgroundColor:'#F4F6FA',
        border:'1px solid #E6E8F0'
    },
    variants: {
        formType: {
            filled: {
                color: '#474D66',
                border: '1px solid #D8DAE5'
            },
            error: {
                color: '#474D66',
                border: '1px solid #D14343',
                text:'Error Message'
            }
        }
    }
});

const FormAttributes = ({ children, type = "input" }) => {
    return <FormInput formType={type}>{children}</FormInput>;
};

export default FormAttributes;


