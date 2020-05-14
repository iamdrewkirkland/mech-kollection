import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LayoutContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LayoutProvider = (props) => {
    const [layouts, setLayouts] = useState([])

    const getLayouts = () => {
        return fetch(`http://localhost:8088/layouts`)
            .then(res => res.json())
            .then(setLayouts)
    }

    /*
        Load all materials when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getLayouts()
    }, [])

    useEffect(() => {
        console.log("****  BUILD APPLICATION STATE CHANGED  ****")
    }, [layouts])

    return (
        <LayoutContext.Provider value={{
            layouts,
        }}>
            {props.children}
        </LayoutContext.Provider>
    )
}