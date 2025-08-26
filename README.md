# Timestamp Microservice

A simple Timestamp Microservice built as part of the freeCodeCamp curriculum.

## Overview

This project provides a simple API that returns the Unix timestamp and UTC date string for a given date input. You can input either:

- A **Unix timestamp** (in milliseconds, e.g., `1451001600000`)
- A **date string** (in the format `YYYY-MM-DD`, e.g., `2015-12-25`)

If no date is provided, the API returns the current date and time. Invalid dates return an error message.

## Endpoints

### GET /api/:date?

- `:date` (optional): the date to convert. Can be a Unix timestamp or a date string.  
- Returns JSON in the following format:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

- If the date is invalid:

```json
{ "error": "Invalid Date" }
```

## Usage Examples

- [project-url]/api/2015-12-25 → returns JSON for December 25, 2015  
- [project-url]/api/1451001600000 → returns JSON for the given timestamp  
- [project-url]/api/ → returns JSON for the current date  

## Features

- Simple Express server with a single API endpoint.  
- Handles both Unix timestamps and date strings.  
- Returns a consistent JSON format for easy use in other applications.  
- Includes a minimal, modern frontend with an input field to test dates.

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/dallatIkes/freeCodeCamp-Timestamp-Microservice.git

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open the frontend in a browser or use the API directly.

## License

This project is open source and available under the MIT License.
