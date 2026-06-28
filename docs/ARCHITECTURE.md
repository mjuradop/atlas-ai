# Atlas AI Architecture

Atlas AI is organized as a React + TypeScript application with a future Node.js backend.

## Frontend

The frontend is responsible for:

- Rendering the world map
- Handling user input
- Displaying AI responses
- Highlighting countries
- Showing country cards and rankings

## Main folders

```text
src/components
Reusable UI components.

src/pages

Application pages.

src/data

Local datasets such as GeoJSON files.

src/services

API clients and external service logic.

src/types

Shared TypeScript types.

Planned Backend

The backend will handle:

OpenAI API requests
Prompt formatting
Data validation
Future dataset integration
Data Flow
User question
↓
Search interface
↓
Backend API
↓
OpenAI response
↓
Country ISO code
↓
Map highlight
↓
Country explanation card