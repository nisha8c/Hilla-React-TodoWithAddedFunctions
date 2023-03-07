# Todo with Java End points and React frontend with Hilla components


Latest Image:
![Screenshot 2023-03-07 at 17.08.21.png](frontend%2Fassets%2FScreenshot%202023-03-07%20at%2017.08.21.png)
[Screen Recording 2023-03-07 at 16.58.48.mov](frontend%2Fassets%2FScreen%20Recording%202023-03-07%20at%2016.58.48.mov)


![1](https://user-images.githubusercontent.com/108927164/218052418-6e0c5eb7-5aa2-4e73-9d17-169ea5866bc3.jpg)
![2](https://user-images.githubusercontent.com/108927164/218052442-7d813472-69d8-4040-b483-c766f7d4730c.jpg)
![3](https://user-images.githubusercontent.com/108927164/218052454-31d50408-3981-451f-94e0-3d6d41d733b5.jpg)
![4](https://user-images.githubusercontent.com/108927164/218052471-5d8a4954-dff7-4e06-b509-16f6e2e092c3.jpg)
![5](https://user-images.githubusercontent.com/108927164/218052487-fcb081ce-7722-417f-90f7-97b23ba0d19c.jpg)






## Using bootstrap and react-bootstrap components nad few hilla components

## App is capable of
1. User can add a new task
2. Click done with checkbox
3. Delete the task
5. modal msg is displayed if the task is less than 3 characters.
6. state persists on any/ multiple browser (hilla inbuilt)
7. Done tasks should move to end of the list
8. and if undone should go back to their position
9. Autofocus on input element for easy user access
10. task gets added on Enyter press for easy access , as well as with Add button.
11. gives notification on task deletion

## Functions yet to be added:
3. Edit the task

## Good to have:

1. some css / scss
3. Touch/click the task to done / undone.
4. confirmation dialog before delete.


# Custom project from Hilla

This project can be used as a starting point to create your own Hilla application with Spring Boot.
It contains all the necessary configuration and some placeholder files to get you started.

## Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project.

## Deploying to Production

To create a production build, call `mvnw clean package -Pproduction` (Windows),
or `./mvnw clean package -Pproduction` (Mac & Linux).
This will build a JAR file with all the dependencies and front-end resources,
ready to be deployed. The file can be found in the `target` folder after the build completes.

Once the JAR file is built, you can run it using
`java -jar target/myapp-1.0-SNAPSHOT.jar` (NOTE, replace
`myapp-1.0-SNAPSHOT.jar` with the name of your jar).

## Project structure

<table style="width:100%; text-align: left;">
  <tr><th>Directory</th><th>Description</th></tr>
  <tr><td><code>frontend/</code></td><td>Client-side source directory</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.html</code></td><td>HTML template</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>index.ts</code></td><td>Frontend 
entrypoint, bootstraps a React application</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>routes.tsx</code></td><td>React Router routes definition</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>MainLayout.tsx</code></td><td>Main 
layout component, contains the navigation menu, uses <a href="https://hilla.dev/docs/react/components/app-layout">
App Layout</a></td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>views/</code></td><td>UI view 
components</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>themes/</code></td><td>Custom  
CSS styles</td></tr>
  <tr><td><code>src/main/java/&lt;groupId&gt;/</code></td><td>Server-side 
source directory, contains the server-side Java views</td></tr>
  <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<code>Application.java</code></td><td>Server entry-point</td></tr>
</table>

## Useful links

- Read the documentation at [hilla.dev/docs](https://hilla.dev/docs/).
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/hilla) or join our [Discord channel](https://discord.gg/MYFq5RTbBn).
- Report issues, create pull requests in [GitHub](https://github.com/vaadin/hilla).
