import React from 'react';
import { SVGImage } from './style';

const SVGIcon = ({ svgSrc, size, classes }) => (
  <SVGImage src={svgSrc} size={size} customClasses={classes} />
);

export default SVGIcon;