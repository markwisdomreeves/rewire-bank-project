import React, { Component } from 'react'
import data from '../data'
import { Link } from 'react-router-dom';
import SelectCurrency from "./SelectCurrency"


class TransactionForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate
    }

    this.onSelectCurrency = this.onSelectCurrency.bind(this);
  }

  onSelectCurrency(code){
    const {currencies, currencyAval} = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0],
      currencyBval: currencyAval * currency[0].sellRate
    })
  }


  onChangeHandler(e, currency){
    const {currencyB} = this.state;

    if(currency === 'A'){

      const newValueA = e.target.value;
      this.setState({
        currencyAval: newValueA,
        currencyBval: newValueA * currencyB.sellRate
      })

    } else if(currency === 'B'){

      const newValueB = e.target.value;
      this.setState({
        currencyAval: newValueB / currencyB.sellRate,
        currencyBval: newValueB
      })

    }

  }


  render() {

    const {currencies, currencyA, currencyB, currencyAval, currencyBval} = this.state;

    return (
      <div className="send-money-form-container">
        <div className="inner-money-send-box">
          <div className="inner-form-calculator-box">

            <div className="currency-header-box">
              <label>You send {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`}</label>
              <label>Recipient Gets {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}</label>
            </div>

            <div className="currency-input-container">

              <div className="currency-select-container">
                <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
              </div>

              <div className="custom-transaction-input-box">

                <div className="inner-currency-box">
                  <h3 className={`currency-flag-style ${currencyA.code}`}>{currencyA.name}</h3>
                  <div className="currency-input-group">
                    <span>{currencyA.sign}</span>
                    <input type="number" value={currencyAval} pattern="\d\.\d{2}" onChange={(e) => {
                      this.onChangeHandler(e, 'A');
                    }} />
                    <span>{currencyA.code}</span>
                  </div>
                </div>

                <div className="inner-currency-box">
                  <h3 className={`currency-flag-style ${currencyB.code}`}>{currencyB.name}</h3>
                  <div className="currency-input-group">
                    <span>{currencyB.sign}</span>
                    <input type="number" value={currencyBval} pattern="\d\.\d{2}"  onChange={(e) => {
                      this.onChangeHandler(e, 'B');
                    }}/>
                    <span>{currencyB.code}</span>
                  </div>
                </div>

              </div>

              <div className="currency-result-box">
                <p>
                  Exchange Rate {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} = {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
                </p>
              </div>

            </div>

            <Link
              to="/login"
              type="button"
              className="btn-container"
            >
              Continue your transaction
            </Link>

            <div className="currency-rate-text-box">
              <span>
                <strong>84.40</strong>
                Exchange rate
              </span>
              <span>
                <strong>4.60</strong>
                Tranaction fees
              </span>
            </div>

            <div className="tranaction-text-container">
              <p>
                By clicking continue, I agree with the
                <Link to="####"> Terms </Link> & <Link to="####"> Conditions </Link>
                </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default TransactionForm
