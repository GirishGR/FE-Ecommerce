import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Checkout = () => {
const [billingToggle, setBillingToggle] = useState(true)
const [shippingToggle, setShippingToggle] = useState(false)
const [paymentToggle, setPaymentToggle] = useState(false)
const [paymentMethod, setPaymentMethod] = useState("cod")


const cart = useSelector(state=> state.cart)



  
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
   
        <h3 className="text-2xl font-semibold mb-4">CheckOut</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
                <div className='border p-2 mb-6'>
                  <div className='flex items-center justify-between' onClick={()=>{ setBillingToggle(!billingToggle)}}>
                    <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
      {      billingToggle ? <FaAngleUp/> : <FaAngleDown/>              }
                  </div>
            <div className={`space-y-4 ${billingToggle ? " " : "hidden"}`}>
              <div>  
                <label htmlFor="" className='block text-gray-700'>Name: </label>
                <input type="text" name='name' placeholder='Enter name' className='w-full px-3 py-2 border'/>
              </div>
              <div > 
                <label htmlFor="" className='block text-gray-700'>Email: </label>
                <input type="email" name='email' placeholder='Enter email' className='w-full px-3 py-2 border'/>
              </div>
              <div> 
                <label htmlFor="" className='block text-gray-700'>Phone: </label>
                <input type="text" name='phone' placeholder='Enter Phone' className='w-full px-3 py-2 border' />
              </div>
            </div>

                </div>

                  {/* Shipping Information */}

                <div className='border p-2 mb-6'>
                  <div className='flex items-center justify-between' onClick={()=>{ setShippingToggle(!shippingToggle)}}>
                    <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
      {      shippingToggle ? <FaAngleUp/> : <FaAngleDown/>              }
                  </div>
            <div className={`space-y-4 ${shippingToggle ? " " : "hidden"}`}>
              <div>  
                <label htmlFor="" className='block text-gray-700'>Address: </label>
                <input type="text" name='address' placeholder='Enter Address' className='w-full px-3 py-2 border'/>
              </div>
              <div > 
                <label htmlFor="" className='block text-gray-700'>City: </label>
                <input type="email" name='city' placeholder='Enter City' className='w-full px-3 py-2 border'/>
              </div>
              <div> 
                <label htmlFor="" className='block text-gray-700'>PIN Code: </label>
                <input type="text" name='pinCode' placeholder='Enter PIN code' className='w-full px-3 py-2 border' />
              </div>
            </div>

                </div>


              {/* Payment Method */}

                <div className='border p-2 mb-6'>
                  <div className='flex items-center justify-between' onClick={()=>{ setPaymentToggle(!paymentToggle)}}>
                    <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
      {      paymentToggle ? <FaAngleUp/> : <FaAngleDown/>              }
                  </div>
            <div className={`space-y-4 ${paymentToggle ? " " : "hidden"}`}>
              <div className='flex items-center mb-2'>
                  <input type="radio" name='payment ' checked={paymentMethod==="cod"} onChange={()=>{setPaymentMethod("cod")}}/>
                  <label htmlFor="" className='block text-gray-700 ml-2'>Cash On Delivery</label>
                  

              </div>
             
              <div className='flex items-center mb-2'>
                  <input type="radio" name='payment ' checked={paymentMethod==="dc"} onChange={()=>{setPaymentMethod("dc")}}/>
                  <label htmlFor="" className='block text-gray-700 ml-2'>Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                  <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                    <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                    <div className='mb-4'>
                      <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                      <input type="text" className='w-full rounded p-2 border' required placeholder='Enter Card Number' />
                    </div>

                    <div className='mb-4'>
                      <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                      <input type="text" className='w-full rounded p-2 border' required placeholder='Enter Card Holder Name'/>
                    </div>
                     
                      <div className='flex justify-between mb-4'>
                      <div className='w-1/2 mr-2'>
                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                        <input type="date" required className='w-full rounded p-2 border'/>
                      </div>
                      <div className='w-1/2 ml-2'>
                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CVV</label>
                        <input type="text" required placeholder='Enter CVV Number' className='w-full rounded p-2 border'/>
                      </div>
                      </div>

                  </div>

              )}
            </div>
              
            </div>

                </div>
          

          {/* Order Summary */}



          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
           <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
            <div className='space-y-4'>
              {cart.products.map((product)=>(
                <div key={product.id} className='flex justify-between'>
                  <div className='flex item-center'>
                    <img src={product.image} alt="" className='w-16 h-16 object-contain rounded' />
                    <div className='ml-4'>
                      <h4 className='text-md font-semibold'>{product.name}</h4>
                      <p className='text-gray-600'>
                        ${product.price} x {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className='text-gray-800'>${product.price * product.quantity}</div>
                </div>
              ))}
            </div>

            <div className='mt-4 border-t pt-4'>
              <div className='flex justify-between'>
                <span>Total Price:</span>
                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'>Place Order</button>
          </div>
          
        </div>
      
  </div>
  )
}

export default Checkout;