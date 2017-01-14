import React, { PropTypes } from 'react';
import Faker from 'faker';

export default class Lorem extends React.Component {
  static propTypes = {
    title: PropTypes.string
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      title: this.props.title || 'title'
    };
  }

  renderParagraphs () {
    return Faker.lorem.paragraphs().split('\n').map((paragraph, index) => {
      return <p key={index} >{paragraph}</p>;
    });
  }

  render() {
    return (
      <section className='lorem__wrapper row'>
        <div className='col-12'>
          <h2>{ this.state.title }</h2>
          { this.renderParagraphs() }
        </div>
      </section>
    );
  }
}
