import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AffirmationContext from '../../contexts/AffirmationContext'
import AffirmationApiService from '../../services/affirmation-api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class AddAffirmationForm extends Component {
  static defaultProps = {
    onSubmitSuccess: () => { }
  }

  static contextType = AffirmationContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { content } = ev.target

    AffirmationApiService.postAffirmation(content.value)
      .then(this.context.addAffirmation)
      .then(() => {
        content.value = ''
        this.props.onSubmitSuccess()
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='AddAffirmationForm'
        onSubmit={this.handleSubmit}
      >
        <div className='content'>
          <label htmlFor='AddAffirmationForm__content'>
            Content
          </label>
          <Textarea
            required
            aria-label='Type an affirmation...'
            name='content'
            id='content'
            cols='30'
            rows='3'
            placeholder='Type an affirmation..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post Affirmation
        </Button>
        <Button type='cancel'>
          <Link to='/affirmations'>
            Cancel
          </Link>
        </Button>
      </form>
    )
  }
}
