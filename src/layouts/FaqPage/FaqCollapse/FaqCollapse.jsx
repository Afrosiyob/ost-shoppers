import React from "react";
import { useEffect } from "react";
import "./FaqCollapse.scss";
import $ from "jquery";
function FaqCollapse() {
  useEffect(() => {
    $(".faq-header-acc").click(function () {
      $(this).next(".faq-body-acc").slideToggle();
      $(this).children(".fas").toggleClass("fa-plus").toggleClass("fa-minus");
    });
  }, []);
  return (
    <div className="faq-collapse">
      <div className="faq-top-header my-5">
        <h1>Shipping</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="faq-wrap-acc">
        <div className="faq-header-acc">
          {" "}
          <div className="left-header-title">
            <i class="fas fa-circle"></i>
            <h5>This is header</h5>{" "}
          </div>
          <i class="fas fa-plus"></i>
        </div>
        <div className="faq-body-acc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
          harum corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse odio harum corrupti explicabo
          debitis beatae similique rerum ad asperiores voluptatibus ipsum, est
          totam dolore sit nostrum. Eos unde perspiciatis quod. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse odio harum corrupti
          explicabo debitis beatae similique rerum ad asperiores voluptatibus
          ipsum, est totam dolore sit nostrum. Eos unde perspiciatis quod. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Esse odio harum
          corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse odio harum corrupti explicabo
          debitis beatae similique rerum ad asperiores voluptatibus ipsum, est
          totam dolore sit nostrum. Eos unde perspiciatis quod. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse odio harum corrupti
          explicabo debitis beatae similique rerum ad asperiores voluptatibus
          ipsum, est totam dolore sit nostrum. Eos unde perspiciatis quod. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Esse odio harum
          corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse odio harum corrupti explicabo
          debitis beatae similique rerum ad asperiores voluptatibus ipsum, est
          totam dolore sit nostrum. Eos unde perspiciatis quod. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Esse odio harum corrupti
          explicabo debitis beatae similique rerum ad asperiores voluptatibus
          ipsum, est totam dolore sit nostrum. Eos unde perspiciatis quod.
        </div>
      </div>
      <div className="faq-wrap-acc">
        <div className="faq-header-acc">
          {" "}
          <div className="left-header-title">
            <i class="fas fa-circle"></i>
            <h5>This is header</h5>{" "}
          </div>
          <i class="fas fa-plus"></i>
        </div>
        <div className="faq-body-acc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
          harum corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod.
        </div>
      </div>
      <div className="faq-wrap-acc">
        <div className="faq-header-acc">
          {" "}
          <div className="left-header-title">
            <i class="fas fa-circle"></i>
            <h5>This is header</h5>{" "}
          </div>
          <i class="fas fa-plus"></i>
        </div>
        <div className="faq-body-acc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
          harum corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod.
        </div>
      </div>
      <div className="faq-wrap-acc">
        <div className="faq-header-acc">
          {" "}
          <div className="left-header-title">
            <i class="fas fa-circle"></i>
            <h5>This is header</h5>{" "}
          </div>
          <i class="fas fa-plus"></i>
        </div>
        <div className="faq-body-acc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
          harum corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod.
        </div>
      </div>
      <div className="faq-wrap-acc">
        <div className="faq-header-acc">
          {" "}
          <div className="left-header-title">
            <i class="fas fa-circle"></i>
            <h5>This is header</h5>{" "}
          </div>
          <i class="fas fa-plus"></i>
        </div>
        <div className="faq-body-acc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
          harum corrupti explicabo debitis beatae similique rerum ad asperiores
          voluptatibus ipsum, est totam dolore sit nostrum. Eos unde
          perspiciatis quod. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse odio harum corrupti explicabo debitis beatae similique
          rerum ad asperiores voluptatibus ipsum, est totam dolore sit nostrum.
          Eos unde perspiciatis quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse odio harum corrupti explicabo debitis beatae
          similique rerum ad asperiores voluptatibus ipsum, est totam dolore sit
          nostrum. Eos unde perspiciatis quod.
        </div>
      </div>
    </div>
  );
}

export default FaqCollapse;
