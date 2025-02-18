import { useEffect, useState } from "react";

export default function Timer({ result }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timer;

        if (result) {
            clearInterval(timer);
        } 
        else {
            setMinutes(0);
            setSeconds(0);

            timer = setInterval(() => {
                setSeconds((prevSec) => {
                    if (prevSec === 59) {
                        setMinutes((prevMin) => prevMin + 1);
                        return 0;
                    }
                    return prevSec + 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [result]);

    return (
        <p>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
        </p>
    );
}
