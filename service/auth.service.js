import axios from "../service/axios";

class AuthService {
    async getSignup(body) {
        const response = await axios.post('/signup', body);
        return response;
    }
}



export const globalService = new AuthService();
