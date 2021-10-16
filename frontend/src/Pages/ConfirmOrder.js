import React, { Component } from 'react'

export default class ConfirmOrder extends Component {
    render() {
        return (
            <div className='bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80'>
                <h2>Does this look right <span>?</span></h2>
            </div>
        )
    }
}
