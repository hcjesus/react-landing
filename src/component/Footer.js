import React from 'react';

const Footer = (props) => {
  return (
    <div id="contact" className="container ">
    	<div className="col-12 text-lite-2">
    		<h5 className="mt-5 text-center">GET IN TOUCH</h5>
    	</div>
    	
    	<form >
    		<div className="row justify-content-center">
	    		<div className="col-md-10 ">
		    		<div className="form-inline ">
			    		<div className="form-horizontal col-md-6  p-0 ">
			    			<div className="col-md-12 ">
			    				<input type="text" className="form-control mb-1 input-field" size="38" placeholder="NAME:"/>
			    			</div>
			    			<div className="col-md-12 ">
			    				<input type="text" className="form-control mt-1 input-field" size="38" placeholder="EMAIL:"/>
			    				
			    				
			    			</div>
			    		</div>
			    		<div className="form-horizontal col-md-6    p-0">
				    		<div className=" col-md-12 my-1 d-flex ">
				    			<textarea className="form-control flex-grow-1 input-field" rows="3" placeholder="MESSAGE:"></textarea>
				    		</div>
			    		</div>
		    		</div>
		    		<div className="d-flex justify-content-center my-3">
		    			<button type="submit" className="btn btn-danger btn-fix-flat-2">SUBMIT</button>
		    		</div>
		    		<div className="text-center text-lite-2 mt-5">
		    			<p><small>Adress Street Amazing Wonderland 73  |  Call 999 000 555</small></p>
		    		</div>
	    		</div>
    		</div>
    	</form>
        
    </div>
  )
}

export default Footer;