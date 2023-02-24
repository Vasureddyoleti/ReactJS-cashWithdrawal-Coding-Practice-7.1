// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, withDraw} = props
  const {value} = details

  const withDrawAmount = () => {
    withDraw(value)
  }

  return (
    <li>
      <button type="button" onClick={withDrawAmount} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
