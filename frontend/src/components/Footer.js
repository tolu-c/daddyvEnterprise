import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        let date = new Date()
        let currentYear = date.getFullYear()

        return (
            <footer className='bg-gray-700 text-center text-sm text-gray-200 py-5'>
                Copyright, DaddyV Enterprise, {currentYear}.
            </footer>
        )
    }
}
