import React, { Component } from 'react';
import { styled } from '@stitches/react';

const Link = styled('p', {
    fontFamily: "SF Pro Text",
    fontWeight: '500',
    fontSize: '14px',
    color: '#3366FF',
    lineHeight: '24px',
    '&:hover': {
        color: '#2952CC',
    },
    '&:active': {
        color: '#1F3D99',
    },
    '&:focus': {
        color: '#2952CC',
        outline: '2px solid #D6E0FF'
    },
    '&:disabled': {
        color: '#C1C4D6',
    },
    '&: visited':{
        color:'#897AE3'
    }
});

export default class Links extends Component {
    render() {
        return (
            <>
                <section className="parent_section">
                    <h4>Link </h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Link with Pseudo Effects</h5>
                                        <Link> Label </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
