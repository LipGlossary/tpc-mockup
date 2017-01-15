import React, { PropTypes } from 'react';
import Faker from 'faker';
import c from 'classnames';

export default class Lorem extends React.Component {
  static propTypes = {
    carousel: PropTypes.number,
    links: PropTypes.number,
    paragraphs: PropTypes.number,
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
      carousel: this.props.carousel || 0,
      links: this.props.links || 0,
      paragraphs: this.props.paragraphs || this.props.carousel ? 0 : (this.props.links ? 1 : 3),
      title: this.props.title || 'title',
    };
  }

  renderCarousel (n) {
    if (!n) return false;

    let id = `carousel-${Faker.helpers.randomize()}`;

    function renderCarouselItems () {
      return _.times(n, index => {
        let classes = c(
          'carousel-item',
          'row',
          'align-items-center',
          { active: !index }
        );
        return (
          <div className={classes} key={index}>
            <div className='col-sm-4'>
              <img className="img-fluid img-thumbnail" src={Faker.image.image()} alt={`Slide ${index}`} />
            </div>
            <div className='col-sm-8'>
              <p>{ Faker.lorem.sentence() }</p>
              <cite className='d-block text-right small'>
                &mdash;&nbsp;
                <strong>{ Faker.name.findName() }</strong>
                ,&nbsp;<br />
                { Faker.name.jobTitle() }
              </cite>
            </div>
          </div>
        );
      });
    }

    return (
      <div id={id} className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner col-10 offset-1' role='listbox'>
          { renderCarouselItems() }
        </div>
        <a className='carousel-control-prev col-1' href={`#${id}`} role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next col-1' href={`#${id}`} role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    );
  }

  renderParagraphs (n) {
    return _.times(n, index => {
      return <p key={index}>{ Faker.lorem.paragraph() }</p>;
    });
  }

  renderLinkSection (n) {
    if (!n) return false;

    function renderLinks () {
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

    return <div className='row'>{ renderLinks() }</div>;
  }

  render() {
    return (
      <section className='lorem__wrapper row'>
        <div className='col-12'>
          <h2>{ this.state.title }</h2>
          { this.renderCarousel(this.state.carousel) }
          { this.renderParagraphs(this.state.paragraphs) }
          { this.renderLinkSection(this.state.links) }
        </div>
      </section>
    );
  }
}
