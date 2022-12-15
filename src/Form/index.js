import "./style.css";
import Legend from "../Legend";
import Section from "../Section";
import Result from "../Result";
import Button from "../Button";
import { currencies } from "../currencies"
import { useState } from "react";

export const Form = ({ calculateResult, result, resetResult }) => {
	const [currencyInput, setCurrencyInput] = useState(currencies[0].symbol);
	const [currencyOutput, setCurrencyOutput] = useState(currencies[1].symbol);
	const [lastDiferentInput, setlastDiferentInput] = useState(currencies[0].symbol);
	const [lastDiferentOutput, setlastDiferentOutput] = useState(currencies[1].symbol);
	const [amount, setAmount] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(currencyInput, currencyOutput, amount);
	};

	const onSelectClick = () => {
		if (currencyInput === currencyOutput && lastDiferentOutput) {
			setCurrencyOutput(lastDiferentInput);
		};
		if (currencyInput === currencyOutput && lastDiferentInput) {
			setCurrencyInput(lastDiferentOutput);
		};
		if (currencyInput !== currencyOutput) {
			setlastDiferentInput(currencyInput);
			setlastDiferentOutput(currencyOutput);
		};
	};

	const onFormClick = () => {
		resetResult();
	}

	const onAmountChange = ({ target }) => setAmount(target.value);

	const onInputChange = ({ target }) => setCurrencyInput(target.value);

	const onOutputChange = ({ target }) => setCurrencyOutput(target.value);

	return (
		<form className="form" onSubmit={onFormSubmit} onClick={onFormClick}>
			<fieldset className="form__fieldset">
				<Legend title={"Kalkulator walutowy"} />
				<Section
					title={"Kwota :"}
					body={
						<input
							value={amount}
							onChange={onAmountChange}
							className="form__field"
							type="numer"
							step="1"
							min="1"
							max="999999999"
							placeholder=" Wpisz kwotę "
							required
							autoFocus
						/>
					}
				/>
				<Section
					title={"Przelicz z :"}
					body={
						<select
							value={currencyInput}
							onClick={onSelectClick}
							onChange={onInputChange}
							className="form__field form__field--select"
						>
							{currencies.map(currency => (
								<option
									key={currency.symbol}
									value={currency.symbol}
								>
									{currency.symbol} / {currency.name}
								</option>
							))}
						</select>
					}
				/>
				<Section
					title={"Przelicz na :"}
					body={
						<select
							value={currencyOutput}
							onClick={onSelectClick}
							onChange={onOutputChange}
							className="form__field form__field--select"
						>
							{currencies.map(currency => (
								<option
									key={currency.symbol}
									value={currency.symbol}
								>
									{currency.symbol} / {currency.name}
								</option>
							))}
						</select>
					}
				/>
				<Result result={result} />
				<Button />
				{currencies.map((currency) => (
					<Section key={currency.symbol}
						title={`Kurs ${currency.symbol} :`}
						body={
							<input
								defaultValue={currency.rate}
								className="form__field js-rateEUR"
								disabled
							/>
						}
					/>
				))}
			</fieldset>
		</form>
	)
};