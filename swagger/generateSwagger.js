const autoSwagger = require("swagger-autogen")();

const doc = {
    info: {
        title: "YSpotify-API",
        description: "API allowing users to be registered, connected, part of a group and can synchronize data from spotify API"
    },
    host: 'localhost:3000',
    definitions: {
        NewUser: {
            $username: "CookieGank",
            $password: "azerty"
        },
        NewGroup: {
            groupName: "Cookies"
        }
    }
}
const outputFile = "./swagger_output.json";
const routes = [
    "../routes/auth.js",
    "../routes/groups.js",
    "../routes/spotify.js"
];

autoSwagger(outputFile, routes, doc)
    .then(() => {
        console.log("Swagger documentation is updated successfully!");
    })
    .catch((e) => {
        console.error("Error generating Swagger documentation", e);
    });