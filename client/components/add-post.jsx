import React,{Component} from 'react';
import TextBox from './ui-utility.jsx';

// Add PostForm Component
class PostForm extends Component {
    //Initialization
    constructor() {
      super();
      this.state = {
        form: { 
          title: '', 
          author: '', 
          imageURL: '', 
          topic: ''
        }
      };
    }

    onChange(event) {
      this.state.form[event.target.name] = event.target.value;
      this.setState({form: this.state.form});
    }
    
    // When user submit post
    onSubmit(event) {
      event.preventDefault();
      
      // Construct object to post
      const newPost = {};
      newPost.title = this.state.form.title;
      newPost.author = this.state.form.author;
      newPost.imageURL = this.state.form.imageURL;
      newPost.topic = this.state.form.topic;
      newPost.timestamp = new Date();
      newPost.points = 0;
      
      // Host come from utility.js
      var url = host+'/api/Posts?access_token=aGNF04XBPW8pbBS31WUb23Gu5B8FqHeTjCZ6Q06mur1RYUddK4eTT5i4Niqiefem';
      // Post to server
      var self = this;
      axios.post(url, newPost)
        .then(function (response) {
          // Clear and hide the form
          self.setState({form: { 
            title: '', 
            author: '', 
            imageURL: '', 
            topic: ''
          }});
          
          // Re-render JQuery Stuff
          $(document).ready(function() {
            $('#showNewPostForm').toggle();
            $("span").remove();
            $('input[maxlength]').maxlength();
          });
          
          // Show post successfully and trigger update to parent
          var	handleToUpdate = self.props.handleToUpdate;
          handleToUpdate();
          alert("Congratz, you added a post with title ("+response.data.title+")");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    render() {
      return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <TextBox name='title' 
            value={this.state.form.title}
            onChange={this.onChange.bind(this)}/>
          <TextBox name='author'
            value={this.state.form.author}
            onChange={this.onChange.bind(this)}/>
          <TextBox name='imageURL'
            value={this.state.form.imageURL}
            onChange={this.onChange.bind(this)}/>
          <TextBox name='topic'
            value={this.state.form.topic}
            onChange={this.onChange.bind(this)}/>
          <button className='btn btn-success' 
            type='submit'>Submit</button>
        </form>
      );
    }
};
export default PostForm;
