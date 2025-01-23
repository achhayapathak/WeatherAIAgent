# Weather AI Agent

Weather AI Agent is an interactive command-line application that uses Google Generative AI to provide weather details for a specified city. The application interacts with the user, plans actions, and fetches weather data using the Weather API.

## Features

- Interactive command-line interface
- Uses Google Generative AI for generating responses
- Fetches real-time weather data for any city
- Provides detailed weather information including temperature, wind, humidity, and air quality

## Prerequisites

- Node.js (v22.5.1 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/achhayapathak/WeatherAIAgent.git       
    cd weather-ai-agent
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add your API keys:

    ```sh
    API_KEY="YOUR_GOOGLE_GEMINI_API_KEY"
    WEATHER_API_KEY="YOUR_WEATHER_API_KEY"
    ```

    You can refer to the `.env.example` file for the format.

## Usage

1. Start the application:

    ```sh
    npm start
    ```

2. Interact with the application by typing your queries. For example:

    ```sh
    >> What is the weather in New York?
    ```

3. To exit the application, type:

    ```sh
    >> exit
    ```

## Project Structure

- [index.js](http://_vscodecontentref_/1): Main entry point of the application.
- [getAIResponse.js](http://_vscodecontentref_/2): Contains the function to get AI response using Google Generative AI.
- [getWeatherDetails.js](http://_vscodecontentref_/3): Contains the function to fetch weather details from the Weather API.
- [systemPrompt.js](http://_vscodecontentref_/4): Contains the system prompt for the AI model.
- [.env](http://_vscodecontentref_/5): Environment variables file (not included in the repository).
- [.env.example](http://_vscodecontentref_/6): Example environment variables file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.