import 'bootstrap/dist/css/bootstrap.css'
import '../assets/dashboard.css'
import SideBar from '../component/SideBar/sideBar'
export default function DahBoard(){
    return (
        <>
            {/*<h1 className={""}> DashBoard page </h1>*/}
            <section className={"wrapper d-flex"}>
                <div>
                    <SideBar />
                </div>
                <div>

                </div>
            </section>
        </>

    );
}