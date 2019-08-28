import React, {Component} from 'react';


class Post extends Component {
	constructor(props){
		super(props);
		/*this.props = props;*/
		
		/*setTimeout(()=>{
			this.setState({likes: 10})
		},3000)*/
		
		this.state = {
			likes: 0,
			
		}
	} 
	
	addLike(){
		this.setState({likes: this.state.likes +1})
	}
	render(){ 
		return(
			<div>
				<h4>Post</h4>
				<p>{this.props.autor}</p>
				<h5>{this.props.title}</h5>
				<img src = {this.props.image} alt='img' />
				<br />
				<button onClick={this.addLike.bind(this)}>Like</button>
				<p>Likes: {this.state.likes}</p>
			</div>
		)
	}
}

export default Post;