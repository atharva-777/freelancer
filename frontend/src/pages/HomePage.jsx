// import Header from './components/layout/Header';
// import ForTalent from './components/ForTalent';

import Header from "../components/layout/Header";
import ForTalent from "../components/ForTalent";



function HomePage() {
    return (
        <div className="Home">
            <header className="">
            <Header/>
            <ForTalent/>
            </header>
        </div>
    );
}

export default HomePage;