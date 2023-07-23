function ImportSystemID(val) {
    Logger.log(typeof val);
    var url = "https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en";
    var headers = {
        contentType: "application/json",
        headers: {
            accept: "application/json",
            "Accept-Language": "en",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        method: "post",
        payload: JSON.stringify([val])
    };
    var response = UrlFetchApp.fetch(url, headers);
    var text = JSON.parse(response.getContentText());
    if (text.systems.length > 0) {
        return text.systems[0].id;
    }
    else {
        return 0;
    }
}
