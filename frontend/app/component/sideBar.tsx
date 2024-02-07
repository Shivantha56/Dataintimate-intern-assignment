'use client'

import sideBar from '../component/sideBar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSmileWink,
    faTachometer,
    faCog,
    faAngleUp,
    faWrench,
    faFolder,
    faChartArea,
    faTable
} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";


export default function SideBar(): JSX.Element {

    const [fullSideBar, setFullSideBar] = useState(true);

    function changeSideBar(event:React.MouseEvent<HTMLDivElement>){
        const target = event.target as HTMLDivElement
        const targetId = target.id;
        if (targetId == 'mainSideBar'){
            setFullSideBar(prev => false)
        }else if(targetId == 'secondSideBar'){
            setFullSideBar(prev => true)
        }
    }

    return (
        // implementing left sidebar

        <aside>
            {fullSideBar ?
                <div className={"aside-container"}>
                    <ul className={"aside-menu-list px-3"}>
                        <li className={"d-flex py-3 justify-content-center align-items-center"}>
                            {/*  aside top  */}
                            <FontAwesomeIcon style={{width: 39, height: 39, rotate: '-25deg'}} color={'#fff'}
                                             icon={faSmileWink}/>
                            <p className={"logo-name ms-3 text-white fw-bold"}>SB ADMIN</p>
                            <p className={"fw-bold mb-3 ms-1"}>2</p>
                        </li>
                        <hr className={"m-0"}/>
                        <li className={"column-gap-2 align-items-center text-white fw-bold d-flex align-content-center py-3"}>
                            <FontAwesomeIcon color={"#fff"} width={13} icon={faTachometer}/>
                            <p>Dashboard</p>
                        </li>
                        <hr className={"m-0"}/>
                        <li className={"d-flex flex-column"}>
                            <p className={"row-header mt-3"}>Interface</p>
                            <div className={"justify-content-between column-gap-2 d-flex py-3 hover-container"}>
                                <div className={"d-flex align-items-center gap-2"}>
                                    <FontAwesomeIcon className={"aside-icon"} icon={faCog}/>
                                    <p>Components</p>
                                </div>
                                <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                            </div>
                            <div
                                className={"justify-content-between column-gap-2 align-items-center d-flex py-3 hover-container"}>
                                <div className={"d-flex align-items-center gap-2"}>
                                    <FontAwesomeIcon className={"aside-icon "} icon={faWrench}/>
                                    <p>Utilities</p>
                                </div>
                                <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                            </div>
                        </li>
                        <hr className={"m-0"}/>
                        <li className={"d-flex flex-column"}>
                            <p className={"row-header mt-3"}>Addons</p>
                            <div className={"d-flex py-3 justify-content-between hover-container"}>
                                <div className={"d-flex align-items-center column-gap-2"}>
                                    <FontAwesomeIcon className={"aside-icon"} icon={faFolder}/>
                                    <p>Pages</p>
                                </div>
                                <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                            </div>
                            <div className={"d-flex align-items-center py-3 column-gap-2 hover-container"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faChartArea}/>
                                <p>Charts</p>
                            </div>
                            <div className={"d-flex align-items-center py-3 gap-2 hover-container"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faTable}/>
                                <p>Tables</p>
                            </div>
                        </li>
                        <hr className={"m-0"}/>
                        <li className={"pt-3 pb-3 d-flex flex-column align-items-center justify-content-center"}>
                            <div id={"mainSideBar"} onClick={changeSideBar} className={"collapse-btn my-3 hover-container"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                            </div>
                            <div className={"bottom-content d-flex flex-column align-items-center rounded-1"}>
                                <img
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg"
                                    alt=""/>
                                <p className={"text-center my-1"}><span className={"fw-bold"}> SB Admin Pro </span> is
                                    packed with premium features, components, and more!</p>
                                <button className={"upgrade-btn rounded-1 p-2 text-center"}> Upgrade to Pro!</button>
                            </div>
                        </li>

                    </ul>
                </div> :

                <div className={"aside-collapse px-3"}>
                    <ul>
                        <li className={"d-flex justify-content-center py-3"}>
                            <FontAwesomeIcon style={{width: 30, height: 30, rotate: '-25deg'}} color={'#fff'}
                                             icon={faSmileWink}/>
                        </li>
                        <hr className={"text-white"}/>
                        <li className={"row-gap-2 align-items-center text-white fw-bold d-flex flex-column align-content-center py-2"}>
                            <FontAwesomeIcon style={{width:15,height:15}} color={"#fff"}  icon={faTachometer}/>
                            <p>Dashboard</p>
                        </li>
                        <hr className={"text-white"}/>
                        <li className={"d-flex flex-column align-items-center"}>
                            <p className={"mb-2"}>INTERFACE</p>
                            <div className={" hover-container py-3 row-gap-1 d-flex flex-column align-items-center"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faCog}/>
                                <p>Components</p>
                            </div>

                            <div className={"py-2 row-gap-1 hover-container d-flex flex-column align-items-center gap-2"}>
                                <FontAwesomeIcon className={"aside-icon "} icon={faWrench}/>
                                <p>Utilities</p>
                            </div>
                        </li>
                        <hr className={"text-white"}/>
                        <li className={"d-flex flex-column align-items-center"}>
                            <p className={"mb-2"}>ADDONS</p>
                            <div className={"hover-container py-2 d-flex row-gap-1 flex-column align-items-center"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faFolder}/>
                                <p>Pages</p>
                            </div>
                            <div className={"py-2 hover-container d-flex row-gap-1 flex-column align-items-center"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faChartArea}/>
                                <p>Charts</p>
                            </div>
                            <div className={"py-2 hover-container d-flex row-gap-1 flex-column align-items-center"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faTable}/>
                                <p>Tables</p>
                            </div>
                        </li>
                        <li className={" pb-3 d-flex flex-column align-items-center justify-content-center"}>
                            <div id={"secondSideBar"} onClick={changeSideBar} className={"collapse-btn my-3 hover-container"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                            </div>
                            <div className={"mb-3 bottom-content d-flex flex-column align-items-center rounded-1"}>
                                <img
                                    src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg"
                                    alt=""/>
                                <p className={"text-center my-1"}><span className={"fw-bold"}> SB Admin Pro </span> is
                                    packed with premium features, components, and more!</p>
                                <button className={"upgrade-btn rounded-1 p-2 text-center"}> Upgrade to Pro!</button>
                            </div>
                        </li>
                    </ul>
                </div>
            }
        </aside>


    );
}