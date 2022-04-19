function browserHistory(obj, arr) {

    for (let comands of arr) {
        let currentComand = comands;
        if (currentComand.includes('Open')) {
            obj["Open Tabs"].push(currentComand.split('Open ')[1])
            obj["Browser Logs"].push(currentComand);
        } else if (currentComand.includes('Close')) {
            let tabForClose = currentComand.split('Close ')[1];
            if (obj["Open Tabs"].includes(tabForClose)) {
                let index = obj["Open Tabs"].indexOf(tabForClose);
                obj["Open Tabs"].splice(index, 1);
                obj["Recently Closed"].push(tabForClose);
                obj["Browser Logs"].push(currentComand);
            }
        } else if (currentComand.includes('Clear')) {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        }
    }
    console.log(obj["Browser Name"]);
    console.log('Open Tabs: ' + obj["Open Tabs"].join(', '));
    console.log('Recently Closed: ' + obj["Recently Closed"].join(', '));
    console.log('Browser Logs: ' + obj["Browser Logs"].join(', '));
}
browserHistory({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    }, ["Close Facebook", "Open StackOverFlow", "Open Google", "Close Translate"])
    // browserHistory({
    //     "Browser Name": "Mozilla Firefox",
    //     "Open Tabs": ["YouTube"],
    //     "Recently Closed": ["Gmail", "Dropbox"],
    //     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    // }, ["Open Wikipedia", "Clear History and Cache", "Open Twitter"])