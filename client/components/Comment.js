import React from "react";

const Comment = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              i
            )}
            className="remove-comment"
          >
            &times;
          </button>
        </p>
      </div>
    );
  },

  handleSubmit(event) {
    event.preventDefault();

    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    console.log(this.props.addComment(author, comment));

    this.props.addComment(postId, author, comment);
  },

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comment;
