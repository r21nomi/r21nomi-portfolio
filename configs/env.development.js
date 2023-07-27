const EnvDevelopment = {
    NODE_ENV: process.env.NODE_ENV || "",
    BASE_URL: "http://localhost:3000/",
    GOOGLE_ANALYTICS_ID: ""
};

module.exports = {
    ENV: EnvDevelopment
};
