import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {PropsWithChildren} from "react";

interface Props extends PropsWithChildren{
    cardColor:string
    cardMainText:string
    cardSubText:string
}

export default function DataCard(props:Props){

    return(
        <div style={{backgroundColor:`${props.cardColor}`}} className={"ps-1 position-relative data-card-container border-end-0 rounded"}>
            <div style={{backgroundColor:'white'}} className={" border rounded-1 d-flex justify-content-between align-items-center py-4 px-3"}>
                <div className={"d-flex flex-column m-0 p-0"}>
                    <p className={"m-0 p-0"} style={{color:`${props.cardColor}`,fontSize:'0.7rem',fontWeight:'bold'}}>{props.cardMainText}</p>
                    <p className={"m-0 p-0"} style={{color:'#5a5c69',fontSize:'1.25rem',fontWeight:'bold'}}>$<span>{props.cardSubText}</span></p>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
            {/*<div style={{backgroundColor:'red',height:'100% ',width:'2px'}} className={"left-0 position-absolute"}>*/}

            {/*</div>*/}
        </div>
    )
}