const button = {
  baseStyle: {
    fontWeight: '700',
    // borderRadius: '100px',
    _focus: { boxShadow: 'outline' },
  },
  variants: {
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? 'black' : 'matePrimary.500',
      color: props.colorMode === 'dark' ? 'white' : 'black',
      border: props.colorMode === 'dark' ? '2px solid #1FC4DB' : 'none',
      _hover: {
        bg: '#019FB5',
      },
    }),
    square: (props) => ({
      borderRadius: '1px',
      bg: 'transparent',
      color: 'black',
      border: '2px solid transparent',
      _hover: {
        opacity: 1,
        border: '2px solid #1FC4DB',
      },
    }),
  },
}

export default button
