import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function Head({ title, description, image, children }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : `${process.env.PUBLIC_URL}/icon.png`} />
      <meta name="og:image" content={image ? image : `${process.env.PUBLIC_URL}/icon.png`} />
      {children}
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
}
