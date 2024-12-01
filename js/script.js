let form = document.getElementById('scrapeForm');
let resultDiv = document.getElementById('result');
let spinner = document.getElementById('spinner');
let submitBtn = document.getElementById('submitBtn');
let titleElem = document.getElementById('title');
let htmlContent = document.getElementById('htmlContent');
let copyBtn = document.getElementById('copyBtn');
resultDiv.style.display = 'none';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let url = document.getElementById('url').value;

    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    resultDiv.style.display = 'none';

    try {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let response = await fetch(proxyUrl + url);
        if (!response.ok) {
            alert(" Failed to fetch content. Check if the URL is accessible and try again.");
            return;
        }

        let text = await response.text();
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, 'text/html');

        let title = doc.querySelector('title') ? doc.querySelector('title').innerText : 'No title found';
        let bodyContent = text;

        titleElem.textContent = title;
        htmlContent.textContent = bodyContent;

        resultDiv.style.display = 'block';
    } catch (err) {
        alert("The Website is Protected");
        console.error(err);
    } finally {
        submitBtn.disabled = false;
        spinner.style.display = 'none';
    }
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(htmlContent.value);
    alert("HTML content copied to clipboard!");
});