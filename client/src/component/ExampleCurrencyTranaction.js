
import React, { Component } from 'react'
import { RiArrowUpDownFill } from "react-icons/ri"
import { Link } from 'react-router-dom';
// import { API } from "../config/config"


class TransactionForm extends Component {
  state={
    currencies: ["USD", "LRD", "EUR", "AUD", "NGN", "GHS", "SLL"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: ""
  };

  handleSelectionChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      result: null
    },
      this.calculate
    );
  };

  handleInputChange = e => {
    this.setState({
      amount: e.target.value,
      result: null,
      date: null
    },
      this.calculate
    );
  };

  componentDidMount() {
    this.calculate()
  }

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      // http://api.exchangeratesapi.io/v1/latest?access_key=${API}&${this.state.base}
      fetch(``)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(2)
          this.setState({
            result,
            date
        });
      });
    }
  };

  handleCurrencySwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState({
      convertTo: base,
      base: convertTo,
      result: null
    },
      this.calculate
    );
  };

  render() {
    const { base, amount, result, date, convertTo, currencies } = this.state;

    return (
      <div className="send-money-form-container">
        <div className="inner-money-send-box">
          <div className="inner-form-calculator-box">
            <form>
              <span>{amount} {base} is equivalent to {""}
                <>
                  {
                    amount === ""
                      ? "0"
                      : result === null
                      ? "Calculating..."
                      : result}{" "}
                  {convertTo}
                </> {""}
                as of {amount === "" ? "" : date === null ? "" : date}
               </span>
              <label>You send {amount ? `${amount}${base}` : "1.00 USD"}</label>
              <div className="transaction-input-box">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={this.handleInputChange}
                  placeholder="$1000"
                />
                <select
                  name="base"
                  value={base}
                  onChange={this.handleSelectionChange}
                >
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
             </form>

            <div className="swap-currency-box">
              <span onClick={this.handleCurrencySwap}>
                <RiArrowUpDownFill id="swap-currency-icon" />
              </span>
            </div>

            <form>
              <label>Recipient Gets {amount ? `${result}${base}` : "2.00 USD"}</label>
              <div className="transaction-input-box">
                <input
                  disabled={true}
                  placeholder="$5000"

                  value={
                    amount === ""
                      ? "0"
                      : result === null
                      ? "Calculating..."
                      : result
                  }
              />
                <select
                  name="convertTo"
                  value={convertTo}
                  onChange={this.handleSelectionChange}
                >
                  {
                    currencies.map(currency => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))
                  }
                </select>
              </div>
            </form>

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
