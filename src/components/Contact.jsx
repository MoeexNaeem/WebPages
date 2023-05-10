import React, { useState } from "react";

export const Contact = () => {

  const [data, setData] = useState({
    fullName:"",
    lastName:"",
    number:"",
    email:"",
    message:"",
  });

  const inputEvent =(event) =>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  const OnSubmit =(e)=>[
      e.preventDefault(),
      alert(`My name is ${data.fullName}. My last name is ${data.lastName}. My Phone Number is ${data.number}.
      My Email is ${data.email}. The Message is ${data.message}`)
  ]

  return (
    <>
      <div className="my-5">
        <h1 className="os text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto my-5">
            <form onSubmit={OnSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="lastName"
                  value={data.lastName}
                  onChange={inputEvent}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={inputEvent}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="homea" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
