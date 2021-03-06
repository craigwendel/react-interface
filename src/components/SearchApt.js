import React, { Component } from 'react'

export default class SearchApt extends Component {

handleSort = (e) => {
  this.props.onReOrder(e.target.id, this.props.orderDir)
}

handleOrder = (e) => {
  this.props.onReOrder(this.props.orderBy, e.target.id)
}

handleSearch = (e) => {
  this.props.onSearch(e.target.value)
}

  render () {
    return (
      <div className='row search-appointments'>
        <div className='col-sm-offset-3 col-sm-6'>
          <div className='input-group'>
            <input id='SearchApts' onChange={this.handleSearch} placeholder='Search' type='text' className='form-control' aria-label='Search Appointments' />
            <div className='input-group-btn'>
              <button type='button' className='btn btn-primary dropdown-toggle'
                data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Sort by: <span className='caret' /></button>
              <ul className='dropdown-menu dropdown-menu-right'>
                <li><a href='' id='petName' onClick={this.handleSort}>Pet Name { (this.props.orderBy === 'petName') ? <span className='glyphicon glyphicon-ok' /> : null }</a></li>
                <li><a href='' id='aptDate' onClick={this.handleSort}>Date { (this.props.orderBy === 'aptDate') ? <span className='glyphicon glyphicon-ok' /> : null }</a></li>
                <li><a href='' id='ownerName' onClick={this.handleSort}>Owner { (this.props.orderBy === 'ownerName') ? <span className='glyphicon glyphicon-ok' /> : null }</a></li>
                <li role='separator' className='divider' />
                <li><a href='' id='asc' onClick={this.handleOrder}>Asc { (this.props.orderDir === 'asc') ? <span className='glyphicon glyphicon-ok' /> : null }</a></li>
                <li><a href='' id='desc' onClick={this.handleOrder}>Desc { (this.props.orderDir === 'desc') ? <span className='glyphicon glyphicon-ok' /> : null }</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
