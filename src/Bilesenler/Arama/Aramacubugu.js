import React, {useState} from "react";

function Aramacubugu({belirtHavaDurumu}) {
    const api = {
    key: "adb8df3c19966a0e473e1551829d4751",
    base:"https://api.openweathermap.org/data/2.5/weather",
};

const [araParametre, belirtAraParametre] = useState("");

const ara = (e) => {
  if (e.key === "Enter") {
    fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`
    )

      .then((veri) => veri.json())
      .then((sonuc) => {
        belirtAraParametre("");
        belirtHavaDurumu(sonuc);
      });
  }
};

return (
  <div className="arama">
    <input
      className="arama-input"
      type="text"
      placeholder="Şehir"
      onChange={(e) => belirtAraParametre(e.target.value)}
      value={araParametre}
      onKeyPress={ara}
    />
  </div>
);
}

export default Aramacubugu;