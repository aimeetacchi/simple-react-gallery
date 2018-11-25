import React, { Component } from 'react'
import PropTypes from 'prop-types';

// function is given a DOM element, searches for <img> tags checks if all have finished loading or not.
function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll('img');
    for (let i = 0; i < imgElements.length; i++) {
        const img = imgElements[i];
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            loading: true,
        })
    }

    handleStateChange = () => {
        this.setState({
            //sets state to false;
            loading: !imagesLoaded(this.galleryElement)
        });
    };

    renderSpinner() {
        if (!this.state.loading) {
            // Render nothing if not loading
            return null;
        }
        return (
            <span className="spinner">
                <p>Loading...</p>
            </span>
        )
    }

    render() {
        // destructing pulling imagesURL from props
        const { imageUrls } = this.props;
        // Mapping over the imageURLs array and calling the renderImage function and passing in each DOM Node img
        const image = imageUrls.map((imageUrl) =>
            <div key={imageUrl.id}>
                <img src={imageUrl.url} alt='images'
                    onLoad={this.handleStateChange}
                    onError={this.handleStateChange} />
            </div>
        );

        return (
            <div className="gallery" ref={element => {
                this.galleryElement = element;
            }}>
                {this.renderSpinner()}
                <div className="images">
                    {image}
                </div>
            </div>
        )
    }
}

Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Gallery;
