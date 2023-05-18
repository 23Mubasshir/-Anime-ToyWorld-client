import React from "react";
import logo from "../../assets/images/logo.png";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer lg:footer-center p-10 bg-base-300 text-primary-content">
        
      {/* -----Row-1:LoGO----- */}
      <div>
        <div className="flex text-left">
          <img className="w-1/3 md:w-48 lg:ml-12 mr-3" src={logo} alt="" />
          <h1 className="md:text-6xl text-3xl mt-8 font-bold text-[#62376c] mb-4">
            Anime <br /> Toy<span className="text-[#fcb82f]">World</span>
          </h1>
        </div>
      </div>

      {/* -----Row-2: Info----- */}
      <div className="footer text-base-content">
        <div>
          <span className="footer-title">Products</span>
          <a className="link link-hover">Action Figure</a>
          <a className="link link-hover">T-shirts</a>
          <a className="link link-hover">Mugs</a>
          <a className="link link-hover">Comics</a>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <a className="link link-hover">Phone: 012834838</a>
          <a className="link link-hover">Phone: 012131323</a>
          <a className="link link-hover">Gmail: AnimeToy@gamil.com</a>
          <a className="link link-hover">Facebook: @Anime ToyWorld</a>
        </div>
        <div>
          <span className="footer-title">Store Address</span>
          <a className="link link-hover">Store-1: xyz-street, 12/A,Tokyo</a>
          <a className="link link-hover">Store-2: mno-street, 789/A,New-yoyk</a>
          <a className="link link-hover">Store-3: erwe-street, 789/A,Berlin</a>
          <a className="link link-hover">Store-4: qwz-street, 15/A,London</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#62376c] text-base-200 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -----Row-3: Copyright and Social media links----- */}

      <div className="footer items-center p-4">
        <div className="items-center grid-flow-col md:justify-self-start">
          <p>Copyright © 2023 - All right reserved</p>
        </div>

        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="#twitter">
            <FaTwitter size={30} />
          </a>
          <a href="#youtube">
            <FaYoutube size={30} />
          </a>
          <a href="#facebook">
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
