import axios from "axios";
const CAR_API_BASE_URL = `http://localhost:8080/cars/getAllCars`
           
class CarService{
    getAllCars(){
        return axios.get(CAR_API_BASE_URL)
    }
}

export default new CarService();                              