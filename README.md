# Zadanie

`Conditional Rendering`

Stwórz komponent `SquareOrCircle`, który w zależności od potrzeby będzie:

- kwadratem 200x200 pixeli
- albo okręgiem o średnicy 200px.

Komponent powinien przyjmować prop `isCircle` (typu Boolean), który:

- jeśli ma wartość true, renderuje koło
- jeśli ma wartość false, renderuje kwadrat.

Użyj elementu `<div>` do wykonania kształtu.
Użyj do tego [dynamicznego przypisywania wartości atrybutu style](https://pl.reactjs.org/docs/dom-elements.html#style).

```
let dynamicStyles = {
  // CSS tutaj w formacie takim:
  // camelCase: "camelCase", 
  // (np.)
  // fontWeight: "20px",
}

<div style={dynamicStyles}></div>
```