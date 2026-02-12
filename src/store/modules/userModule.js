import axios from '@/utils/axios.js'
export default {
    state: {
        usersFilter: {},
        singleUser: {},

    },
    getters: {},
    actions: {
        getUsers(context,{take,pageId}) {
            axios.get(`/api/user?pageId=${pageId}&take=${take}`).then(res => {
                context.commit("setUsers", res.data);
            }).catch((response) => {

            })
        },
        getUserById(context,userId) {
            axios.get(`/api/user/${userId}`).then(res => {
                context.commit("setSingleUser", res.data);
            }).catch((response) => {

            })
        },
        addUser(context,user) {
            return axios.post("/api/user", user);
        }
    },
    mutations: {
        setUsers (state, users) {
            state.usersFilter= users;
        },
        setSingleUser (state, user) {
            state.singleUser = user;
        }
    },

}