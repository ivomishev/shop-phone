import React, { Component } from 'react'

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center  d-lg-block">
                <div className="row">

                    <div className="col-10 mx-auto col-lg-2 ">
                        <p className="text-uppercase d-none d-lg-block ">products</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase d-none d-lg-block ">name of product</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase d-none d-lg-block">price</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase d-none d-lg-block">quantitiy</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase d-none d-lg-block">remove</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase d-none d-lg-block">total</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default CartColumns;
