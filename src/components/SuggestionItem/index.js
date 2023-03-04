import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestions, arrowIconClick} = this.props
    const {suggestion} = suggestions
    const arrowClick = () => {
      arrowIconClick(suggestion)
    }
    return (
      <li>
        <div className="suggestionContainer">
          <p className="description">{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrowImage"
            onClick={arrowClick}
          />
        </div>
      </li>
    )
  }
}

export default SuggestionItem
