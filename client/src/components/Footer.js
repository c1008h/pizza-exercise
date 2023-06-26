import React from 'react'

export const Footer = () => {
    return (
        <footer 
            className='footer' 
            style={{
                position:'fixed',
                backgroundColor:'yellow',
                backgroundSize:'cover',
                padding:'5% 0',
                bottom: '0',
                width:'100%',
                height:'2.5rem'
            }}>
            <p 
                id='footer-text'
                style={{
                    textAlign:'center',
                    color:'black'
                }}
            >
                Copyright © 2023 Chris Hong
            </p>
        </footer>
    )
}