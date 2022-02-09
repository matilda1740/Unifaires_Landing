import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import arrowDownIcon from '../../../common/assets/images/arrowDown.svg'
import arrowRightIcon from '../../../common/assets/images/arrowRight.svg'


export default function FAQsSection() {

     const [ isExpanded, setExpanded ] = useState(false);

    const handleClick = id => (e) => {

        setExpanded(!isExpanded);
        console.log("Button Clicked", id)

    }
  return (
    <section className="faqs_section">
        {/* ONE BIG DIV: DISPLAY FLEX, ROW */}
        {/* TWO SMALLER DIVS DISPLAY FLEX, EACH FLEX DIRECTION COLUMN */}
        <div className="faq_col1">
            {/* TINY HEADING, BIG HEADING, PARAGRAPH */}
            <Heading as="h6" content={"THE FAQs"} />
            <Heading as="h3" content={"All the Answers you Need"} />
            <p>Ideal for low-volume teams where no advanced results analytics is needed. Please contact our <Link href="/">Pricing team</Link></p>
        </div>
        <div className="faq_col2">
            {/* MAP BOXES, EACH WITH A HEADLINE(Question) => Clicked and not clicked, and content when clicken(Answer)  */}
            <div className="faq_content" onClick={handleClick(1)} id="1">
                <div className="faq_question">
                    <Heading as="h6" content={"Where can I watch?"} />
                    {!isExpanded ?  <img src={arrowRightIcon?.src} alt="Right"/> : <img src={arrowDownIcon?.src} alt="Down"/>}
                </div>           
                <div className={isExpanded ? 'clicked faq_answer' : 'not_clicked faq_answer'}>
                    <Text as="p" content={"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."}/>
                </div>
            </div>
            <div className="faq_content" onClick={handleClick(2)} id="2">
                <div className="faq_question">
                    <Heading as="h6" content={"Where can I watch?"} />
                    {!isExpanded ?  <img src={arrowRightIcon?.src} alt="Right"/> : <img src={arrowDownIcon?.src} alt="Down"/>}
                </div>           
                <div className={isExpanded ? 'clicked faq_answer' : 'not_clicked faq_answer'}>
                    <Text as="p" content={"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."}/>
                </div>
            </div>
            <div className="faq_content" onClick={handleClick(3)} id="3">
                <div className="faq_question">
                    <Heading as="h6" content={"Where can I watch?"} />
                    {!isExpanded ?  <img src={arrowRightIcon?.src} alt="Right"/> : <img src={arrowDownIcon?.src} alt="Down"/>}
                </div>           
                <div className={isExpanded ? 'clicked faq_answer' : 'not_clicked faq_answer'}>
                    <Text as="p" content={"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."}/>
                </div>
            </div>            
        </div>
    </section>
  );
}