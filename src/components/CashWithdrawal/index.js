// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithDraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-logo">
              <p className="logo-text">S</p>
            </div>
            <p className="name-heading">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance-text">{amount}</p>
              <p className="balance-description">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
          <div className="denomination-container">
            <ul className="list-container">
              {denominationsList.map(each => (
                <DenominationItem
                  details={each}
                  key={each.id}
                  withDraw={this.onWithDraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
