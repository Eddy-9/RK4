const express = require("express");
const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({ extended: false });

app.post("/download", urlencodedParser, function (request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }
    console.log(request.body);

    if (typeof request.body.ProfileName != "string") {
        let json = {
            status: "error",
            message: "Неверные данные в форме (ProfileName)"
        };
        response.end(JSON.stringify(json));
        return response.sendStatus(400);
    }

    if (typeof request.body.Version != "string") {
        let json = {
            status: "error",
            message: "Неверные данные в форме (Version)"
        };
        response.end(JSON.stringify(json));
        return response.sendStatus(400);
    }

    if (typeof Number(request.body.samplesN) != "number") {
        let json = {
            status: "error",
            message: "Неверные данные в форме (samplesN)"
        };
        response.end(JSON.stringify(json));
        return response.sendStatus(400);
    }

    if ((!request.body.ProfileName) || (!request.body.Version)) {
        let json = {
            status: "error",
            message: "Не хватает данных"
        };
        response.end(JSON.stringify(json));
        return response.sendStatus(400);
    }

    let json = {
        name: "Profile ICC",
        ProfileName: request.body.ProfileName,
        Version: request.body.Version,
        AdaptationsIncluded: request.body.adaptations,
        AmountOfSamples: request.body.samplesN
    };

    response.end(JSON.stringify(json));
    response.sendStatus(200);
});
port = 5500;
app.listen(port, () => console.log("Server up, port: ", port));