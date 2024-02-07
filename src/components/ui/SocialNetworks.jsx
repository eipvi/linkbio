import { FaYoutube, FaGithub, FaLinkedin,FaBehance } from 'react-icons/fa';
import "/src/sass/app.scss";

const socialNetworksData = [
    { name: "youtube", icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCJEKFIsHd-f-AhUBuD-3FEg"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/eipvi"},
    { name: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/eipaulavieira/"},
    { name: "behance", icon: <FaBehance />, link: "https://www.behance.net/eipaulavieira"},

]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworksData.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks