import React, { useState } from 'react'
import {
    Accordion, AccordionItem, AccordionItemHeading,
    AccordionItemButton, AccordionItemPanel, AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import './Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">

            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            <div className="flexColStart v-right">
                <span className='orangeText'>Our Values</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    Our team is dedicated to providing the highest quality service 
                    <br/>
                    and products that meet your needs.
                </span>

                <Accordion className='accordion'
                allowMultipleOpen={false}
                preExpanded={[0]}
                >
                    {data.map((item, i) => {
                        const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({ expanded }) => 
                                                expanded 
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")
                                            }
                                        </AccordionItemState>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={19}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}

                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value