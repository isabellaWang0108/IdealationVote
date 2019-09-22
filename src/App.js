import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css"
import Card from "./components/card"
import Title from "./components/graphs/title.png"
// import firebase from 'react-native-firebase';



class App extends Component {

  render() {

    const space = {
      marginTop: '1em'
    }
    return (

      <div className="container">
        <img style={space} src={Title} alt="1" />
        <h2>What will we become, now that life means living with computers?</h2>
        <div className="top-Spacing"></div>
        <Card content="What if AI replaces most of the works we are doing now? Where is our future?"
          medium="Software"
          audiences="Graphic designers"
          id="click-value1"
        >
          <p>After the AI becomes more and more popularized, people start to be afraid they will take over our jobs. In the design field, we already have AI that can make design variations, picking color and doing layouts. However, they won’t necessarily make the best choice. It is human feed those machine data and develop measurable matrix to make a machine being able to function. The database and matrix decides their outcome. Thus it is predictable. Those with the same references produce similar result. Just like Wix, SquareSpace, they are what makes the commercial websites all look the same, because they have the same references.
              <br /><br />
            What if each designer is a reference point and each AI is a super version of designers themselves? Then, designs won’t look all the same. I believe in the future, with the help of AI, designers can make works for client within a few clicks. The value of a designer is the logics of their own matrix and the data points they feed their own machine. And by then, there will be laws protecting the authority of points. Those matrix using only public data will be boring and look the same."
            </p>
        </Card>

        <Card content="What if information will directly be displayed on the retina of the eye"
          medium="Spatial graphic / exhibition graphic"
          audiences="Smart Lens Contact Evangelists "
          id="click-value2"
        >
          <p>
            It is no longer a tale that in the future, humans can get rid of phones and receive information from lens contacts. There are bunches of companies put dedication into research like Samsung, Sony, Google, Columbia University Medical Centre, Sensimed, University of Michigan, U.S. Department of Defense, Swiss Federated Institute of Technology in Lausanne, Medella, Novartis.  Sony has applied for a patent for a smart contact lens which can convert eye movement into electrical power, which you control through blinking your eyes. The lens can actually store images or video once recorded.
            <br /><br />
            This innovation will radically change the interface we are all familiar with today. The user pattern and information display will be different. It will not be like in the movie that bubbles with texts will pop up on people’s heads, because when image is directly displayed on the retina, there is no way to have multiple focal points. Humans won't be able to see any shape or texts located on the split vision. Any blinks, change of light, color will be unbelievably significant, unlike when they blink or change on the screen. What will the interface by than look like and the interaction for performing simple tasks?
          </p>
        </Card>


        <Card content="What if websites have sensor which can idendity the condition of users"
          medium="Website"
          audiences="UX Enthusiasts"
          id="click-value3"
        >
          <p>Today, user experience is gaining more and more attention. Below are the top 12 trends in 2019
1.Photos Driven Interfaces
2.Responsive UX
3. Themes and Color Palettes
4. Illustrations
5. Flat Design → Material Design
6. Promote Video Content
7. Landing Pages and Parallax Scrolling
8. Personalized UX
9. Voice Activated Interfaces
10. AR and Foldables
11. Variable Fonts
12. UX Design for B-Models
 <br /><br />
            Companies are using lots of emerging technologies cookies, AIs and voice activation to customize the UX online. What if the computers can detect more sensors. They have the reception system build in already. They have touch screen, camera, speaker, recorders already. What if we can camera to identify the audiences and making web page responsive to their identity and environment? For example, a website will automatically have different UI for blind people, those with low vision and a group of people looking at it based on what sensors detect.
 </p>

        </Card>




        <Card content="What if those who have no full muscle functions want to enjoy internet like normal?"
          medium="Application"
          audiences=" locked-in syndrome patients"
          id="click-value4"
        >
          <p>There are lots of people live a different life from what we do because of disability. Those who have no full ability to move may not be able to perform any activities we can like browsing the internet, ordering delivery online, or chat with people, because it takes them forever to move the cursor on screen.
<br /><br />However, with the help of brain–computer interface and assistive technology, they can deliver simple messages like yes or no, even clicking. How can we as designers help them to access full function of Internet based on simple input of yes or no, maybe with slight tapping?
<br /><br />Maybe there can be a special application can help them perform all the interaction with simple input of yes or no.
 </p>
        </Card>


        <Card content="What if technology can be used to shorten the learning curve of graphic design"
          medium="Software"
          audiences="Graphic design students"
          id="click-value5"
        >
          <p>As a graphic designer, do you have sometime feel yourself have “disability” on certain design aspects, like typeface, color, spacing, motion? At least I have, i had trouble with typeface. There was a period in my design life I could not tell tone, readability or decency of a typeface. Whenever I asked my professors, answers are always like to practice more, look more, try more. That’s so ambiguous. Gathering and analyzing different samples are a pain in the ass. It is so time consuming. What if the information technology can help us to gather data, and providing informational hints about what makes a design horrible or good based on what we want to learn? For example, what if a tool can tell me that “you make a horrible choice of using Baskerville because of its uneven capitals”, then it gives me resources about the use of Baskerville and proper body text typeface guidelines, history of Baskerville. I swear it will significantly shorten the learning curve for a designer. The whole graphic design learning is still analogue right now. </p>
        </Card>

        <br />
        <div className="top-Spacing"></div>
        <div className="top-Spacing"></div>
      </div>

    )
  }
}

export default App;