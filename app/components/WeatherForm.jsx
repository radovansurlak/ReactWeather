let React = require('react');

let WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    location.length > 0 ? (this.refs.location.value="",this.props.onSearch(location)) : null;
  },

  render: function(){
    return (
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input ref="location" type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
