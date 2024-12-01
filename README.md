
# Scrap Pet 🐱

Scrap Pet is a lightweight web scraping tool designed for developers to easily fetch and analyze web page content. Built with modern web technologies, this tool provides a simple interface to extract HTML and metadata from a given URL. 

Developed by **Sriram Rajagopalan**, Scrap Pet is ideal for quick web content analysis and educational purposes.

---

## Features

- **Responsive Design**: Adapts seamlessly to both desktop and mobile devices.
- **Dynamic Scraping**: Extracts the page title, HTML content, and additional metadata like response time and size.
- **Copy to Clipboard**: Easily copy extracted HTML content with a single click.
- **SEO Optimized**: Enhanced meta tags for better discoverability and sharing.
- **Spinner Feedback**: Displays a loading spinner while processing the scrape request.
- **Prevents Multiple Requests**: Disables the button while processing to avoid duplicate submissions.

---

## Getting Started

### Prerequisites

- A local or hosted server capable of handling POST requests at the `/scrape` endpoint.
- Basic knowledge of web development to customize or extend the functionality.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/sriraj66/scrap-pet.git
   cd scrap-pet
   npm i
   node server.js
   ```
2. Open the `http://localhost:3000` URL in your browser or deploy it to your server.

---

## How to Use

1. Enter the URL you wish to scrape in the input field.
2. Click the **Scrape** button.
3. Wait for the results to appear below, showing:
   - **Title** of the page.
   - HTML content in a formatted `<textarea>`.
   - Metadata including `[response time (ms), size (KB)]`.
4. Use the **Copy to Clipboard** button to save the HTML content for further use.

---

## Example Response

When you scrape a URL, the result will display:

- **Title**: Example Title  
- **Code**: `[ 200 OK ]`
- **Metadata**: `[ 123 ms, 45 KB ]`
- **HTML Content**:
  ```html
  <!DOCTYPE html>
  <html>
      <head>...</head>
      <body>...</body>
  </html>
  ```

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS, Animate.css
- **Backend**: Requires a server to handle the `/scrape` POST request [Node js].

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

- **Developer**: Sriram Rajagopalan  
- **Portfolio**: [https://sriraj66.github.io](https://sriraj66.github.io)  
- **Instagram**: [@sriramrajagopalan](#)  

Feel free to reach out with feedback or suggestions! 😊
