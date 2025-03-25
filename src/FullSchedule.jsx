import { useState, useEffect } from "react";


function FullSchedule() {
    const [schedules, setShedules] = useState([])
    const [showSchedule, setShowSchedule] = useState(false)


    useEffect(() => {
        if (!showSchedule) return;
        fetch(`https://api.tvmaze.com/schedule/web?date=2025-03-25`).then((response) => {
            return (response.json())
        }).then((data) => {
            if (!data || data.length === 0) {
                return Promise.reject({ message: 'Something went wrong' })
            }
            setShedules(data)
        }).catch((err) => {

        })
    }, [showSchedule]);

    const handleClick = (event) => {
        event.preventDefault();
        setShowSchedule(true)

    }
    return (
        <>
            <button onClick={handleClick}>
                Click me to see today's streaming shows !

            </button>
            <ul>
                {schedules.map((schedule) => (
                    <li key={schedule.id}>
                        <a href={schedule.url} target="_blank" >
                            {schedule.name} - Season {schedule.season}
                        </a>
                    </li>
                ))}
            </ul>



        </>
    )
}
export default FullSchedule