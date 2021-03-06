import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ResultsContext = React.createContext()



/*
 This component establishes what data can be used.
 */
export const ResultsProvider = (props) => {
    const [results, setResults] = useState([])

    const getResults = (userId) => {
        return fetch(`http://localhost:8088/results`)
            .then(res => res.json())
            .then(setResults)
    }

    const addResults = (result) => {
        return fetch("http://localhost:8088/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(getResults)
    }
    const deleteResults = (resultId) => {
        return fetch(`http://localhost:8088/results/${resultId}`, {
            method: "DELETE",
        })
            .then(getResults)
    }

    /*
        Load all results when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getResults()
    }, [])

    useEffect(() => {
        console.log("****  RESULTS APPLICATION STATE CHANGED  ****")
    }, [results])

    return (
        <ResultsContext.Provider value={{
            results, addResults, deleteResults
        }}>
            {props.children}
        </ResultsContext.Provider>
    )
}