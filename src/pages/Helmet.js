import React from 'react'
import { Helmet } from 'react-helmet'

const Helmets = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} | Tope Dare Foundation`}</title>
            <meta name="description" content={`${title} | The Tope Dare Foundation Online Website `} />
            <meta name="keywords" content="Charity Organization , Donation, Foundation, Empowerment,Employment, Health, " />

        </Helmet>
    )
}

export default Helmets