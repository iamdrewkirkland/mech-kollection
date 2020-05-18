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
    const [statuses, setStatuses] = useState([])

    const getStatus = () => {
        return fetch(`http://localhost:8088/statuses`)
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
            .then(getStatus)
    }
    const updateStatus = status => {
        return fetch(`http://localhost:8088/statuses/${status.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "cache-control":"no-cache"
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
    }, [statuses])

    return (
        <StatusContext.Provider value={{
            statuses, addStatus, getStatus, updateStatus
        }}>
            {props.children}
        </StatusContext.Provider>
    )
}