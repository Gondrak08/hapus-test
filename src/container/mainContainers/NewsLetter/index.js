import React, { useState } from 'react'
import axios from 'axios'
import './NewsLetterStyless.css'


export const NewsLetter = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    console.log(email, name)
    

   async function handleSubmit(e) {
        e.preventDefault(e)
        const params = JSON.stringify({
            name: name,
            email: email
        });
        try {
            const response = await axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', params, {
                "headers": {
                    "content-type": "application/json",
                }
            })
            alert('News Letter registrado!')
            console.log(response)
        } catch (err) {
            alert('Falha no registro de News Letter')
            console.log(err)
            return err
        }
    }
    

    return (
        <section className="container_two" >
            <div>
                <div>
                    <h2>
                        Are you a parent without a nanny and looking to share?
                    </h2>
                    <p>
                        Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
                    </p>
                </div>

                <div className="form_group" >
                    <form>
                        <input type="text" name="name" id="name" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
                        <input type="email" name="email" id="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" onClick={e=>handleSubmit(e)}>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}


export default NewsLetter;
