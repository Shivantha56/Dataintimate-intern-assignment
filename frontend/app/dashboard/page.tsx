import 'bootstrap/dist/css/bootstrap.css'
import '../assets/dashboard.css'
import SideBar from '../component/sideBar'
import NavigationBar from "@/app/component/navigationBar";

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
                </div>
            </section>
        </>

    );
}