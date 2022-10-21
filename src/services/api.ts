import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

// const API_KEY = "80a5960888c04ecd98e439be5aa55520"
// const API_KEY = "ce789ec0cbc646c3bd59b0abd2c8c0ab"
// const API_KEY = "51b14a477a904ecd943af29608789966"
const API_KEY = "94bed8c9b18a4f4d9cd1f4960ab62f68"

export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY
    }
})