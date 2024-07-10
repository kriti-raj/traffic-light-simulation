# Traffic Light Simulation

`PS`: Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely.
Each lightshould be lit for the following durations:

- Red light: `4000ms`
- Yellow light: `5000ms`
- Green light: `3000ms`
  You are free to exercise your creativity to style the appearance of the traffic light.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/kriti-raj/traffic-light-simulation.git
   ```

2. Navigate to the project directory:

    ```sh
    cd traffic-light-simulation
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

This will start the application and open it in your default web browser.

## Project Structure

The project consists of the following components:

- `TrafficLight`: Manages the state of the traffic light and switches between lights based on predefined intervals.
- `Colors`: Displays the current state of the traffic light.
- `App`: The main component that renders the TrafficLight component.

## TrafficLight Component
The `TrafficLight` component maintains the state of the current light and uses the `useEffect` hook to switch between lights after the specified duration.

## Colors Component
The `Colors` component takes the current light color as a prop and renders the lights with appropriate styles.

## App Component
The `App` component is the root component that renders the `TrafficLight` component in the center of the screen.

## Styling
The project uses Tailwind CSS for styling. The traffic light container is styled to look like a vertical traffic light with lights for red, yellow, and green states.

License
This project is licensed under the MIT License.

### Additional Notes

- Ensure you have Node.js and npm installed on your machine to run the project.
- You can customize the styles further by modifying the Tailwind CSS classes in the `Colors` component and the `TrafficLight` container.

By following the instructions in the README file, you should be able to set up and run the traffic light simulation locally. Feel free to customize the styles and functionality as per your requirements.

```

```
