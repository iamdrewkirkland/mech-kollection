import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MaterialContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const MaterialProvider = (props) => {
    const [materials, setMaterials] = useState([])

    const getMaterials = () => {
        return fetch("http://localhost:8088/materials")
            .then(res => res.json())
            .then(setMaterials)
    }



    /*
        Load all builds when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getMaterials()
    }, [])

    useEffect(() => {
        console.log("****  BUILD APPLICATION STATE CHANGED  ****")
    }, [materials])

    return (
        <MaterialContext.Provider value={{
            materials, 
        }}>
            {props.children}
        </MaterialContext.Provider>
    )
}