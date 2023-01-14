import React,{useState} from 'react'

export default function About() {
 const[ myStyle,setmyStyle]=useState({
    color:'white',
    backgroundColor:'black'
 })
 const [btnstyle,setbtnstyle]=useState({
  backgroundColor:'black',
  heigh:'100px',
  color:'white',
  border:'2px solid white'
})
const [btntext,setbtntext]=useState('Enable Dark Mode')
const darkmode=()=>{
  if(myStyle.color ==='white'){
    setmyStyle({
      color:'black',
      backgroundColor:'white'
    })
    setbtnstyle({
      backgroundColor:'black',
      color:'white',
      border:'2px solid black'
    })
    setbtntext("Enable Dark Mode")
  }
  else{
    setmyStyle({
      color:'white',
      backgroundColor:'#3f464d'
    })
    setbtnstyle({
      backgroundColor:'white',
      color:'black',
      border:'2px solid white'
    })
    setbtntext('Enable Light Mode')
  }
}

  return (
    <div>
        <div className="container" style={myStyle}>
        <h1 className="my-4" style={myStyle}>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-dark my-3 " style={btnstyle} onClick={darkmode}>{btntext}</button>
<div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" style={btnstyle} onClick={darkmode}/>
</div>
        </div>

    </div>
  )
}
