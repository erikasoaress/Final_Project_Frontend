import axios from 'axios'

class RadioService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });
  }

  GetRadios = () => {
    return this.api.get("/api/radios");
  };

  GetRadiosByCountry = () => {
    return this.api.get("/api/radios/:country");
  };

  GetRadiosByVotes = () => {
    return this.api.get("/api/radios/ranked");
  };

  GetRadiosByGenre = () => {
    return this.api.get("/api/radios/:genre");
  };

  getSingleRadio = (id) => {
    return this.api.get(`/api/radios/${id}`);
  };

  addFavorite = (id) => {
    console.log(id);
    return this.api.put(`/api/favorites/${id}`);
  };
}
const radioService = new RadioService();

export default radioService;