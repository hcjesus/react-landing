import React from 'react';

const Work = (props) => {
  return (
    <div id="work" className="row justify-content-center text-uppercase work-gradient ">
    	<div className="col-md-12">
    		<h3 className="mt-5 text-center">selected work</h3>
    	</div>
    	<div className="container">
    		<div className="row justify-content-center">
    			<div className="col-md-2 p-1  ">
	    			<a className="btn btn-outline-secondary d-flex flex-fill justify-content-center btn-fix" href="#">ALL</a>
	    		</div>
	    		<div className="col-md-2 p-1">
	    			<a className="btn btn-outline-secondary d-flex flex-fill justify-content-center btn-fix" href="#">web design</a>
	    		</div>
	    		<div className="col-md-2 p-1">
		    		<a className="btn btn-outline-secondary d-flex flex-fill justify-content-center btn-fix" href="#">logo design</a>
		    	</div>
		    	<div className="col-md-2 p-1">
		    		<a className="btn btn-outline-secondary d-flex flex-fill justify-content-center btn-fix" href="#">branding</a>
		    	</div>
		    </div>	
    	</div>
    	<div className="container">
    		<div className="row justify-content-center mt-3">
	    		<img className="imggridformat  " src="/images/computer.jpg" alt="image"/>
	    		<img className="imggridformat  " src="/images/home-office.jpg" alt="image"/>
    		</div>
    		<div className="row justify-content-center ">
	    		<img className="imggridformat  " src="/images/laptop.jpg" alt="image"/>
	    		<img className="imggridformat  " src="/images/office-8.jpg" alt="image"/>
    		</div>
    	</div>
    	<div className="semi-circle-2 mt-5">  
	           
        </div>
    </div>
  )
}

export default Work;