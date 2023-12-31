// import React, { useState } from "react";
// import "./LoginScreen.css";
// import SignupScreen from "./SignupScreen";
// import { useNavigate } from "react-router-dom";
// import ReactAudioPlayer from "react-audio-player";

// function LoginScreen() {
//   const [signIn, setSignIn] = useState(false);
//   const history = useNavigate();
//   const [volume, setVolume] = useState(0.5);
//   const [muted, setMuted] = useState(false);


//   const handleMuteToggle = () => {
//     setMuted(!muted);
//   };

// return (
//   <div className="loginScreen">
//     <ReactAudioPlayer
//       src="./audio/one-wish.mp3"
//       autoPlay
//       loop
//       volume={volume}
//       muted={muted}
//     />
//     <div className="loginScreen_background">
//       <img
//         className="loginScreen_logo"
//         src="images/netflix.png"
//         onClick={() => history("/")}
//         alt=""
//       />
//       <button onClick={handleMuteToggle} className="loginScreen_sound">
//         <img src="images/volume.png" alt="" />
//         {muted ? "Unmute" : "Mute"}
//       </button>

//       <button onClick={() => setSignIn(true)} className="loginScreen_button">
//         Sign In
//       </button>
//       <div className="loginScreen_gradient"></div>
//       <div className="loginScreen_body">
//         {signIn ? (
//           <SignupScreen />
//         ) : (
//           <>
//             <h1>Unlimited films, TV programs, and more.</h1>
//             <h2>Join today. Cancel anytime.</h2>
//             <h3>
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </h3>
//             <div className="loginScreen_input">
//               <form>
//                 <input type="email" placeholder="Email address" />
//                 <button
//                   onClick={() => setSignIn(true)}
//                   className="loginScreen_getStarted"
//                 >
//                   Get Started ›
//                 </button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// );
// }

// export default LoginScreen;



// -----------------------------------------------------------------------
//                                NEW CODE

import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { useNavigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const history = useNavigate();
  const [volume, setVolume] = useState(0.5); // Initial volume value
  const [muted, setMuted] = useState(false);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  const handleVolumeScroll = (event) => {
    // Increase or decrease volume based on scroll direction
    const delta = event.deltaY > 0 ? -0.05 : 0.05;
    setVolume((prevVolume) => {
      let newVolume = prevVolume + delta;
      newVolume = Math.min(1, Math.max(0, newVolume)); // Ensure volume is between 0 and 1
      return newVolume;
    });
  };

  return (
    <div className="loginScreen">
      <ReactAudioPlayer
        src="./audio/one-wish.mp3"
        autoPlay
        loop
        volume={volume}
        muted={muted}
      />
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="images/netflix.png"
          onClick={() => history("/")}
          alt=""
        />
        <button
          onClick={handleMuteToggle}
          onWheel={handleVolumeScroll}
          className="loginScreen_sound"
        >
          <img src="images/volume.png" alt="" />
          {muted ? "Unmute" : "Mute"}
        </button>

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programs, and more.</h1>
              <h2>Join today. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted"
                  >
                    Get Started ›
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
