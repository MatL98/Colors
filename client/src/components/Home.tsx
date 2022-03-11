import React, { Fragment, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface IColor {
  color: string;
}

const HomePage = () => {
  const [datos, setDatos] = useState({
    color: "",
  });
  const [colors, setColors] = useState<IColor[]>();

  const getColors = () => {
    axios
      .get("http://localhost:3001/")
      .then(function (response: AxiosResponse) {
        const data: any = response.data.colors;
        console.log(data);
        const addColor: IColor[] = [...data];
        setColors(addColor);
      });
  };

  useEffect(() => {
    getColors();
  }, colors);

  const sendColor = () => {
    if (datos.color) {
      axios
        .post("http://localhost:3001/", datos)
        .then(function (response: AxiosResponse) {
          console.log(response);
        })
        .catch(function (error: Error) {
          console.log(error);
        });
        
    }
  };

  return (
    <Fragment>
      <form>
        <h2>Formulario</h2>
        <input
          type="text"
          name="color"
          placeholder="agrega un color"
          id="color"
          value={datos.color}
          onChange={(e) => setDatos({ ...datos, color: e.target.value })}
        />
        <input type="button" value="Enviar" onClick={sendColor} />
      </form>
      <div>
        <ul>
          {colors
            ? colors.map((c: IColor, idx: number) => {
                return <h2 key={idx}>{c.color}</h2>;
              })
            : "...cargando"}
        </ul>
      </div>
    </Fragment>
  );
};

export default HomePage;
