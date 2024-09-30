import React from "react"; 
import {Helmet,HelmetProvider} from "react-helmet-async";
import "./Head.css"


function Head() { 
    return ( 
        <HelmetProvider> 
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
                <title>Veterinaria</title>
            </Helmet>
        </HelmetProvider> 
    ); 
} 

export default Head;
