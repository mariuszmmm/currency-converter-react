import { CurrentDate } from "../CurrentDate";
import { StyledLegend } from "../styled";
import { Section } from "./Section";
import { Options } from "./Options";
import { Result } from "./Result";
import { Rates } from "./Rates";
import { StyledForm, Contents, Button } from "../styled";
import { Input, Select } from "./styled";
import { Flags } from "./Flags";
import { useForm } from "./useForm";

export const Form = ({ data }) => {
  const {
    amount,
    currencyInput,
    currencyOutput,
    result,
    resultOutdated,
    flagInput,
    flagOutput,
    onFormSubmit,
    onAmountChange,
    onAmountClick,
    onInputChange,
    onOutputChange
  } = useForm(data);

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Contents>
        <StyledLegend title="true">
          Kalkulator walutowy
        </StyledLegend>
        <CurrentDate />
        <Section
          title={"Kwota :"}
          body={
            <Input
              name="amount"
              value={amount}
              onChange={onAmountChange}
              onClick={onAmountClick}
              type="number"
              placeholder=" Wpisz kwotę "
              required
              autoFocus
            />
          }
        />
        <Section
          title={"Przelicz z :"}
          body={
            <Flags flag={flagInput}>
              <Select as="select"
                name="currencyInput"
                value={currencyInput}
                onChange={onInputChange}
              >
                <Options data={data} />
              </Select>
            </Flags>
          }
        />
        <Section
          title={"Przelicz na :"}
          body={
            <Flags flag={flagOutput}>
              <Select as="select"
                name="currencyOutput"
                value={currencyOutput}
                onChange={onOutputChange}
              >
                <Options data={data} />
              </Select>
            </Flags>
          }
        />
        <Result
          result={result}
          resultOutdated={resultOutdated}
        />
        <Button>Przelicz</Button>
        <Rates data={data} currencyOutput={currencyOutput} />
        <StyledLegend>
          Kursy pochodzą ze strony nbp.pl z&nbsp;tabeli&nbsp;nr&nbsp;{data.number} z&nbsp;dnia&nbsp;
          {new Date(data.date).toLocaleDateString()}
        </StyledLegend>
      </Contents>
    </StyledForm>
  )
};

