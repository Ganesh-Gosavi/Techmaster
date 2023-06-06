import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1 id='hh'>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' required placeholder='Enter your name'/>
                </div>

                <div>
                    <label>E-Mail</label>
                    <input type='email' required placeholder='Enter your email'/>
                </div>

                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='drop your Query...'/>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;