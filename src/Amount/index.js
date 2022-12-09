import "./style.css";

const Amount = () => (
    <input type="number" min="1" max="999999999" step="0.01" className="form__field" name="sum"
        placeholder=" Wpisz kwotę " required />
);

export default Amount;