import classes from './Home.module.scss';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';

import ShortenedLink from '../../components/ShortenedLink/ShortenedLink';
import Statistics from '../../components/Statistics/Statistics';
import GetStarted from '../../components/GetStarted/GetStarted';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main id="main">
                <HeroSection />
                <ShortenedLink />
                <Statistics />
                <GetStarted />
            </main>
            <Footer />
        </>
    );
}

export default Home;