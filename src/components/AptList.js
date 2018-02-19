import React, { Component } from 'react'

export default class AptList extends Component {

handleDelete = () => {
    this.props.onDelete(this.props.whichItem)
  }

  render () {
    return (
      <div className=''>
        <li className='pet-item media'>
          <div className='media-left'>
            <button className='pet-delete btn btn-xs btn-danger' onClick={this.handleDelete}>
              <span className='glyphicon glyphicon-remove' />
            </button>
          </div>
          <div className='pet-info media-body'>
            <span className='pet-name'>{this.props.item.petName}</span>
            <span className='apt-date pull-right'>{this.props.item.aptDate}</span>
            <div className='owner-name'><span className='label-item'>Owner: </span>{this.props.item.ownerName}
            </div>
            <div className='apt-notes'>
              {this.props.item.aptNotes}
            </div>
          </div>
        </li>
      </div>
    )
  }
}
