import React from 'react'
import 'bulma'

import css from './index.module.scss'

export default function Page () {
  return (
    <article
      // this is a Bulma class
      className='section'
    >
      <section
        // this is also a Bulma class
        className='container'
      >
        <h1
          // this is my own class
          className={css.red}
        >
          Hi
        </h1>
      </section>
    </article>
  )
}
