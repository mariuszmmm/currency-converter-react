import { Button } from "../styled";

export const Error = ({ oldData }) => {
  return (
    <>
      {oldData ?
        <>
          <p>Wystąpił błąd przy pobieraniu danych.</p>
          <p>Czy chcesz użyć kopi z&nbsp;
            {new Date(oldData.date).toLocaleDateString()}r&nbsp;?
          </p>
          <Button> OK </Button>
        </>
        :
        <>
          <p>Niestety wystąpił błąd pobierania danych.</p>
          <p>Spróbuj później.</p>
        </>
      }
    </>
  )
};