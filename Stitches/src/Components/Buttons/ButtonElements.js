import React, { Component } from 'react';
import { styled } from '@stitches/react';
import '../Buttons/Style.css';
import Button from './Button';

const HomeIcon = () => {
    return (
        <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
      </svg>
    );
};

export default class ButtonElements extends Component {
    render() {
        return (
            <>
                <section className="parent_section"> 
                    <h4>Primary Buttons</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Pseudo Effects</h5>
                                        <Button> Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Left Icon</h5>
                                        <Button> <i className="fa fa-comments-o comment_icon_left" aria-hidden="true"></i> Label</Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Right Icon</h5>
                                        <Button>Label <i class="fa fa-caret-down dropdown-icon" aria-hidden="true"></i> </Button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="parent_section">
                    <h4>Secondary  Buttons</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Pseudo Effects</h5>
                                        <Button type="secondary" leftIcon={<HomeIcon />} > Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Left Icon</h5>
                                        <Button type="secondary" leftIcon={<i className="fa fa-comments-o comment_icon_left" aria-hidden="true"></i>}> Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Right Icon</h5>
                                        <Button type="secondary"> Label <i class="fa fa-caret-down dropdown-icon" aria-hidden="true"></i> </Button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="parent_section">
                    <h4>Minimal  Buttons</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Pseudo Effects</h5>
                                        <Button type="minimal"> Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Left Icon</h5>
                                        <Button type="minimal"> <i className="fa fa-comments-o comment_icon_left" aria-hidden="true"></i>  Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Right Icon</h5>
                                        <Button type="minimal" > Label <i class="fa fa-caret-down dropdown-icon" aria-hidden="true"></i> </Button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="parent_section">
                    <h4>Error  Buttons</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Pseudo Effects</h5>
                                        <Button type="error"> Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Left Icon</h5>
                                        <Button type="error"> <i className="fa fa-comments-o comment_icon_left" aria-hidden="true"></i>  Label </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="buttonnames">Button with Right Icon</h5>
                                        <Button type="error"> Label <i class="fa fa-caret-down dropdown-icon" aria-hidden="true"></i> </Button>
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
