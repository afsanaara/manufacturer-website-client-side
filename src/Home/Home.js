import React from 'react'
import AddReview from '../Dashboard/AddReview'
import Parts from '../Parts/Parts'
import Banner from './Banner'
import Brand from './Brand'
import BusinessSummary from './BusinessSummary'
import Category from './Category'
import Reviews from './Reviews'

const Home=()=> {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Category></Category>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    )
}

export default Home
