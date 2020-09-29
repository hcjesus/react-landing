import React from 'react';
import Team from './Team';
import Work from './Work';

const Body = (props) => {
  return (
    <React.Fragment >
    	<div className="col-xs-18 col-md-12 fuente justify-content-start text-center text-light">
    		<h1 className="display-3 text-lite">
    			Jesus
    		</h1>
    		
    	</div>
    	<div className="container divgrad ">
    		<div className="row  body-gradient">
    			<div className="col-xs-6 col-md-6 text-light ">
    				<div className="m-4 p-3 align-items-center text-lite">
		    			<h1 className="text-center titulo display-5 mt-5 mb-0">I AM</h1>
		    			<h1 className="text-center titulo display-5 mb-2">DEVELOPER</h1>
		    			<h1 className="text-center fuente display-5 my-4">Jesus Hernandez Cordero</h1>
		    			
		    				<p className="text-center">Est dolor eiusmod magna consequat do id irure amet elit est cillum in non dolore eu reprehenderit magna nulla velit reprehenderit commodo laborum mollit adipisicing reprehenderit in aliquip.</p>
		    			
		    		</div>
		    		<div className="d-flex justify-content-center ">
		    				<button type="button" className="btn btn-danger btn-fix-flat">Read More</button>
		    			</div>
		    	</div>
		    	<div className="col-xs-6 col-md-6">
		    		
		    	</div>
    			
    		</div>
    		<Team/>
    		<Work/>
    	</div>	
    </React.Fragment>
  )
}

export default Body;