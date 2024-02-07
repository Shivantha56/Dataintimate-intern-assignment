import sideBar from '../component/sideBar.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmileWink,faTachometer,faCog,faAngleUp,faWrench,faFolder,faChartArea,faTable} from "@fortawesome/free-solid-svg-icons";


export default function SideBar(): JSX.Element{
    return (
        // implementing left sidebar
        <aside >
            <div className={"aside-container"}>
                <ul className={"aside-menu-list px-3"}>
                    <li className={"d-flex py-3 justify-content-center align-items-center"}>
                    {/*  aside top  */}
                        <FontAwesomeIcon color={'#fff'} width={39} height={39} icon={faSmileWink}/>
                        <p className={"logo-name ms-3 text-white fw-bold"}>SB ADMIN</p>
                        <p className={"fw-bold mb-3 ms-1"}>2</p>
                    </li>
                    <hr className={"m-0"}/>
                    <li className={"column-gap-2 text-white fw-bold d-flex align-content-center py-3"}>
                        <FontAwesomeIcon  color={"#fff"} width={13} icon={faTachometer}/>
                        <p>Dashboard</p>
                    </li>
                    <hr className={"m-0"}/>
                    <li className={"d-flex flex-column"}>
                        <p className={"row-header mt-3"}>Interface</p>
                        <div className={"justify-content-between column-gap-2 d-flex my-3"}>
                            <div className={"d-flex gap-2"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faCog}/>
                                <p>Components</p>
                            </div>
                            <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                        </div>
                        <div className={"justify-content-between column-gap-2 d-flex my-3"}>
                            <div className={"d-flex gap-2"}>
                                <FontAwesomeIcon className={"aside-icon"} icon={faWrench}/>
                                <p>Utilities</p>
                            </div>
                            <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                        </div>
                    </li>
                    <hr className={"m-0"}/>
                    <li className={"d-flex flex-column"}>
                        <p className={"row-header mt-3"}>Addons</p>
                        <div className={"d-flex my-3 justify-content-between"}>
                            <div className={"d-flex gap-2"}>
                                <FontAwesomeIcon  className={"aside-icon"} icon={faFolder}/>
                                <p>Pages</p>
                            </div>
                            <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                        </div>
                        <div className={"d-flex my-3 gap-2"}>
                            <FontAwesomeIcon className={"aside-icon"} icon={faChartArea}/>
                            <p>Charts</p>
                        </div>
                        <div className={"d-flex my-3 gap-2"}>
                            <FontAwesomeIcon className={"aside-icon"} icon={faTable}/>
                            <p>Tables</p>
                        </div>
                    </li>
                    <hr className={"m-0"}/>
                    <li className={"mt-3 pb-3 d-flex flex-column align-items-center justify-content-center"}>
                        <div className={"collapse-btn my-3"}>
                            <FontAwesomeIcon className={"aside-icon"} icon={faAngleUp}/>
                        </div>
                        <div className={"bottom-content d-flex flex-column align-items-center rounded-1"}>
                            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt=""/>
                            <p className={"text-center my-1"}><span className={"fw-bold"}> SB Admin Pro </span> is packed with premium features, components, and more!</p>
                            <button className={"upgrade-btn rounded-1 p-2 text-center"}> Upgrade to Pro! </button>
                        </div>
                    </li>

                </ul>
            </div>
        </aside>
    );
}