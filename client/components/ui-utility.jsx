import React,{Component} from 'react';

// Add TextBox Component
class TextBox extends Component {
  render() {
    return (
      <input className='form-control' 
          name={this.props.name}
          type='text' 
          placeholder={this.props.name+' (maxLength=255)'}
          value={this.props.value}
          maxLength={255} // Not allow exceeds 255 character
          onChange={this.props.onChange} required/>
    );
  }
};
export default TextBox;
