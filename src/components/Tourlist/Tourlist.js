import React, { Component } from 'react'
import {tourData} from '../../tourData'
import Tour from '../Tour'
import './tourlist.css'
export default class Tourlist extends Component {
    state = {
        tours: tourData
    }
    removeTour = id => {
        const sortedTours = this.state.tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        const {tours} = this.state
        return (
            <section className="tours">
                {
                    tours.map((tour)=>(
                        <Tour key={tour.id} info={tour} removeTour={this.removeTour}  />
                    ))
                }
            </section>
        )
    }
}
