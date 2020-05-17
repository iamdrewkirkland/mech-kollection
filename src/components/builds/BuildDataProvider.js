import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const BuildContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const BuildProvider = (props) => {
    const [builds, setBuilds] = useState([])

    const getBuilds = () => {
        return fetch(`http://localhost:8088/builds`)
            .then(res => res.json())
            .then(setBuilds)
    }

    const addBuild = (build) => {
        return fetch("http://localhost:8088/builds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(build)
        })
            .then(getBuilds)
    }
    const deleteBuild = (buildId) => {
        return fetch(`http://localhost:8088/builds?=${buildId}`, {
            method: "DELETE"
        })
            .then(getBuilds)
    }
    const updateBuild = build => {
        return fetch(`http://localhost:8088/builds?=${build.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "cache-control":"no-cache"
            },
            body: JSON.stringify(build)
        })
            .then(getBuilds)
    }

    

    /*
        Load all builds when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getBuilds()
    }, [])

    useEffect(() => {
        console.log("****  BUILD APPLICATION STATE CHANGED  ****")
    }, [builds])

    return (
        <BuildContext.Provider value={{
            builds, addBuild, deleteBuild, updateBuild
        }}>
            {props.children}
        </BuildContext.Provider>
    )
}