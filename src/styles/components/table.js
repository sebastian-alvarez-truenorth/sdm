const table = {
  baseStyle: {
    table: {},
  },
  variants: {
    simple: (props) => ({
      tbody: {
        background: props.colorMode === 'dark' ? '#1d263a' : '#F7F7F8',
      },
      th: {
        background: props.colorMode === 'dark' ? '#2d3b59' : '#ecedf1',
      },
    }),
    striped: (props) => ({
      tbody: {
        tr: {
          '&:nth-of-type(odd)': {
            bg: props.colorMode === 'dark' ? '#2d3b59' : '#f5f6f8',
            td: {
              bg: props.colorMode === 'dark' ? '#2d3b59' : '#f5f6f8',
            },
          },
        },
      },
    }),
  },
}

export default table
