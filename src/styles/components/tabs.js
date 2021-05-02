const table = {
  variants: {
    line: (props) => ({
      tab: {
        [props.orientation === 'vertical' ? 'borderLeft' : 'borderBottom']: '3px solid',
        _selected: {
          color: 'matePrimary.500',
        },
      },
      tablist: {
        [props.orientation === 'vertical' ? 'borderLeft' : 'borderBottom']: '1px solid',
        borderColor: 'gray.200',
      },
      tabpanel: {
        px: 0,
      },
    }),
  },
}

export default table
