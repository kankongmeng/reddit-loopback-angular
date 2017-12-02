import React,{Component} from 'react';
import PostForm from './add-post.jsx';

//List of topics
class RepeatModule extends Component {
  // Initialization  
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: true
    };
  }
  
  // Get all post from rest API
  getPostData() {
    // Host come from utility.js
    var url = host+'/api/Posts?access_token=aGNF04XBPW8pbBS31WUb23Gu5B8FqHeTjCZ6Q06mur1RYUddK4eTT5i4Niqiefem';
    axios.get(url)
      .then(response => {
        this.setState({posts: response.data, loading: false});
      })
      .catch(function (error) {
        console.log(error);
      });      
  }
  
  componentDidMount() {
    this.getPostData();
  }
  
  // When user click upvotes
  clickAdd(i, e) {
    this.state.posts[i].points += 1;
    this.setState({posts: this.state.posts});
  }
  
  // When user click downvotes
  clickMinus(i, e) {
    this.state.posts[i].points -= 1;
    this.setState({posts: this.state.posts});    
  }
  
  // When user add post
  handleToUpdate(){
    this.getPostData();
  }
  
  // When image url not valid
  onError(i, e) {
    this.state.posts[i].imageURL = '../assets/images/noImage.png';
    this.setState({posts: this.state.posts});
  }
  
  // Rending content
	render() {
    var	handleToUpdate	=	this.handleToUpdate;
    var postsData = this.state.posts;
    // sort by upvotes, descending.
    postsData.sort((a, b) => b.points - a.points);
    
    var listItems = "";
    
    if (this.state.loading) {
      listItems = <div className="loader"></div>;
    } else {
      listItems = postsData.map(function(post, i) {
        return (
          <div key={post.id}>
            {/* Inline with the ternary operator inside the JSX block to append child component */}
            {i == 0 &&
              <div id="showNewPostForm" className="container">
                <PostForm handleToUpdate = { handleToUpdate.bind(this) } />
                <br/>
              </div>
            }
            
            {/* More inline aesthetic, define immediately-invoked function expressions inside JSX */}
            {(() => {
              if(i == 0) {
                $(document).ready(function(){
                  // Hide the post when init
                  document.getElementById("showNewPostForm").style.display = "none";
                });                
              }
            })()}
      
            <div className="well cc-well">
              <div className="image-container" ng-animate="'animate'">
                <img src={ post.imageURL } onError={ this.onError.bind(this, i) } />
              </div>
              
              <div className="post-info">
                <h3>#{ i+1 } { post.title } | <span> </span>
                  <i onClick={ this.clickAdd.bind(this, i) } className="fa fa-thumbs-up green" aria-hidden="true"></i>
                  <span> </span>
                  <i onClick={ this.clickMinus.bind(this, i) } className="fa fa-thumbs-down red" aria-hidden="true"></i>
                </h3>
                
                <h4><div className={(post.points > 0 ? 'green' : 'red')}>Treding: { post.points }</div></h4>
                <p className="author"> By: { post.author } </p>
                <p> { post.topic } </p>
                <p> { post.timestamp } </p>
              </div>
            </div>
          </div>
        );
        i++;
      }.bind(this));
    }
    
		return (
      <div>
        {listItems}
      </div>
		);
	}
};
export default RepeatModule;
