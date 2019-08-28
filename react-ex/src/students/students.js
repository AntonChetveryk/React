import React from 'react';

const Student = ({name = "Default name", tasks = 'Default task'}) => {
	return (
		
		<div>
		 	<h3>{name}</h3>
			<p>Done tasks: <span>{tasks}</span></p>
			
		</div>
		
	)
}

/*export default Student*/