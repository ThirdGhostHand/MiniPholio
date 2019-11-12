import React from 'react';
import '../styles/Landing.css';

import BOOMER from '../images/BOOMER.gif'

function Landing() {
  return (
    <div className="wrapper">
      <div className="single">
        <p className="post">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan posuere malesuada. Donec suscipit, odio id egestas sollicitudin, orci nunc fermentum felis, a iaculis orci orci eget nisi. Morbi eget pulvinar risus. Pellentesque tempus metus felis, eget tempus erat imperdiet ac. Vivamus sed nisi eu ligula pretium vestibulum. Nunc faucibus orci nec nulla consequat elementum eu a ante. Etiam et iaculis nisl, non placerat mi. Suspendisse vitae egestas velit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mattis erat, et dictum metus. Integer et auctor elit. Donec eu aliquet nisl. Proin at est vitae libero accumsan molestie. In odio sem, placerat a sem sit amet, egestas viverra ante. Nam mi augue, sodales laoreet hendrerit eu, ullamcorper eleifend odio. Proin vitae aliquet sem. Nulla tempus luctus lorem, nec bibendum erat vehicula quis. Suspendisse vel gravida elit.
        </p>
      </div>
      <div className="double">
        <div className="post">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan posuere malesuada. Donec suscipit, odio id egestas sollicitudin, orci nunc fermentum felis, a iaculis orci orci eget nisi. Morbi eget pulvinar risus. Pellentesque tempus metus felis, eget tempus erat imperdiet ac. Vivamus sed nisi eu ligula pretium vestibulum. Nunc faucibus orci nec nulla consequat elementum eu a ante. Etiam et iaculis nisl, non placerat mi. Suspendisse vitae egestas velit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mattis erat, et dictum metus. Integer et auctor elit. Donec eu aliquet nisl. Proin at est vitae libero accumsan molestie. In odio sem, placerat a sem sit amet, egestas viverra ante. Nam mi augue, sodales laoreet hendrerit eu, ullamcorper eleifend odio. Proin vitae aliquet sem. Nulla tempus luctus lorem, nec bibendum erat vehicula quis. Suspendisse vel gravida elit.
        </div>
        <img className="post"src={BOOMER} />

      </div>  
        {/* <div className="single">
          <div className="post">
          </div>
        </div>
        <div className="double">
          <div className="post">
          <div>
          <div className="post">
          </div> 
        </div> */}
    </div>
  );
}

export default Landing;
