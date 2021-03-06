import React from 'react';
import '../styles/Landing.css';

function Landing() {
	return (
		<div className="wrapper">
			<div className="header">
				<p className="headerText">
					Welcome to <span className="highlight"> Cody Pardi's </span> Online Resume
				</p>
			</div>
			<div className="contentWrapper">
				<div className="column">
					<p className="articleHeader">Contact</p>
					<li className="text">
						Email:{' '}
						<a
							classname="highlight"
							href="mailto:cody@pardi.net?subject=Minipholio%20Site%20Contact%20Inquiry"
						>
							cody@pardi.net
						</a>
					</li>

					<p className="articleHeader">Developer Experience</p>
					<li className="text">
						<a target="_blank" href="https://github.com/ThirdGhostHand">
							My Github
						</a>
					</li>
					<li className="text">
						<span className="highlight">MuellerTek:</span> I started taking my first contracts while still
						in school during the March of 2017. My first boss was a friend, Micheal Mueller. We have worked
						on an open source, server sharding, sandbox MMO and together again on ROMTech.
					</li>
					<li className="text">
						<span className="highlight">LogosBlock: </span>LogosBlock was an incredibly fun, fast paced,
						high intensity, decentralized finance oriented startup based here in Seattle. With them I
						developed on Azure, with React, Node, and Ethereum (highly recommendable stack, just for the
						kicks), and a very cool market stack.
					</li>
					<li className="text">
						<span className="highlight">EasySetGo: </span>EasySet is a Bay Area startup run by some of the
						highest integity folks I have met, and they are building a very cool automated physical security
						assessment service. I am their main fullstack feature engineer.
					</li>
					<ul>
						<li className="listItem">MuellerTek (Mar 2017-2020)</li>
						<div className="column">
							<a className="highlight" target="_blank" href="https://github.com/ThirdGhostHand/minds">
								-Planet Concourse
							</a>
							<a className="highlight" target="_blank" href="https://colormarketing.org/">
								-ColorMarketing
							</a>
							<a className="highlight" target="_blank" href="http://theexpanse.ca/">
								-The Expanse
							</a>
						</div>
						<li className="listItem">LogosBlock (Dec 2018-Dec 2019)</li>
						<a className="highlight" target="_blank" href="http://logosblock.com/">
							-LogosBlock
						</a>
						<li className="listItem">ROMTech (Jan 2020-July 2020)</li>
						<div className="column">
							<a className="highlight" target="_blank" href="https://www.romtech.com/">
								-ROMTech
							</a>
						</div>
						<li className="listItem">EasySetGo (Aug 2020-Present)</li>
						<a className="highlight" target="_blank" href="https://www.easysetgo.com/">
							-EasySetGo
						</a>
					</ul>
					<p className="articleHeader">Technical Skills</p>
					<li className="text">
						<span className="highlight">Baser Languages: </span>JavaScript, HTML, CSS, Solidity, SQL,
						jQuery, Python and C# (those last two are my favorite languages, but I haven’t used them nearly
						as much as JavaScript)
					</li>
					<li className="text">
						<span className="highlight">Online Tech: </span>React, Redux, Node, Express, D3, Ethereum
					</li>
					<li className="text">
						<span className="highlight">Databases/Other: </span>MongoDB, Mongoose, Postgresql, MySQL
					</li>
				</div>
				<div className="column">
					<p className="articleHeader">My attitude and working habits</p>
					<li className="text">
						I learn fast. I'm practied at picking up and putting to use new skills as they're needed to meet
						the needs of the sheer variety of projects I work on.
					</li>
					<li className="text">
						New and practical technology gives me energy. I love to invent and create technologies that will
						bring real help to real people.
					</li>
					<li className="text">
						I love to learn. It's a necessity for me. I'll grow bored if I stop learning or being
						challenged.
					</li>
					<li className="text">
						I have the capacity to be self-sufficient. If help is available, I will use it. Otherwise I’m
						not scared of documentation, Google, or finding someone in the know.
					</li>
					<li className="text">I'm honest and upfront. I'll tell it to you how it is.</li>
					<p className="articleHeader">About me and my other practiced skills.</p>
					<li className="text">
						I’m a Seattle native. My dad has worked at Microsoft for twenty-two years, my mom homeschooled
						me and my two siblings. We lived in Florida for two years, and my parents took us to the UK
						during while I was in high school. I’ve also traveled to Tucson, Rochester, New York, and DC.
					</li>
					<li className="text">
						I have been a swimmer for over a decade with strong competitive background. I have worked with
						various Olympians and Olympic coaches on both my own stroke and in instructing others. I have
						coached swim team myself for about five years total.
					</li>
					<li className="text">
						I like to write. I am unpuplished, but I spend multiple hours a week writing and have several
						projects greater than thirty thousand words.
					</li>
					<li className="text">
						I enjoy cooking. I like catering and throwing parties and practicing an elaborate dish over the
						weekend. I’ve learned from my mom who a very well-rounded and self-taught cook, and my dad’s
						side of the family is full Italian and have brought their cooking and techniques with them
						throughout the generations.
					</li>
				</div>
			</div>
		</div>
	);
}

export default Landing;
