import React from 'react'

export default function ContactPage() {
    return (
        <div style={{ backgroundColor: '#161616' }} className=' py-5'>
            <div className="container d-flex justify-content-between align-items-center text-white">

                <div>
                    <h5>GET IN TOUCH</h5>
                    <div className='d-flex align-items-center'>
                        <i class="fa-regular fa-envelope "></i>
                        <p className='m-0 ps-2 '>khaledahmed872003@gmail.com</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="fa-solid fa-phone"></i>
                        <p className='m-0 ps-2 '>054654654</p>
                    </div>

                </div>

                <div>
                    <button className='btn btn-outline-dark text-white border-white'>Contact us</button>
                </div>

                <div>
                    <div className='d-flex align-items-center justify-content-end'>
                        <i class="fa-brands fa-linkedin"></i>
                        <div className='mx-3'><i class="fa-brands fa-facebook-f"></i></div>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                        <p className='m-0 ps-2 mt-3'>copyrights@2019</p>

                </div>

            </div>

        </div>
    )
}
