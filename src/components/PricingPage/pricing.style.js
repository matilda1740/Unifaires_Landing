import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PageWrapper = styled.section`
  padding: 75px 0;
  font-family: 'Lato', sans-serif;
  background-color:rgba(127, 17, 224, 0.05);
  }
`;

const SectionWrapper = styled.section`
  font-family: 'Lato', sans-serif;

  .pricing_title{
    font-size: 40px;
    color: #2D2D2D;
  }
  .slogan{
        color: #5832DA;
      text-transform: capitalize;
      letter-spacing: 0;
      font-weight: 400;
      font-size: 30px;
      line-height: 125%;
  }
      .pricing_subtitle{
      /* line-height: 45px;  */
      font-size: 20px;
      line-height: 150%;      
        text-align: center;
        padding-top: 20px ;
        color: #12355B;
    }
  /* SLIDER SECTION */
  .pricing_slider_div{
    width: 100%;
    margin: 50px 90px 60px 125px;
  }
  /* FAQs SECTION */
  .faqs_section {
    display: flex;
    width: 100%;
    height: auto; /* fix */
    padding: 50px 90px 60px 125px;   
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), 
      linear-gradient(141.54deg, rgba(216, 226, 98, 0.1) 7.01%, rgba(44, 70, 99, 0.1) 96.64%);
    transition: all 0.3s linear ease-in-out;
  }
  .faq_col1{
    width: 35%;
    margin-right: 5%;

    h6 {
      color: rgba(173, 168, 190, 0.9);
    }

    h3{
      color: rgba(45, 45, 45, 0.9);
    }
    p{
      color: rgba(18, 53, 91, 0.9);
    }
  }
  .faq_col2{
    width: 60%;
    background: #F3F5F6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: all 0.3s ease-in-out;
    .faq_content{ 
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      padding: 9px 24px 0px 24px;
      margin: 10px 20px;
    transition: all 0.3s ease-in-out;
    }
    .faq_content:first-of-type{
      margin-top: 20px;
    }
    .faq_content:last-of-type{
    margin-bottom: 20px;
    }
    .faq_question{
      display: flex;
      height: auto;
      justify-content: space-between;
      align-items: baseline;
        h6 {
          font-weight: bold;
        }
        img {
            /* width: 14px;
            height: 5px; */
        }
    }
    /* ON HOVER */
    .faq_question:hover{
      cursor: pointer;
    }
    .faq_answer{
    transition: all 3s ease-in-out;
    overflow: hidden;
    }
    .not_clicked{
      /* display: flex; */
      height: 0;

    }
    .clicked{
      /* display: none; */
      height: auto;
    }
  }

    @media only screen and (min-width: 320px) and (max-width: 812px){
      /* font-size: small; */
    .slogan{
      font-size: 20px;
    }
    .pricing_title{
      font-size: 30px;
    }
  .pricing_subtitle{
        font-size: 14px;
      line-height: 0%;
      padding-top: 15px;
  }
  /* SLIDER SECTION */
  .pricing_slider_div{
    width: 100% !important;
    margin: 25px 0px 20px 25px;
  }
  /* FAQ */
    .faqs_section {
      flex-direction: column;
      padding: 50px 35px 60px 35px;   
    }
    .faq_col1, .faq_col2{
      width: 100%;
    }
    .faq_col2{
      margin: 30px 0;
    }

`;
export const PricingArea = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

`;
export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 51px;

 @media only screen and (min-width: 320px) and (max-width: 812px){
   flex-direction: column;
   align-items: center;
   padding-top: 0px;
 }
`;
export const PricingSectionHeader = styled.section`
    width: 100%;
    height: 375px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(to right, rgba(127, 17, 224, 0.05)  66.666667%, rgba(127, 17, 224, 0.05) 33.333333%), url('/Group.svg');
  
     @media only screen and (min-width: 320px) and (max-width: 812px){
       height: 275px;
     }

`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  max-width: 332px;
  padding: 6px;
  height: 60px;
  margin: 35px auto 0px auto;
  border-radius: 200px;
  background-color:rgba(127, 17, 224, 0.05);
  
  button {
    height: 50px;
    border: 0;
    padding: 10px 26px;
    border-radius: 200px;
    color: #5832DA;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
    /* width: 100%; */
    &.active {
      color: ${themeGet('colors.headingColor', '#5832DA')};
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0 3px 4px
        ${themeGet('colors.shadow', 'rgba(38, 78, 118, 0.1)')};
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 812px){
    height: 50px;
    button {
        height: 40px;
        font-size: 14px;
        line-height: 18px; 
    }
  }

`;

export const PricingCard = styled.div`
  width: calc(100% / 3 - 25px);
  max-width: 370px;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  background-color:#ffffff;
  box-shadow: 0px 10px 40px -5px rgba(74, 42, 185, 0.12);
:nth-of-type(even){
    background-color: #5832DA ;
    color: rgba(223, 223, 223, 0.9) !important;
    margin-top: -75px;
    margin-bottom: 50px;

}
.card_header, .card_price_div{
    background-color: transparent;
}
:nth-of-type(even) .card_header h3,  :nth-of-type(even) .card_header p, :nth-of-type(even) .card_header button,  :nth-of-type(even) .card_price_div span, :nth-of-type(even) .card_price_div strong, :nth-of-type(even) .card_price_div .trail a{
    color: #ffffff !important;

}
/* CARD 2 */
:nth-of-type(even) .card-body ul li{
    color: rgba(223, 223, 223, 0.9) !important;
}
:nth-of-type(even) .card_header button{
  background-color:rgba(255, 255, 255, 0.1);
}
/* CHECKMARK Color CARD 1 AND 3 */
:nth-of-type(odd) .card-body ul li i  {
    color: #B8BCCA;
}
 :nth-of-type(even) .card-body ul li i {
color: rgba(255, 255, 255, 0.4);
 }

 .tag{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 332px;
     background-color: rgba(254, 185, 95, 0.1);
     color: #FEB95F;
     height: 40px;
     width: 100%;
    border: 0;
    padding: 5px 26px;
    border-radius: 200px;
    text-transform: uppercase;
    font-size: 12px;
line-height: 150%;
 }

  .card_header {
    padding: 17px 20px;
    /* margin-bottom: 20px; */
    @media only screen and (max-width: 480px) {
      padding: 15px 10px 10px;
    }
    h3 {
      color: ${themeGet('colors.headingColor', '#0F2137')};
      font-size: 22px;
      line-height: 26px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
      font-size: 15px;
      margin: 0;
    }
    .price_card_btn{
      width: 100%;
    padding: 15px 26px;
  border-radius: 200px;
  margin-top: 20px ;
  background-color:rgba(127, 17, 224, 0.1);
  color: #5832DA;
    }
  }

  .card-body {
    padding: 0 20px;
    margin-bottom: 25px;
    @media only screen and (max-width: 480px) {
      padding: 0 10px;
      margin-bottom: 30px;
    }
    ul {
      li {
        color: ${themeGet('colors.quoteText', '#343D48')};
        font-size: 16px;
        margin-bottom: 21px;
        i {
          color: ${themeGet('colors.primary', '#2563FF')};
          margin-right: 8px;
          svg {
            width: 20px;
            height: auto;
          }
        }
      }
    }
  }

  .card_price_div {
    height: 50px;
    padding: 0 0 0 20px; /* text-align: center; */
    margin: 5px 0px;
    
    p{
        display: flex;
        align-items: center;
        font-size: 24px;
    }
    p * {
        padding-right: 2.5px;
    }
    strong {
      display: block;
      color: ${themeGet('colors.textColor', 'rgba(52, 61, 72, 0.8)')};
      font-weight: 400;
      font-size: 16px;
      /* margin-bottom: 27px; */
    span {
        font-weight: 700;
        font-size: 24px;
        color: ${themeGet('colors.headingColor', '#0F2137')};
      }
    }
    span {
        font-weight: 600;
        color: rgba(18, 53, 91, 0.6);
    }
    .reusecore__button {
      border-radius: 15px;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
    .trail {
      margin-top: 22px;
      a {
        color: rgba(37, 99, 255, 0.9);
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 812px){
        width: calc(90% - 30px);
        margin: 0px 15px;
        /* Remove - margin */
        :nth-of-type(even){
          margin-top:0px !important;

        }
        :nth-child(1), :nth-child(2) {
          margin-bottom: 30px !important;
        }
  }

`;


export const PricingSliderSection = styled.div``;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet('colors.primary', '#5832DA')};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`;
export default SectionWrapper;
