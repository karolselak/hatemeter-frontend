import React from "react";
import Rating from "react-rating";
import '../App.css';

export default class MoodRatio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageId: this.props.messageId, rate: 0, date: "" };
    this.rating = React.createRef();
  }

  async onSubmitRating() {
    await this.setState({ rate: this.rating.current.state.value, date: Date.now() });
    console.log(this.state);
  }

  render() {
    return (
      <div className="rate-container">
        <p>Oceń swoje samopoczucie:</p>
        <Rating
          ref={this.rating}
          name="rate"
        />
        <br />
        <button
          className="ui positive button"
          onClick={this.onSubmitRating.bind(this)}
        >
          Prześlij
        </button>
      </div>
    );
  }
}
