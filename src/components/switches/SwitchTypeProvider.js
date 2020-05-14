import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const SwitchTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const SwitchTypeProvider = (props) => {
    const [switchTypes, setSwitchTypes] = useState([])

    const getSwitchTypes = () => {
        return fetch(`http://localhost:8088/switchTypes`)
            .then(res => res.json())
            .then(setSwitchTypes)
    }

    /*
        Load all materials when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getSwitchTypes()
    }, [])

    useEffect(() => {
        console.log("****  BUILD APPLICATION STATE CHANGED  ****")
    }, [switchTypes])

    return (
        <SwitchTypeContext.Provider value={{
            switchTypes,
        }}>
            {props.children}
        </SwitchTypeContext.Provider>
    )
}