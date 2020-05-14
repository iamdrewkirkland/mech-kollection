import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const StatusContext = React.createContext()

const userId = localStorage.getItem("current_user")


/*
 This component establishes what data can be used.
 */
export const StatusProvider = (props) => {
    const [statuses, setStatuses] = useState([])

    const getStatus = (userId) => {
        return fetch(`http://localhost:8088/statuses?userId=${userId}`)
            .then(res => res.json())
            .then(setStatuses)
    }

    const addStatus = (status) => {
        return fetch("http://localhost:8088/statuses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(status)
        })
            .then(getStatus(userId))
    }

    /*
        Load all builds when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getStatus(userId)
    }, [])

    useEffect(() => {
        console.log("****  STATUS APPLICATION STATE CHANGED  ****")
    }, [statuses])

    return (
        <StatusContext.Provider value={{
            statuses, addStatus, getStatus
        }}>
            {props.children}
        </StatusContext.Provider>
    )
}