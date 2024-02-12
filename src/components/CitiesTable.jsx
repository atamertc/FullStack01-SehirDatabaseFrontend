import { useState, useEffect } from "react";

// ========= URL ==========
const getCitiesUrl = "http://localhost:9090/api/v1/cities";

// ========= BACKEND METODLARI =========
// ====LISTELEME===
function getCitiesMethod() {
  return fetch(getCitiesUrl)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export function CitiesTable() {
  // Listeleme icin gerekli hooklar
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  // Listeleme metodu
  useEffect(() => {
    getCitiesMethod()
      .then((data) => {
        if (Array.isArray(data)) {
          setCities([...data]);
        } else {
          if (data.fields) {
            setError(data.fields);
          } else {
            setError(data.message);
          }
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="bg-default-h-100 text-center overflow-y-auto rounded">
      {error && (
        <p style={{ color: "red", marginTop: "20px" }}>
          Şehir listesi alınırken bir hata oluştu!
        </p>
      )}
      {!error && (
        <div className="mt-5 d-flex flex-column overflow-y-auto overflow-x-hidden text-center container">
          <h1 className="text-info">Şehir Listesi</h1>
          <table className="table align-middle mb-0 bg-whitetable-light table-striped table-bordered">
            <thead className="bg-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">İL</th>
                <th scope="col">İLÇELER</th>
                <th scope="col">IL NUFUS</th>
              </tr>
            </thead>
            <tbody>
              {cities.length === 0 ? (
                <tr>
                  <td colSpan="12">Henuz veri yukleniyor...</td>
                </tr>
              ) : (
                cities.map((city) => (
                  <tr key={city.id}>
                    <td>{city.id}</td>
                    <td>{city.province}</td>
                    <td>{city.districts.join(", ")}</td>
                    <td>{city.population}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
