import React from 'react'

function Footer() {
  return (

    <footer className="footer sticky top-[100vh] p-10 bg-base-200 text-base-content ">
    <form>
    <header className="footer-title">GET ON THE LIST</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Be the first to know the latest news<br></br> and special promotions for the studio.</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@email.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
      <span className="label-text">We respect your privacy.</span>
    </fieldset>
  </form>
  <nav>
    <header className="footer-title">Services</header> 
    {/* <a className="link link-hover">Branding</a>  */}
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Find us here</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    {/* <a className="link link-hover">Press kit</a> */}
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  {/* <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form> */}
</footer>
  )
}

export default Footer