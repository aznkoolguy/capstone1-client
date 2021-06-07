import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JournalContext from '../../contexts/JournalContext'
import JournalApiService from '../../services/journal-api-service'
import { Button, Input, Textarea } from '../Utils/Utils'

export default class AddJournalForm extends Component {
  static defaultProps = {
    onSubmitSuccess: () => { }
  }

  static contextType = JournalContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { content, mood } = ev.target

    JournalApiService.postJournal(content.value, mood.value)
      .then(this.context.addJournal)
      .then(() => {
        content.value = ''
        mood.value = ''
        this.props.onSubmitSuccess()
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='mood'>
          <label htmlFor='AddJournalForm__mood'>
            Mood
          </label>
          <Input
            required
            name='mood'
            id='AddJournalForm__mood'
            placeholder='Happy/Sad/Ambivalent'>
          </Input>
        </div>
        <div className='content'>
          <label htmlFor='AddJournalForm__content'>
            Content
          </label>
          <Textarea
            required
            aria-label='Type journal entry...'
            name='content'
            id='content'
            cols='30'
            rows='3'
            placeholder='Type journal entry..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Log Journal
        </Button>
        <Button type='cancel'>
          <Link to='/journals'>
            Cancel
          </Link>
        </Button>
      </form>
    )
  }
}
