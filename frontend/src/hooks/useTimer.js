import { useEffect, useState } from "react";

export default function useTimer() {
    const [time, setTime] = useState({
        h: 0, m: 0, s: 0
    })

    useEffect(() => {
        let subtract = 1
        let interval = setInterval(() => {
            setTime((prev) => {
                let newTime = JSON.parse(JSON.stringify(prev))
                
                if (newTime.h == 0 && newTime.m == 0 && newTime.s == 0) {
                    clearInterval(interval)
                    return prev
                }
                newTime.s -= subtract
                if (newTime.s == 0) {
                    if (newTime.m != 0) {
                        newTime.m -= subtract
                        newTime.s = 59
                    }
                    else if (newTime.m == 0) {
                        if (newTime.h != 0) {
                            newTime.h -= subtract
                            newTime.m = 59
                            newTime.s = 59
                        }
                    }
                }
                
                return newTime
            })
        }, 1000)

        return () => clearInterval(interval)
    })

    return {
        time,
        startTime: (h, m, s) => {
            setTime({h, m, s})
        }
    }
}