import axios from 'axios';

class bookReadApi {
    constructor() {
        axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    }

    reg(newUser) {
        return axios
            .post('/users/auth/register', newUser)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    logIn(userCredentials) {
        return axios
            .post('/users/auth/login', userCredentials)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    logInWithGoogle(userCredentials) {
        return axios
            .post('/users/auth/google-login', userCredentials)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    logOut() {
        return axios.post('/users/auth/logout');
    }

    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    unsetToken() {
        axios.defaults.headers.common.Authorization = '';
    }

    addBook(book) {
        return axios
            .post('/books', book)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    addReviewToBook(id, book) {
        return axios
            .patch(`/books/${id}`, book)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    addTraining(training) {
        return axios
            .post('/training', training)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    addReadPages(trainingCredentials) {
        return axios
            .patch('/training', trainingCredentials)
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    getTraining() {
        return axios
            .get('/training')
            .then(res => res.data.training)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }

    getLibraryInfo() {
        return axios
            .get('/users/user')
            .then(res => res.data.data)
            .catch(err => {
                throw new Error(err.response.data.message);
            });
    }
}

export default new bookReadApi();
