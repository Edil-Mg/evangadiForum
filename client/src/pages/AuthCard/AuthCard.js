import React from 'react'
import "./authCard.css"

const AuthCard = () => {
  return (
		<div className="auth_container">
			<div className='description'>
				<p>About</p>
				<h1>Evangadi Networks</h1>
				<p>
					No matter what stage of life you are in, whether you’re just starting
					elementary school or being promoted to CEO of a Fortune 500 company,
					you have much to offer to those who are trying to follow in your
					footsteps.
				</p>
				<p>
					Wheather you are willing to share your knowledge or you are just
					looking to meet mentors of your own, please start by joining the
					network here.
				</p>
				<button>HOW IT WORKS</button>
			</div>
		</div>
	);
}

export default AuthCard