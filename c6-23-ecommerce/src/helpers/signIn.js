import axios from 'axios';


// Login users // api/sessions/signin
export const sigin = async (dataUser) => {

    // console.log(dataUser, 'antes de salir al back')
    try {
        const resp = await axios.post(
            '/api/sessions/signin',
            dataUser,
        );
        if (resp.data.login === false) {
            console.log('login sin éxito, en helpers', resp.data);
            const { login, msg } = resp.data;
            // return { login: false };
            return { login, msg }; // false & msg
        }

        if (resp.data.login === true) {
            // console.log('login exitoso, en helpers');
            // console.log(resp.data);
            const { login } = resp.data;
            const { _id, role, name } = resp.data.user;
            localStorage.setItem('userId', _id);
            localStorage.setItem('role', role);
            localStorage.setItem('name', name);
            localStorage.setItem('token', resp.data.token);

            return { login }; // true
        }




    } catch (error) {
        return { msj: 'Error, session not initialized', error: error };
    }
};



// Logout users // api/sessions/logout

export const logout = async (dataUser) => {
    console.log('llega el llamado al logout');
    try {
        const resp = await axios.post(
            'api/sessions/logout',
            dataUser,
            { 'X-Requested-With': 'XMLHttpRequest' },
        );
        // console.log(resp, 'la respuesta del back, en helpers');
        return resp.data;

    } catch (error) {
        return { msj: 'Error, session not closed', error: error };
    }
};

