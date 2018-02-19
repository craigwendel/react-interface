import React, {Component} from 'react'
import AptList from './AptList'
import data from '../data/data.js'

export default class MainInterface extends Component {
  constructor (props) {
    super(props)

    this.state = { myAppointments: data }
  }

  render () {
    let filteredApts = this.state.myAppointments
    filteredApts = filteredApts.map((item, i) => {
      return (
        <AptList key={i} item={item} />
      )
    })

    return (
      <div className='interface'>
        <div className='row'>
          <div className='col-sm-12'>
            <ul className='item-list media-list'>{filteredApts}</ul>
          </div>
        </div>
      </div>
    )
  }
}
