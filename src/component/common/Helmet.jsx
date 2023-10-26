import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Benjamin Max Levy</title>
                    <meta name="description" content="Benjamin Max Levy's portfolio website: BMLevy.me." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
