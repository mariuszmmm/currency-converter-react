import "./style.css";

const Output = (props) => (
    <select className="form__field form__field--select" name="currencyOutput">
        <option value="PLN">PLN / Złoty</option>
        <option value="EUR">EUR / Euro</option>
        <option value="USD">USD / Dolar</option>
        <option value="GBP">GBP / Funt</option>
    </select>
);

export default Output;