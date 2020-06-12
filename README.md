<h1>Doctor's Directory</h1>
<p>Doctor's Directory is a single page application built using ReactJS. It is used to search and find all types of doctors, healthcare providers. All data shown in the application are consumed from local JSON files.</p>

### Live Demo

https://doctors-directory.netlify.app/

### Overview:
- Home page contains set of filters such as category, speciality, hospital name, city, ZIP code, types of patients served, gender of healthcare providers and states
- Results page is used to display list of doctors and healthcare providers based on filters
- Profile page is used to display doctors profile

### Features:
- Using [Fidisys Design System](https://www.npmjs.com/package/@fidisys-oss/design-system) library to build UIs
- Mobile responsive

### How to use Fidisys Design System

Install the library

`npm i @fidisys-oss/design-system`

Import components you want into your UI

`import { DefaultButton } from '@fidisys-oss/design-system';`

and use them like so

```
  const example = () => (
    <div>
      <DefaultButton btnName="Default Button" clickEvent={() => 0} />
    </div>
  )
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install necessary packages to run project

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:7000](http://localhost:7000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app folder for production to the `build` folder.<br>
