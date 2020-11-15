import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  GalleryImage,
  GalleryVideo,
  GoBackButton,
  GoForwardButton,
  Navigation,
} from './styles';

const GalleryItem = ({ src }) => {
  const isImage =
    src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg');
  const videoType = `video/${src.substr(src.lastIndexOf('/') + 1)}`;
  return isImage ? (
    <GalleryImage src={src} />
  ) : (
    <GalleryVideo src={src} type={videoType} loop autoPlay />
  );
};

const Gallery = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  function nextItem() {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function previousItem() {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <>
      {items.map(
        (item, i) => index === i && <GalleryItem src={item} key={i} />
      )}
      <Navigation>
        <GoBackButton onClick={previousItem} disabled={items.length <= 1}>
          <FaChevronLeft />
        </GoBackButton>
        {index + 1} / {items.length}
        <GoForwardButton onClick={nextItem} disabled={items.length <= 1}>
          <FaChevronRight />
        </GoForwardButton>
      </Navigation>
    </>
  );
};

export default Gallery;
