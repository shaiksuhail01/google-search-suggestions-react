import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowIconClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="divContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="suggestionsContainer">
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="listContainer">
            {searchResults.map(eachObj => (
              <SuggestionItem
                key={eachObj.id}
                suggestions={eachObj}
                arrowIconClick={this.arrowIconClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
