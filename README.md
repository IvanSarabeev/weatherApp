# Weather App

## Description

The Weather App is a modern web application built with cutting-edge technologies like Next.js, TypeScript, and Tailwind CSS. It provides real-time weather updates for any location using a reliable Weather API. The app leverages React Query for efficient data fetching, caching, and synchronization, ensuring a smooth user experience. With its clean design and responsive interface, users can easily access current weather conditions, forecasts, and additional details such as temperature, humidity, and wind speed.

---

## Features

- **Real-Time Weather Updates**: Get current weather conditions for any location.
- **Search Functionality**: Search for weather details by city or geographic location.
- **Responsive Design**: A mobile-friendly UI styled with Tailwind CSS.
- **Fast and Reliable Data**: Powered by React Query and Weather API for seamless performance.
- **Forecast Information**: View upcoming weather forecasts for multiple days.

---

## Technologies Used

- **Next.js**: Server-side rendering and static site generation.
- **TypeScript**: For type safety and better development experience.
- **React Query**: Data fetching, caching, and synchronization.
- **Tailwind CSS**: Styling with utility-first CSS framework.
- **Weather API**: To fetch accurate weather data.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git


Navigate to the project directory:

    cd weather-app

Install dependencies:

    npm install

Create a .env.local file in the root directory and add your Weather API key:

    NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here

Run the development server:

    npm run dev

Open http://localhost:3000 in your browser to see the app.

## Usage

Enter the name of a city or use geolocation to get weather data.

View current weather details, including temperature, humidity, and wind speed.

Explore multi-day weather forecasts.

## Project Structure

* /weather-app
* components
  - ├── Reusable UI components
* pages
  - ├── Next.js pages and routes
* styles
  - ├── Global styles and Tailwind configuration
* utils
  - ├── Utility functions
* hooks
  - ├── Custom hooks (e.g., React Query hooks)
* public
  - └── Static assets


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or create an issue.

## Acknowledgements

* Next.js Documentation

* React Query Documentation

* Tailwind CSS Documentation

* Weather API Documentation