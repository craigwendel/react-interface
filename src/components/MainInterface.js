import React, {Component} from 'react'

export default class MainInterface extends Component {
  constructor (props) {
    super(props)
    this.state = { data: [
      {
        petName: 'Buffy',
        ownerName: 'Hassum Harrod',
        aptDate: '2016-06-20 15:30',
        aptNotes: 'This Chihuahua has not eaten for three days and is lethargic'
      },
      {
        petName: 'Spot',
        ownerName: 'Constance Smith',
        aptDate: '2016-06-24 08:30',
        aptNotes: 'This German Shepherd is having some back pain'
      },
      {
        petName: 'Goldie',
        ownerName: 'Barot Bellingham',
        aptDate: '2016-06-22 15:50',
        aptNotes: 'This Goldfish has some weird spots in the belly'
      },
      {
        petName: 'Mitten',
        ownerName: 'Hillary Goldwyn',
        aptDate: '2016-06-21 9:15',
        aptNotes: 'Cat has excessive hairballs'
      }
    ]
    }
  }
  render () {
    let filteredApts = this.state.data
    filteredApts = filteredApts.map((item, i) => {
      return (
        <li className='pet-item media' key={i}>
          <div className='pet-info media-body'>
            <span className='pet-name'>{filteredApts[i].petName}</span>
            <span className='apt-date pull-right'>{filteredApts[i].aptDate}</span>
            <div className='owner-name'><span className='label-item'>{filteredApts[i].ownerName}</span>
            </div>
            <div className='apt-notes'>
              {filteredApts[i].aptNotes}
            </div>
          </div>
        </li>
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