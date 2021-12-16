import React, { useState, useEffect } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [inputText, setInput] = useState('')

  const handleChange = (e) => {
    let { value } = e.currentTarget
    setInput(value)
  }

  useEffect(() => {
    props.searchActivity(inputText)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText])

  return (
    <div className="searchbox-container">
      <input
        className="searchbox"
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
