import React, { FC } from "react";
import Image from "next/image";
import "./footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={"/images/logoo.png"}
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <ul>
              <li>Customer support</li>
              <li>+216 70000007</li>
              <li>+216 94413504</li>
              <li>Wheelies@Motors.com</li>
            </ul>
          </div>
          <div className="col-md-3 h-72">
            <ul>
              <li><h5>Latest Cars</h5></li>
              <li>Yamaha</li>
              <li>BMW </li>
              <li>Honda</li>
              <li>Triumph</li>
              <li>Kawasaki</li>
              <li>Ducati</li>
            </ul>
          </div>
          <div className="col-md-3 h-72">
            <h5>Wheelies Motors</h5>
            <ul>
              <li>About</li>
              <li> Blog</li>
              <li> Shop</li>
              <li>Wishlist</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-3 h-72">
            <h5>Useful Information</h5>
            <p>My account</p>
            <p>Dashboard</p>
            <p>Contact</p>
            <Image alt="" src={"/images/frame.png"} width={200} height={200} className="mt-10"/>
          </div>
        </div>
        <div className="row">
          <div className="ft">
            <h5>@Copyright by Wheelies-Motors. All Rights Reserved.</h5>
            <div className="pic">
<Image alt="" src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-google.svg" width={200} height={200}/>
<Image alt="" src="https://autobid.modeltheme.com/wp-content/uploads/2023/11/autobid-appstore.svg"width={200}height={200}/>

</div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;