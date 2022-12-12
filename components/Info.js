import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="info-img" id="info-img" src="./images/kalai.jpg" />
            <h1>Kalaimani Kannan</h1>
            <h3>Frontend Developer</h3>
            <a href="#" className="small">Kalaimani Kannan website</a>
            <div className="btn-links">
                
                <a href="#" target="_blank"><button className="btn btn-mail"><img className="btn-img-mail" src="./images/mail.png"/>Mail</button></a>
                <button className="btn btn-linkedin"><img className="btn-img-linkdedin" src="./images/linkedin.png"/>LinkedIn</button>
            </div>
        </div>
    )
}
