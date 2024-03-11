import React from 'react';

export default function Project({imageURL}) {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src={imageURL} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                    <span class="card-title red">Card Title</span>
                </div>
                <div class="card-content">
                    <p>
                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>                    
    );
};