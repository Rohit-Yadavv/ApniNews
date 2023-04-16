import React from 'react'
export default function NewsItem(props) {
    return (
        <div className="card my-5 newsCard placeholder-glow" aria-hidden="true" >
            {props.imageurl ? <img style={{ borderRadius: "15px", height: '215px' }} src={props.imageurl} alt="image" /> : <img className='placeholder' style={{ borderRadius: "15px", height: '215px' }} alt="image" />}
            <div className="card-body">
                <span className="card-text"><small className="text-muted">{props.name}</small></span>
                <h5 className="card-title ">{props.title ? props.title.slice(0, 50) : ""}...</h5>
                <p className="card-text ">{props.description ? props.description.slice(0, 100) : ""}...</p>
                <p className="card-text"><small className="text-muted">Updated on {new Date(props.date).toGMTString()}</small></p>
                <a href={props.url} target="_blank" className="btn mb-3 btn-primary">Read More</a>
            </div>
        </div >
    )
}

