import React from 'react';
import HornedBeast from './HornedBeast.js'
import beastData from "../data.json"

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hbArray: beastData
    };
  }

  render() {
    return (

      <div className="main">

        {this.state.hbArray.map(beast => {
          return (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              img_url={beast.image_url}
              description={beast.description}
              handleClick={ () => this.props.selectBeast(beast)}
            />
          )

        })}

      </div>
    )
  }
}

export default Main; 