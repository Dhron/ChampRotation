var React = require('react'); //need react

//want to generate card-like components, and want to export them to index, so then index
//can render the components onto my index.html

AllChamps = React.createClass({
	render: function() {
		return(
			//this will be a row of champs
    <div>
                <Champ> </Champ>
    </div>
              );
	}
});

Champ = React.createClass({
	getInitialState: function(){
		return{
			expanded: false; //initial state of the champion row
		}
	},
	changeExpand: function(ev){ //takes in an event
		this.setState({
			expanded: !this.state.expanded
		});
	},
	render: function(){
		return(
			{ this.state.expanded ? //if I'm in my expanded state
				<p>Ryze Expanded</p> 
				<button onClick={this.changeExpand}>Collapse</Button>
				:
				<p>Ryze Collapsed</p> 
				<button onClick={this.changeExpand}>Expand</Button>
			}
		}
		);
	
});


React.render(<AllChamps />, document.getElementById('app'));
