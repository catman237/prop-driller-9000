import React, { Component } from 'react';
import Transformer from '../Components/Transformer.js'

class TransformersSection extends Component {

displayTransformers = () => {
  return this.props.transformers.map(transformer => {
    return <Transformer transformer={transformer}/>
  })
}

  render() {
    return (
      <section className = "transformers-section">
        {this.props.isVisible ? this.displayTransformers() : '' }
      </section>
    );
  }
}

export default TransformersSection;
