import { loadStripe } from '@stripe/stripe-js'
const stripe = loadStripe(
  'pk_test_51NGeijDnX1QoVcjpzbKjRwzwC6oUpHOMhZPiMvXlychJ5VD8UFY60Q6UoYiJo7bSAjcS8fBMTnQhwBlu3vbskiRn002mclDmf7',
  {
    betas: ['custom_checkout_beta_2'],
  }
)

import React from 'react'
import { CustomCheckoutProvider } from '@stripe/react-stripe-js'

const App = ({ clientSecret }) => (
  <CustomCheckoutProvider stripe={stripe} options={{ clientSecret }}>
    <CheckoutPage />
  </CustomCheckoutProvider>
)

export default App
