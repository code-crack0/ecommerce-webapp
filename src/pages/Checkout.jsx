import Header from '../components/Header'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import StripeCheckoutButton from '../components/StripeButton'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart)
  const total = items.map((e) => e.price).reduce((a, b) => a + b)

  function truncString(s, charCount) {
    if (s.length < charCount) return s
    const tmp = s.substring(0, charCount)
    const res = tmp.substring(0, tmp.lastIndexOf(' ')) + '...'
    return res
  }

  return (
    <>
      <Header />
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            width: 'auto',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '50px',
            margin: '0 300px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              // height: '200px',
              // padding: '20px',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              height={'150px'}
              width={'auto'}
            />
            <div className='checkoutinfo'>
              <p style={{ fontSize: '20px' }}>{item.title}</p>
              <p style={{ fontSize: '12px', fontWeight: 'lighter' }}>
                {truncString(item.description, 200)}
              </p>
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  margin: '0 0 0 auto',
                }}
              >
                AED {item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          width: 'auto',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '50px',
          margin: '0 300px',
        }}
      >
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
      </div>
    </>
  )
}

export default CheckoutPage
// export default connect(mapStateToProps)(CheckoutPage)
