import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOddPhotos: (props.photos.length % 3 === 1),
      currentImage: 0,
      lightboxIsOpen: false
    }

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openLightbox(event, index) {
    event.preventDefault()
    this.setState({
      currentImage: this.getImageIndex(index),
      lightboxIsOpen: true,
    })
  }

  getImageIndex(index) {
    if(this.state.isOddPhotos) {
      return index + 1
    } else {
      return index
    }
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  calculateColumns(photoCount) {
    let columnCount = 3
    if(photoCount < 3) {
      columnCount = photoCount
    }

    return columnCount
  }

  getPhotos() {
    if(this.state.isOddPhotos) {
      return this.props.photos.slice(1)
    } else {
      return this.props.photos
    }
  }

  showBigPhoto() {
    if(this.state.isOddPhotos) {
      return <img
        src={this.props.photos[0].src}
        onClick={(event) => this.openLightbox(event, -1)}
        className="img-fluid big-photo"
        alt={this.props.photos[0].caption} />
    }

    return
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.showBigPhoto()}
          <Gallery
            photos={this.getPhotos()}
            columns={this.calculateColumns(this.props.photos.length)}
            onClick={(event, params) => this.openLightbox(event, params.index)}
          />


          <Lightbox
            images={this.props.photos}
            isOpen={this.state.lightboxIsOpen}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClose={this.closeLightbox}
            currentImage={this.state.currentImage}
            showImageCount={false}
            backdropClosesModal={true}
          />
        </div>
      </div>
    )
  }
}

export default Photos;