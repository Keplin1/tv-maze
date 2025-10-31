## Getting Started
Follow these steps to run the project locally:

### Download the repository:
```
git clone git@github.com:Keplin1/tv-maze.git
cd tv-maze
```

### Download the dependencies:
```
npm i
```

### Set the environment variables

1. Create a `.env` file in the root directory of the project
2. To get your Clerk Publishable Key:
   - Go to [clerk.com](https://clerk.com) and sign up or log in
   - Create a new application or select an existing one
   - Go to the API Keys section in your Clerk Dashboard
   - Copy the `Publishable Key`
3. Add the following to your `.env` file:
```
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```
> **Note**
> Replace `your_publishable_key_here` with the key you copied from Clerk.

### Run the development server:
```
npm run dev
```

### View the website
Open your browser and go to the URL shown in the terminal (usually http://localhost:5173)