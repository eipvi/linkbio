import { FaYoutube, FaGithub, FaLinkedin,FaBehance } from 'react-icons/fa';
import "/src/sass/app.scss";

const socialNetworksData = [
    { name: "youtube", icon: <FaYoutube />},
    { name: "github", icon: <FaGithub />},
    { name: "linkedin", icon: <FaLinkedin />},
    { name: "behance", icon: <FaBehance />},

]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworksData.map((network) => (
        <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks