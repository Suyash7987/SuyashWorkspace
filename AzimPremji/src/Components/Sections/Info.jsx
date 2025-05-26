import React from 'react'

const Info = ({data}) => {
   console.log(data)
    return (
    <div className="card mb-4">
              <img id="Img1" src={data?.img} alt="Main" className="card-img-top" />
              <div className="card-body">
                <span className="badge bg-light text-dark">{data?.title}</span>
                <h5 className="card-title mt-2">{data?.subtitle}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    {data?.Author}
                  </small>
                </p>
              </div>
            </div>
  )
}

export default Info