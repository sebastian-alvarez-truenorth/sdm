import styled from 'styled-components';

export const SVGImage = styled.img.attrs(props => {
  switch (props.size) {
    case 'custom':
      return { className: props.customClasses ? props.customClasses : 'h-10 md:h-12' }
    case 'small':
      return { className: 'h-4 md:h-5' };
    case 'large':
      return { className: 'h-20 md:h-14' };
    default:
      return { className: 'h-10 md:h-12' };
  }
})``;
