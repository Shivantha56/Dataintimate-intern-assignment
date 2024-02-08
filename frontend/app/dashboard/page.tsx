import 'bootstrap/dist/css/bootstrap.css'
import '../assets/dashboard.css'
import SideBar from '../component/sideBar'
import NavigationBar from "@/app/component/navigationBar";
import DataCard from "@/app/component/DataCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from '@fortawesome/free-solid-svg-icons'


export default function DahBoard() {
    return (
        <>
            {/*<h1 className={""}> DashBoard page </h1>*/}
            <section className={"wrapper d-flex"}>
                <div>
                    <SideBar/>
                </div>
                <div className={"flex-fill"}>

                    <NavigationBar/>
                    <h3 className={"px-4 py-3"}>Dashboard</h3>
                    <div className={"data-card-container px-4 grid row"}>
                        <div className={"col-3"}>
                            <DataCard cardColor={"#4e73df"} cardMainText={"EARNINGS (MONTHLY)"} cardSubText={"40,000"}>
                                <FontAwesomeIcon style={{fontSize:'2rem', color:'#dddfeb'}} icon={faCalendar}/>
                            </DataCard>
                        </div>
                        <div className={"col-3"}>
                            <DataCard cardColor={"#1cc88a"} cardMainText={"EARNINGS (ANNUAL)"} cardSubText={"215,000"}>
                                <FontAwesomeIcon style={{fontSize:'2rem', color:'#dddfeb'}} icon={faCalendar}/>
                            </DataCard>
                        </div>
                        <div className={"col-3"}>
                            <DataCard cardColor={"#36b9cc"} cardMainText={"TASKS"} cardSubText={"50%"}>
                                <FontAwesomeIcon style={{fontSize:'2rem', color:'#dddfeb'}} icon={faCalendar}/>
                            </DataCard>
                        </div>
                        <div className={"col-3"}>
                            <DataCard cardColor={"#f6c23e"} cardMainText={"PENDING REQUESTS"} cardSubText={"18"}>
                                <FontAwesomeIcon style={{fontSize:'2rem', color:'#dddfeb'}} icon={faCalendar}/>
                            </DataCard>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}