const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div')
    div.innerHTML = item + '...'
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}


async function main() {

    let interval = setInterval(() => {
        let last = document.body.getElementsByTagName('div');
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
        }
        else if (last) {
            last.innerHTML = last.innerHTML + '.';
        }
    }, 400);

    let text = [
        "Inatializing Hacking",
        "Initialized Hacking now reading your data",
        "Reading Your Files",
        "Password Files Detected",
        "Sending All Password and Personal Files to Server",
        "Cleaning Up"
    ]


    for (const item of text) {
        await addItem(item)
    }

    clearInterval(interval)

}

main()