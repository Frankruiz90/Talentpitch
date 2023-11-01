import axios from "axios";

const instance = axios.create({
    baseURL: "https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10"
})

export default instance;