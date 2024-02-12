import { useState } from "react";
import CityDatas from "../assets/CityDatas";
// ========= URL ==========
const createCityUrl = "http://localhost:9090/api/v1/cities";

function createCityMethod(cityData) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cityData),
  };
  return fetch(createCityUrl, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err.message));
}

export function CreateCityForm() {
  const [secilenIl, setSecilenIl] = useState("");
  const [secilenIlce, setSecilenIlce] = useState("");
  const [ilceListesi, setIlceListesi] = useState([]);

  const readyCityDatas = CityDatas;
  const [cityData, setCityData] = useState({
    province: "",
    districts: [],
    population: 0,
  });

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setSecilenIl(e.target.value);
    const il = readyCityDatas.find((item) => item.province === e.target.value);
    setIlceListesi(il.districts);
    setSecilenIlce("");
  }

  function handlePopulationChange(e) {
    setCityData({ ...cityData, [e.target.name]: e.target.value });
  }

  function handleCreateCitySubmit(e) {
    e.preventDefault();
    cityData.province = secilenIl;
    cityData.districts.push(secilenIlce);
    createCityMethod(cityData)
      .then((data) => {
        if (data.responseMessage) {
          setNotificationStatus(true);
        }
        if (data.fields) {
          setError(data.fields[0]);
        } else {
          setError(data.message);
        }
        console.log(typeof error);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <main className="bg-default-h-100 d-flex justify-content-center align-items-center">
      <form onSubmit={handleCreateCitySubmit}>
        <div className="navbar-brand logo-text form-outline mb-4 text-center">
          <span className="text-info logo-text">Şehir Database</span>
        </div>
        <div className="form-outline mb-4">
          İller
          <select
            name="iller"
            onChange={handleChange}
            className="w-100 text-center rounded border"
          >
            {readyCityDatas.map((item, index) => (
              <option value={item.province} key={index}>
                {item.province}
              </option>
            ))}
          </select>
        </div>
        <div className="form-outline mb-4">
          İlçeler
          <select
            name="ilceler"
            onChange={(e) => setSecilenIlce(e.target.value)}
            className="w-100 text-center rounded border"
          >
            {ilceListesi.map((ilce) => (
              <option value={ilce} key={ilce}>
                {ilce}
              </option>
            ))}
          </select>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label w-100">
            Il Nüfusu
            <input
              name="population"
              id="population"
              type="number"
              className="form-control"
              value={cityData.population}
              onChange={handlePopulationChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-info mb-4 w-100">
          Kaydet
        </button>
        {notificationStatus && <p>Kayit islemi basarili</p>}
        {error !== null && <p>{error}</p>}
      </form>
    </main>
  );
}
