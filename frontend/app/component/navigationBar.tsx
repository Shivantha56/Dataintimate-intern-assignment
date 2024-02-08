import '../assets/navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch,faBell,faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar(){
    return (
        <div className={"box-shadow d-flex px-5 py-3 align-items-center justify-content-between navbar-container"}>
            <div className={""}>
                <div>
                    <div className="d-flex  align-items-center">
                        <div>
                            <input type="email" className="h-auto search-field form-control border-0 d-block rounded-end-0" id="exampleFormControlInput1"
                                   placeholder="Search for..."/>
                        </div>
                        <div className={"rounded-end searchIcon-container d-flex justify-content-center align-items-center"}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"d-flex align-items-center gap-4"}>
                <div className={"notification-container d-flex align-items-center column-gap-4"}>
                    <div className={"position-relative"}>
                        <FontAwesomeIcon className={"icon-container"} icon={faBell}/>
                        <span className={"position-absolute top-0 start-100 translate-middle badge rounded bg-danger"}>3+</span>
                    </div>
                    <div className={"position-relative"}>
                        <FontAwesomeIcon className={"icon-container"} icon={faEnvelope}/>
                        <span className={"position-absolute top-0 start-100 translate-middle badge rounded bg-danger"}>7</span>
                    </div>
                </div>
                <div className="vr"></div>
                <div className={"profile-container gap-2 d-flex align-items-center position-relative"}>
                    <p>Douglas McGee</p>
                    <div className={"d-dle justify-content-center align-items-center"}>
                        <img className={""} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}