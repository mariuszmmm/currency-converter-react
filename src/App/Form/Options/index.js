import { currencies } from "../currencies";

const Options = () => {
	return (
		currencies.map(currency => (
			<option
				key={currency.symbol}
				value={currency.symbol}
			>
				{currency.name} / {currency.symbol}
			</option>
		))
	)
};

export default Options;