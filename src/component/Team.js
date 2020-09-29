import React from 'react';

const Team = (props) => {
  return (
    <div id="team" className="row justify-content-center team-gradient pt-5 text-lite-2">
	    <div className="col-md-6 text-right text-uppercase mb-5">
	    	<h5 className="m-3 mb-3">creative design & <br/> professional</h5>
	    	<p className="text-right"><small>Eiusmod in eiusmod quis
	    		 exercitation ea duis quis ut ut commodo ut in laboris.
	    		Sint mollit enim dolore cupidatat sunt sint aute cillum
	    	 do nostrud esse in mollit cillum dolor veniam amet cupidatat 
	    	 nisi dolor ad et officia mollit amet fugiat.</small></p>
	    	 <p className=" text-right"><small>Eiusmod in eiusmod quis
	    		 exercitation ea duis quis ut ut commodo ut in laboris.
	    		Sint mollit enim dolore cupidatat sunt sint aute cillum
	    	 do nostrud esse in mollit cillum.</small></p>
	    	 <div className="d-flex justify-content-end mt-5 text-lite">
		    		<button type="button" className="btn btn-danger btn-fix-flat">Read More</button>
		    	</div>
	    </div>
	    <div className="col-md-6 text-left text-uppercase row ">
	    	<h5 className="m-3 mb-3">our team</h5>
	    	<div >
		    	<img className="imgformat rounded-circle mr-2" src="/images/avatar.png" alt="image"/>
		    	<p className="mt-0" ><small>Lorem ipsum ut sint proident nisi eiusmod ut quis consequat ut cupidatat 
		    		incididunt ut anim.</small></p>
	    	</div>
	    	<div>	
		    	<img className="imgformat rounded-circle mr-2" src="/images/woman.png" alt="image"/>	
		    	<p className="mt-0" ><small>Lorem ipsum ut sint proident nisi eiusmod ut quis consequat ut cupidatat 
		    		incididunt ut anim.</small></p>
	    	</div>
	    	<div>	
		    	<img className="imgformat rounded-circle mr-2" src="/images/busines.png" alt="image"/>	
		    	<p className="mt-0" ><small>Lorem ipsum ut sint proident nisi eiusmod ut quis consequat ut cupidatat 
		    		incididunt ut anim.</small></p>
	    	</div>
	    </div>
	    <div className=" mt-5 semi-circle">  
	          
        </div>
    </div>
  )
}

export default Team;