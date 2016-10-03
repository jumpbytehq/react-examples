
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "Dhaval Nagar", text: "another comment from me"}
];

var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: [], loading: true};
	},
	
	componentDidMount: function(){
		setTimeout(function(){
			this.setState({data: data, loading: false});
		}.bind(this), 2000);
	},

	render: function(){
		if(this.state.loading){
			return this.renderLoader();
		}else{
			return this.renderComments();
		}		
	},

	commentSumitted: function(comment){
		comment.id = this.state.data.length + 1;

		var data = this.state.data;
		data.push(comment);

		this.setState({data: data});
	},

	renderComments: function(){
		return (
			<div className="commentBox">
				<h2>Comments</h2>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.commentSumitted}/>
			</div>
		);
	},

	renderLoader: function(){
		return (
			<div>
				Loading data...
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map( function(comment){
			return (
				<Comment name={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}	
});

var Comment = React.createClass({

	rawMarkup: function(){
		var md = new Remarkable();
		var rawMarkup = md.render(this.props.children.toString());
		return { __html: rawMarkup };
	},

	render: function(){

		var commentStyle = {
			paddingBottom: '5px',
			borderLeft: '5px solid #dadada',
			paddingLeft: '20px'
		}

		var nameStyle = {
			color: 'gray'
		};

		var commentTextStyle = {
			'fontWeight':'bold',
			fontSize: '20px'
		};
		
		return (
			<div style={commentStyle}>
				<div dangerouslySetInnerHTML={this.rawMarkup()}></div>
				- <span style={nameStyle}>{this.props.name}</span>				
			</div>
		);
	}
});

var CommentForm = React.createClass({
	getInitialState: function(){
		return {author: '', text: ''};
	},

	handleAuthorChange: function(e){
		this.setState({author: e.target.value});
	},

	handleTextChange: function(e){
		this.setState({text: e.target.value});
	},

	handleSubmit: function(e){
		e.preventDefault();

		var author = this.state.author.trim();
		var text = this.state.text.trim();

		if(!author || !text){
			return;
		}

		this.props.onCommentSubmit({author: author, text: text});

		this.setState({author: '', text: ''});
	},

	render: function(){
		return (
			<form onSubmit={this.handleSubmit} className="CommentForm">
				<h2>Add New Comment</h2>
				Name:<br />
				<input type="text" value={this.state.author} onChange={this.handleAuthorChange}/>

				<br />

				Comment:<br />
				<textarea rows="3" onChange={this.handleTextChange} value={this.state.text}>					
				</textarea><br />
				<button>Submit</button>
			</form>
		);
	}
});

ReactDOM.render(
	<CommentBox data={data} />,
	document.getElementById('content')
);