import React, { Component } from 'react'
import '../styles/App.css'

import data from '../data/data.js'

import AptList from './AptList'
import AddApt from './AddApt'
import SearchApt from './SearchApt'

let _ = require('lodash')

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      myAppointments: data,
      aptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc'
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

  addItem = (tempItem) => {
    let tempApts = this.state.myAppointments
    tempApts.push(tempItem)
    this.setState({myAppointments: tempApts})
  }

  reOrder = (orderBy, orderDir) => {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  render () {
    let filteredApts = this.state.myAppointments
    let orderBy = this.state.orderBy
    let orderDir = this.state.orderDir

    filteredApts = _.orderBy(filteredApts, function (item) {
      return item[orderBy].toLowerCase()
    }, orderDir)

    filteredApts = filteredApts.map((item, i) => {
      return (
        <AptList key={i} item={item} whichItem={item} onDelete={this.deleteMessage} />
      )
    })

    return (
      <div className='interface'>
        <AddApt bodyVisible={this.state.aptBodyVisible} handleToggle={this.toggleAddDisplay} addApt={this.addItem} />
        <SearchApt orderBy={this.state.orderBy} orderDir={this.state.orderDir} onReOrder={this.reOrder} />
        <ul className='item-list media-list'>{filteredApts}</ul>
      </div>
    )
  }
}
