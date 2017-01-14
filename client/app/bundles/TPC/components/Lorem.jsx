import React, { PropTypes } from 'react';
import Faker from 'faker';

export default class Lorem extends React.Component {
  static propTypes = {
    links: PropTypes.number,
    title: PropTypes.string,
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      links: this.props.links || 0,
      title: this.props.title || 'title',
    };
  }

  renderParagraphs (links) {
    if (links) {
      return <p>{ Faker.lorem.paragraph() }</p>;
    }
    else {
      return Faker.lorem.paragraphs().split('\n').map((paragraph, index) => {
        return <p key={index} >{paragraph}</p>;
      });
    }
  }

  renderLinks (n) {
    return _.times(n, index => {
      return (
        <div key={index} className='col-sm-3'>
          <button className='btn btn-block'>
            { Faker.commerce.productName() }
          </button>
        </div>
      );
    });
  }

  renderLinkSection (n) {
    if (!n) return;
    return <div className='row'>{ this.renderLinks(n) }</div>;
  }

  render() {
    return (
      <section className='lorem__wrapper row'>
        <div className='col-12'>
          <h2>{ this.state.title }</h2>
          { this.renderParagraphs(this.state.links) }
          { this.renderLinkSection(this.state.links) }
        </div>
      </section>
    );
  }
}
