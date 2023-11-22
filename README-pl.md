<p align="right">
  🌍&nbsp; <a href="README.md">angielski</a> &nbsp; polski
</p>

# [Kalkulator wymiany walut](https://mariuszmmm.github.io/currency-converter-react/)
* [Wypróbuj teraz](https://mariuszmmm.github.io/currency-converter-react/)
* [Prezentacja](#prezentacja)
* [Opis](#opis)
* [Technologie](#technologie)
* [Konfiguracja](#konfiguracja)
* [Widok aplikacji](#widok-aplikacji)
<br>

## Prezentacja
![Currency converter](public/images/presentation.gif)

<br>

## Opis
<b>'Kalkulator wymiany walut'</b> to aplikacja zbudowana przy użyciu biblioteki React.js.<br>
Pozwala na łatwą i szybką konwersję walut na podstawie aktualnych kursów wymiany ze strony Narodowego Banku Polskiego (NBP).

Aplikacja wykorzystuje technologię 'fetch' do pobierania bieżących kursów wymiany walut z zewnętrznego źródła danych.<br>
Dzięki obsłudze błędów za pomocą metody 'catch', aplikacja reaguje na sytuacje, w których pobieranie danych się nie powiedzie.

W przypadku wystąpienia błędu podczas pobierania aktualnych kursów walut, aplikacja automatycznie proponuje załadowanie ostatnio zapisanych kursów z local storage.<br>
Umożliwia to użytkownikom dostęp do ostatnio zapisanych stawek w przypadku problemów z łącznością ze źródłem zewnętrznym.

Dodatkowo, aplikacja jest responsywna, płynnie dostosowując się do różnych rozmiarów ekranów i urządzeń.

<br>

## Technologie
<ul>
<li>JavaScript ES6+ Features</li>
<li>React.js</li>
<li>JSX</li>
<li>CSS</li>
<li>Styled Components</li>
<li>Media Queries</li>
<li>Controlled Components</li>
<li>Custom Hooks</li>
<li>API Integration</li>
</ul>

<br>

## Konfiguracja
Aby uruchomić program z repozytorium 'currency-converter-react' na swoim komputerze, wykonaj następujące kroki:

1. <b>Pobranie kodu źródłowego:</b><br>
Sklonuj repozytorium ze strony GitHub na swój komputer lokalny za pomocą polecenia:
```commandline
     git clone https://github.com/mariuszmmm/currency-converter-react.git
```
2. <b>Instalacja zależności:</b><br>
Przejdź do katalogu projektu, a następnie zainstaluj wszystkie wymagane zależności za pomocą menedżera pakietów, takiego jak npm:
```commandline
    cd currency-converter-react
    npm install
```
3. <b>Uruchomienie aplikacji:</b><br>
Po zainstalowaniu zależności, możesz uruchomić aplikację lokalnie. Użyj polecenia:
```commandline
    npm start
```
 To polecenie uruchomi aplikację w trybie deweloperskim, otwierając ją w przeglądarce pod adresem http://localhost:3000.

<br>

## Widok aplikacji
Aplikacja jest w pełni responsywna i dostosowuje się do różnych urządzeń.<br>
Zrzuty ekranu prezentują wygląd aplikacji zarówno na telefonach, jak i tabletach, pokazując, jak responsywnie dostosowuje się do zmiany rozmiaru ekranu.

![Currency converter](public/images/size.png)
