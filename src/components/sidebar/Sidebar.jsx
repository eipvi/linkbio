import SocialNetworks from '/src/components/ui/SocialNetworks.jsx';
import Avatar from "/src/public/img/paulav.jpeg";
import Information from '../ui/Information.jsx';

import "/src/sass/app.scss";

const Sidebar = () => {
  return (
<aside id="sidebar">
<img src={Avatar} alt="Paula Vieira" />
<h1>Paula V.</h1>
<p className="title">Dev e Ui/Ux Design</p>
<SocialNetworks />
<Information />
<a href="" className="btn">Entre em contato</a>
</aside>  )
}

export default Sidebar