import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    )
  }
}
