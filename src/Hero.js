import React, { Fragment } from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <Fragment>
      {/* hero */}
      <section className="hero">
        {/* hero-center */}
        <div className="hero-center">
          {/* hero-info */}
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all sizes-from startups to Fortune 500s use
              Stripe's software and APIs to accept payments, send payouts and manage
              their businesses online.
            </p>
            <button className="btn">Start Now</button>
          </article>
          {/* hero-images */}
          <article className="hero-images">
            <img src={phoneImg} alt="Hero Img" />
          </article>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero
