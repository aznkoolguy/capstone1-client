import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate, Hyph } from '../Utils/Utils'

export default class AffirmationListItem extends Component {
  render() {
    const { affirmation } = this.props
    return (
      <Link to={`/affirmations/${affirmation.id}`} className='AffirmationListItem'>
        <header className='AffirmationListItem__header'>
          <AffirmationDate affirmation={affirmation} />
        </header>
        <footer className='AffirmationListItem__footer'>
          {affirmation.author.id && <>
            <AffirmationAuthor affirmation={affirmation} />
            <Hyph />
          </>}
          <AffirmationCommentCount affirmation={affirmation} />
        </footer>
      </Link>
    )
  }
}

function AffirmationDate({ affirmation }) {
  return (
    <span className='AffirmationListItem__date'>
      <NiceDate
        date={affirmation.date_created}
      />
    </span>
  )
}

function AffirmationAuthor({ affirmation }) {
  return (
    <span className='AffirmationListItem__author'>
      {affirmation.author.full_name}
    </span>
  )
}

function AffirmationCommentCount({ affirmation }) {
  return (
    <span
      className='AffirmationListItem__comment-count fa-layers fa-fw'
    >
      <span
        className='fa-layers-text fa-inverse'>
        {affirmation.number_of_comments}
      </span>
    </span>
  )
}
