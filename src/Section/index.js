import "./style.css";

const Section = ({ title, body }) => (
    <section className="form__section">
        <label>
            <span className="form__leabelText">{title}</span>
            {body}
        </label>
    </section>
);

export default Section;

