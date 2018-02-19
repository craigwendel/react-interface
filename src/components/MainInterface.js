import React, {Component} from 'react'

import data from '../data/data.js'

import AptList from './AptList'
import AddApt from './AddApt'

let _ = require('lodash')

export default class MainInterface extends Component {
  constructor (props) {
    super(props)

    this.state = {
      myAppointments: data,
      aptBodyVisible: false
    }
  }

  deleteMessage = (item) => {
    let allApts = this.state.myAppointments
    let newApts = _.without(allApts, item)
    this.setState({myAppointments: newApts})
  }

  toggleAddDisplay = () => {
    this.setState({aptBodyVisible: !this.state.aptBodyVisible})
  }

  render () {
    let filteredApts = this.state.myAppointments
    filteredApts = filteredApts.map((item, i) => {
      return (
        <AptList key={i} item={item} whichItem={item} onDelete={this.deleteMessage} />
      )
    })

    return (
      <div className='interface'>
        <AddApt bodyVisible={this.state.aptBodyVisible} handleToggle={this.toggleAddDisplay} />
        <ul className='item-list media-list'>{filteredApts}</ul>
      </div>
    )
  }
}
