/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.base.d.ts" />
/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.spreadsheet.d.ts" />
/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.url-fetch.d.ts" />
import type { postUniverseIds } from "./EVEAPI";

function ImportSystemID(val: any) {
	if (typeof val !== "string") {
		return 0;
	}
    let url: string =
        "https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en";
    let headers: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        contentType: "application/json",
        headers: {
            accept: "application/json",
            "Accept-Language": "en",
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
        },
        method: "post",
        payload: JSON.stringify([val]),
    };
    let response: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(
        url,
        headers
    );
    let text: postUniverseIds = JSON.parse(response.getContentText());
    if (text.systems.length > 0) {
		return text.systems[0].id;
	} else {
		return 0;	
	}
}
