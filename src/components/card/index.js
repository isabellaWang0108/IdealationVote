import React from "react"
import "../../index.css"
import Like from "../graphs/like.png"
// import { Link } from "react-router-dom";
import $ from 'jquery';
import fire from "../firebase"
// import Liked from "../graphs/liked.png"

class Card extends React.Component {
    state = {
        cardFaceUp: true
    }

    componentWillMount(){
        fire.database().ref().on("value", function(snapshot) {
            $(".click_value").text(snapshot.val().click_value);
            $(".click_value2").text(snapshot.val().click_value2);
            $(".click_value3").text(snapshot.val().click_value3);
            $(".click_value4").text(snapshot.val().click_value4);
            $(".click_value5").text(snapshot.val().click_value5)
            

        }, function(errorObject) {

            console.log("The read failed: " + errorObject.code);
          });
      }
      

      addMessage(e){
        e.preventDefault(); 
        fire.database().ref(e.target.id).set(parseInt($("."+e.target.id).text())+1);
        $("#"+e.target.id).css("opacity","0");
        $("#"+e.target.id).css("cursor","default");
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
                    <img id={this.props.id} onClick={this.addMessage} className="like" alt="2" src={Like}></img><span className={this.props.id}>{this.state.click_value1}</span>
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