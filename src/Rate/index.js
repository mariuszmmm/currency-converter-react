import "./style.css";

const Rate = (props) => (
    <input type="number" min="0.0001" max="999" step="0.0001" className="form__field js-rateEUR" name="rate"
        defaultValue="4.7039" placeholder="Wpisz kurs " required></input>
);

export default Rate;