const styles = theme => ({
  card: {
    width: '100%',
  },
  media: {
    height: 200,
  },
  descriptionLimit: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  },
  chips: {
    marginTop: theme.spacing.unit * 2,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
})

export default styles
