import React, { PropTypes } from 'react';
import _ from 'lodash';
import Lorem from '../components/Lorem';

export default class Home extends React.Component {
  static propTypes = {
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor (props, _railsContext) {
    super(props);
    this.state = {
      sections: [
        <Lorem title='value proposition' />,
        'writing groups',
        'discussion groups',
        'classes',
        <Lorem title='testimonials' />,
        <Lorem title='proof point 1' />,
        <Lorem title='proof point 2' />
      ]
    };
  }

  renderSections (sections) {
    return sections.map((section, index) => {
      if (typeof section === 'string') return section;
      return React.cloneElement(section, { key: index });
    })
  };

  render () {
    return (
      <main className='home__wrapper container-fluid'>
        { this.renderSections(this.state.sections) }
      </main>
    );
  }
}
