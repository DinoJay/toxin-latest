//example id: aa4a0d37-a72c-4243-9eda-02321a6311c0
import { casRegex, smilesRegex } from '$lib/chemRegexes';
const API_KEY = 'M0oFG8rEI7kOb7fyW3QmVi70vQT9Dl5D'
function searchBySMILES(smiles = "C1=CC(=C(C=C1O)O)O", onError = d => console.log(d)) {
    const url = "https://api.rsc.org/compounds/v1/filter/smiles";
    const options = {
        method: "POST",
        headers: {
            "apikey": API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "smiles": smiles
        }),
    };
    return fetch(url, options).then(
        response => {
            if (response.ok) {
                return response.json();
            }
            return response.text().then(err => {
                onError(err);
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    errorMessage: err,
                });
            });
        })
        .then(({ queryId }) => {
            const url = `https://api.rsc.org/compounds/v1/filter/${queryId}/results`;
            const options = {
                method: "GET",
                headers: {
                    "apikey": API_KEY,
                    "Accept": "application/json"
                },
            };
            return fetch(url, options).then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return response.text().then(err => {
                        onError(err);
                        return Promise.reject({
                            status: response.status,
                            statusText: response.statusText,
                            errorMessage: err,
                        });
                    });
                })
                .then(r => {
                    console.log('queryID', r.results[0]);
                    const queryId = r.results[0];
                    const url = `https://api.rsc.org/compounds/v1/records/${queryId}/image`;
                    const options = {
                        method: "GET",
                        headers: {
                            "apikey": API_KEY,
                            "Accept": "application/json"
                        },
                    };
                    return fetch(url, options).then(
                        response => {
                            if (response.ok) {
                                return response.json();
                            }
                            return response.text().then(err => {
                                return Promise.reject({
                                    status: response.status,
                                    statusText: response.statusText,
                                    errorMessage: err,
                                });
                            });
                        })
                        .then(data => {
                            console.log(data);
                            return `data:image/gif;base64,${data.image}`;
                        })
                        .catch(err => {
                            console.error(err);
                        });
                })
                .catch(err => {
                    onError(err);
                    console.error(err);
                });
        })
        .catch(err => {
            console.error(err);
        });
}

export const wikiDataQuery = (q) => {
    const trimmedP = q.trim();//.toLowerCase()

    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${trimmedP}/PNG`

    return fetch(url).then(r => {
        console.log('R', r)
        // const res = r.results?.bindings;
        // console.log('res', res);
        // if (res) {
        //     if (res.length > 0)
        //         return res[0].object?.value
        //     return null
        // }
        // return null

    });
}

// export const wikiDataQuery = (q) => {
//     const trimmedQ = q.trim();//.toLowerCase()
//     const casedQ = !!trimmedQ.match(smilesRegex) ? trimmedQ.toUpperCase() : trimmedQ.toLowerCase();
//     const engAffix = !casedQ.match(casRegex) && !casedQ.match(smilesRegex) ? '@en' : ''

//     const sparqlQuery = `SELECT * WHERE {
//         ?subject ?predicate "${casedQ}"${engAffix} .
//         ?subject wdt:P117 ?object .   
//     }`;
//     const endpointUrl = 'https://query.wikidata.org/sparql';
//     const fullUrl = endpointUrl + '?query=' + encodeURIComponent(sparqlQuery);
//     const headers = { 'Accept': 'application/sparql-results+json' };

//     return fetch(fullUrl, { headers }).then(body => body.json()).then(r => {
//         const res = r.results?.bindings;
//         console.log('res', res);
//         if (res) {
//             if (res.length > 0)
//                 return res[0].object?.value
//             return null
//         }
//         return null

//     });
// }

