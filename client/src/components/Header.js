import React from "react";

export const Header = () => {
    return (
        <header
            style={{
                position:'fixed',
                backgroundColor:'yellow',
                backgroundSize:'cover',
                padding:'5% 0',
                top: '0',
                width:'100%',
                height:'2.5rem'
            }}
        >
            <h3
                style={{
                    textAlign:'center',
                    color:'black'
                }}
            >Top 20 Most Ordered Pizzas</h3>

        </header>
    )
}