import React from 'react'

import repoLink from './github.svg'

function Footer () {
  return (
    <div className='repo-link-container'>
      <a className='repo-link' href='#'><img className='repo-image' src={repoLink} alt='link to repo' /></a>
    </div>
  )
}

export default Footer
