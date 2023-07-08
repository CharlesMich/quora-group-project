import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-tex-img">   
                    <div className="img-container">
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/html5.png" alt="" /></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/css.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/js.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/react.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/redux.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/python.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/postgress.png" alt=""></img></div>
                        <div className="imgClass"><img className="footer-img" src="https://myaaprojects.s3.us-east-2.amazonaws.com/flask.png" alt=""></img></div>
                    </div>
                    <div className="footer-text"><p className="footer-text-p">Designed and developed by Brian, Charles, Giovanni, & Marcos</p>
                    </div>
            </div>    
        </div>
    )
}

export default Footer