import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './header.scss';
import guatemala from './images/banners/guatemala.jpg';
import london from './images/banners/london.jpg';
import londongraffiti from './images/banners/londongraffiti.jpg';
import londongraffiti2 from './images/banners/londongraffiti2.jpg';
import natalie from './images/banners/natalie.jpg';
import ows from './images/banners/ows.jpg';
import standing_stones from './images/banners/standing_stones.jpg';
import tuscany from './images/banners/tuscany.jpg';
import venice from './images/banners/venice.jpg';

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      banner: this.selectBanner(),
      countries: [
        'ecuador',
        'peru',
        'bolivia',
        'argentina',
        'india',
        'thailand',
        'cambodia'
      ],
      country: 'default'
    }

    this.selectCountry = this.selectCountry.bind(this)
  }

  selectBanner() {
    const banners = [
      { img: london, text: 'The Thames' },
      { img: londongraffiti, text: 'London street art on Brick Lane - ouch!' },
      { img: londongraffiti2, text: 'London street art on Brick Lane' },
      { img: natalie, text: 'Natalie climbing a Roman Amphitheater in Ostia Antica, Italy' },
      { img: ows, text: 'Protest in Rome - car set on fire, crazy!' },
      { img: standing_stones, text: 'The Standing Stones of Scotland' },
      { img: tuscany, text: 'Tuscan countryside' },
      { img: venice, text: 'Venice roof tops' },
      { img: guatemala, text: 'Mayan temple' }
    ]

    return banners[Math.floor(Math.random()*banners.length)];
  }

  selectCountry(event) {
    this.props.history.push(`/tag/${event.target.value}`)
    this.setState({ country: 'default'   })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="mt-2">
            <h1 id="header">
              <Link to="/" className="text-decoration-none">N & P's World Travel Blog</Link>
            </h1>
          </div>
          <div id="banner">
            <img src={this.state.banner.img} className="img-fluid" alt="banner" />
            <div id="banner-overlay">
              <strong>{this.state.banner.text}</strong>
            </div>
          </div>

          <div className="my-2 d-md-none">
            <select className="form-control text-capitalize" onChange={this.selectCountry} value={this.state.country}>
              <option value="default">Choose Country</option>
              {this.state.countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-2 d-none d-md-block">
            <ul id="countries">
              {this.state.countries.map(country => (
                <li key={country}>
                  <Link to={`/tag/${country}`}>{country}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);