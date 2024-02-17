import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import cl from './ResedCode.module.css'
const ResedCode = ({ totalSec }) => {
  const countRef = useRef("");
  const [restart, setRestart] = useState(true);
  const [timee, setTime] = useState(Date.now() + totalSec);

  // console.log(countRef);
  const resendVerificationCode = (e, apiii) => {
    e.preventDefault();
    setTime(Date.now() + totalSec);
    apiii.start();
  };

  const renderer = ({ minutes, seconds, completed, api }) => {
    if (completed) {
      console.log(api);
      return (
        <div>
          <button className={cl.btnResed} onClick={(e) => resendVerificationCode(e, api)}>Resend</button>
        </div>
      );
    } else {
      return (
        <div className={cl.timeSection}>
          <span>{minutes > 9 ? minutes : `0 ${minutes}`}</span>
          <span>{" : "}</span>
          <span>{seconds > 9 ? seconds : `0 ${seconds}`}</span>
        </div>
      );
    }
  };

  useEffect(() => {
    if (restart) {
      countRef?.current?.start();
    }
  }, [restart, timee]);

  return (
    <Countdown
      date={timee}
      renderer={renderer}
      autoStart={false}
      ref={countRef}
    ></Countdown>
  );
};

export default ResedCode;
