import React from "react"
import "../../index.css"
import Like from "../graphs/like.png"
// import { Link } from "react-router-dom";
// import $ from 'jquery';
import fire from "../firebase"

class Card extends React.Component {
    state = {
        cardFaceUp: true,
        clickCounter: 0
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
          /* Update React state when message is added at Firebase Database */
          let message = { text: snapshot.val(), id: snapshot.key };
          this.setState({ messages: [message].concat(this.state.messages) });
        })
      }
      addMessage(e){
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        fire.database().ref('messages').push( this.inputEl.value );
        this.inputEl.value = ''; // <- clear the input
      }

    changeContent = () => {
        this.setState({
            cardFaceUp: false
        })
    }
    changeBack = () => {
        this.setState({
            cardFaceUp: true
        })
    }
    render(props) {

        return (
            this.state.cardFaceUp ?
                <div className="card">
                    <div className="click" onClick={this.changeContent}>
                        <h2>Content:</h2>
                        <h1>{this.props.content}</h1>
                        <br />
                        <h2>Medium:</h2>
                        <h1>{this.props.medium}</h1>
                        <br />
                        <h2>Audiences:</h2>
                        <h1>{this.props.audiences}</h1>
                        <br /><br />
                    </div>
                    <img onClick={this.count} className="like" alt="2" src={Like}></img><span id={this.props.id}>1</span>
                    <br />
                </div> :
                <div className="card">
                    <div className="click" onMouseLeave={this.changeBack}>
                        <br />
                        {this.props.children}
                    </div>
                </div>

        )
    }
}
export default Card;