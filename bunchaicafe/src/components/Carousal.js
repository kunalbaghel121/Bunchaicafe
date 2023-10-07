import React from 'react'

export default function Carousal() {
  return (
    <div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>

  <div className="carousel-caption" style={{zIndex:"10"}} >
<form class="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-info text-white bg-info" type="submit">Search</button>
    </form>
</div>


    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/1200×700/?burger" className="d-block w-100 h-50" style={{filter:"brightness(30%)"}} alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1200×700/?pastry" className="d-block w-100 h-50" style={{filter:"brightness(30%)"}} alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1200×700/?pastry/?barbeque" className="d-block w-100 h-50" style={{filter:"brightness(30%)"}} alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  

</div>
    </div>
  )
}
