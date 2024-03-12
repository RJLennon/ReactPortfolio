import React from 'react';

export default function Project({imageURL, projectName, projectURL, projectDescription}) {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src={imageURL} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </div>
                <div class="card-content">
                    <p>
                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                    </p>
                </div>
                <div class="card-action">
                    <a href={projectURL}>{projectName}</a>
                </div>
            </div>
        </div>                    
    );
};