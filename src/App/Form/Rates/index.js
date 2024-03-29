import { Section } from "../Section";
import { Input } from "../styled";
import { Flags } from "../Flags";

export const Rates = ({ data, currencyOutput }) => {
  const { PLN, ...currenciesData } = data.currenciesData;
  const sortedCurrenciesData = Object.values(currenciesData).sort((a, b) => a.code.localeCompare(b.code));
  const displayStyle = (prop) => prop.toFixed(4).toString().replace('.', ',');

  return (
    sortedCurrenciesData.map((object) => (
      <Section key={object.code}
        title={currencyOutput === "PLN" ? `${object.code} / PLN :` : `PLN / ${object.code} :`}
        body={
          <Flags flag={object.flag}>
            <Input rate="true"
              name="rate"
              value={currencyOutput === "PLN" ? displayStyle(1 / object.rate) : displayStyle(object.rate)}
              disabled
            />
          </Flags>
        }
      />
    ))
  )
};