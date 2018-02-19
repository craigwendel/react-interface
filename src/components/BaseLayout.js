import React, { Component } from 'react'

export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layout'>
        <header>
          <nav className='navbar navbar-default'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <a className="navbar-brand" href=""><h1>Wisdom Pet Medicine</h1></a>
              </div>
            </div>
          </nav>
        </header>

        {this.props.children}

        <footer>
          <div className='content container-fluid'>
            <div className='row'>
              <div className='col-sm-6'>
                <p>All contents &copy; 2018 <a href='http://craigawendel.com'>Craig Wendel</a>. All rights reserved.</p>
              </div>
              <div className='col-sm-6'>
                <nav className='navbar navbar-default'>
                  <div className='container-fluid'>
                    <ul className='nav navbar-nav navbar-right'>
                      <li><a href='#'>Terms of use</a></li>
                      <li><a href='#'>Privacy policy</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
