import React, { Component } from 'react';
import FormAttributes from './FormAttributes';

export default class FormInput extends Component {
    render() {
        return (
            <>
                <section>
                <h4>Text</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4 style={{marginBottom:'40px'}}>Standard</h4>
                                        <FormAttributes placeholder="placeholder"></FormAttributes>
                                        

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
