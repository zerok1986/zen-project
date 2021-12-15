import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
  const [inputText, setInput] = useState('')

  const handleChange = (e) => {
    let { value } = e.currentTarget
    setInput(value)
  }

  useEffect(() => {
    props.searchActivity(inputText)
  }, [inputText])

  return (
    <div className="searchbox-container">
      <input
        onChange={handleChange}
        value={inputText}
        type="text"
        name="productInput"
        placeholder="Busca por palabras clave..."
      ></input>
    </div>
  )
}

export default SearchBar
