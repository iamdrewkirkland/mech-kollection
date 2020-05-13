import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const StatusContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const StatusProvider = (props) => {
    const [status, setStatus] = useState([])

    const getStatus = () => {
        return fetch("http://localhost:8088/statuses")
            .then(res => res.json())
            .then(setStatus)
    }

    const addStatus = status => {
        return fetch("http://localhost:8088/statuses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(status)
        })
            .then(getStatus)
    }

    /*
        Load all builds when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getStatus()
    }, [])

    useEffect(() => {
        console.log("****  STATUS APPLICATION STATE CHANGED  ****")
    }, [status])

    return (
        <StatusContext.Provider value={{
            status, addStatus
        }}>
            {props.children}
        </StatusContext.Provider>
    )
}