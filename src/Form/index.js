import "./style.css";

const Form = ({ children }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            {children}
        </fieldset>
    </form>
);

export default Form;