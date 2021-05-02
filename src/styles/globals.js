const globals = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'black' : 'white',
    },
    '::placeholder': {
      color: 'gray.200',
    },
    '*': {
      borderColor: '#1FC4DB',
    },
    'select:first-of-type': {
      // color: '#ced3dd'
    },
    button: {
      _focus: {
        boxShadow: '0 0 0 4px rgba(31, 196, 219, 0.3) !important',
      },
    },
  }),
}

export default globals
