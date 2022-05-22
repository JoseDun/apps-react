import React from "react";
import { Theme } from "./Theme";
import Form from "./form";
import { Title } from "./Title";

const movies = [
  {
    name: "avengers",
    available: 5,
  },
  {
    name: "spiderman",
    available: 3,
  },
];

export default function App() {
  const [theme, setTheme] = React.useState("avengers");
  return (
    <Theme theme={theme}>
      <Title>Peliculas</Title>
      {movies.map((movie) => (
        <Form movie={movie} updateTheme={() => setTheme(movie.name)}></Form>
      ))}
    </Theme>
  );
}
