import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const FeturesData = [
    {   id:1,
        title: "Improving end distrusts instantly ",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. "
    },
    {   id:3,
        title: "Improving end distrusts instantly ",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. "
    },
    {   id:3,
        title: "Message or am nothing ",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. "
    },
    {   id:4,
        title: "Really boy law county",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. "
    }

]

const Features = () => {
    return (
        <div className="gpt3_features section__padding" id="features">
          <div className="gpt3__features-heading">
               <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
            <p> Request Early Access to Get Started</p>
          </div>
          <div className="gpt3__features-container">
            { FeturesData.map(({text,title, id}) => (
                <Feature text={text} title={title} key={id}/>)) 
            }
          </div>
           
        </div>
    )
}

export default Features
