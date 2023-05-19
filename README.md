# Quacky-Graphy

![Responsive Image](docs/readme/responsive.png)

Quacky-Graphy is a social platform website where users can post their awesome Pictures they have taken with thier cameras. Users can upload their professional pictures and give details about the pictures. 

You can View the Live website [By Clicking Here!](https://pp5-quackygraphy-app.herokuapp.com/)

## Table of Contents
  1. [Project Goals](#project-goals)
  1. [User Experience](#user-experience)
      - [Target Audience](#target-audience)
      - [User Requirements and Expectations](#user-requirements-and-expectations)
      - [User Stories](#user-stories)
      - [Site Owner Stories](#site-owner-stories)
  1. [Technical Design](#technical-design)
      - [Colours](#colors)
      - [Fonts](#fonts)
      - [Wireframes](#wireframes)
  1. [Technologies Used](#technologies-used)
      - [Coding Languages](#coding-languages)
      - [Frameworks and Tools](#frameworks-and-tools)
      - [NPM Packages / Dependencies](#npm-packages--dependencies)
  1. [Features and Pages](#features-and-pages)
  1. [Future features / improvements](#future-features--improvements)
  1. [Validation](#validation)
      - [JSX Validation](#jsx-validation)
      - [CSS](#css-validation)
      - [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
      - [WAVE Validation](#wave-validation)
  1. [Testing](#testing)
      - [Device Testing](#device-testing)
      - [Browser Compatibility](#browser-compatibility)
      - [Manual Testing](#manual-testing)
  1. [Bugs](#bugs)
  1. [Deployment](#deployment)
      - [Heroku](#heroku)
      - [Forking GitHub Repo](#forking-the-github-repository)
      - [Clone a GitHub Repo](#clone-a-github-repository)
  1. [Credits](#credits)
      - [Tutorial](#tutorials)
      - [Code](#code)
      - [Literature](#literature)
      - [Misc](#misc)
  1. [Acknowledgements](#acknowledgements)

# Project Goals

The Goal of this project was to build a Social Media Platform based website so users can upload their best shot pictures they have taken with their professional cameras, or even their smartphone! The user can show which camera they used and what category the shot was based on.

<u>The key functionality of the Website:</u>

- The website should be simple and easy to navigate across all the pages.
- User Authentication so users can't edit other users profiles, posts and comments.
- User interaction via posts, comments and profiles
- Users to have their own profiles with a brief description, profile image and their preferred camera that they like to use.
- CRUD functionality for posts, comments and their profile.
- Posts can be filtering by keyword search of profile name, camera_type and photo_type
- Responsiveness to allow pleasant usage of the app across a range of devices with varying display sizes

# User Experience

## User Requirements and Expectations
- A site which provides a high level of interactiveness between users
- Links and functions to act as expected
- Notification to provide feedback on expected function outcomes
- Simple "to the point" content that a user can easily digest
- Accessibility for impaired users
- Responsiveness to allow pleasant use across devices of different screen sizes 

## User Stories
[Back to top ⇧](#quackygraphy---a-platform-for-sharing-your-masterpiece-shots) <br />
[Table Of Contents ⇧](#table-of-content)

I have included links to the [GitHub Issues](https://github.com/Quack842/pp5-quackygraphy/issues) for this project, as well as the [KANBAN board](https://github.com/users/Quack842/projects/4). There are multiple Coloumns that I added other than the default "Todo", "In Progress" and "Done" and their reason/uses are as follow:
 1. Maybe Add
    - Ideas I got while creating the app I would put in this coloumn. Or Ideas that people have suggested afterwards. The issues places in this column was not a priority and I could work on these after I had time.
2. Buggy
    - This Column was created so I can log any errors or bugs to this issue that I have noticed or what other people have noticed while testing the site for me.
3. Dropped
    - This Column was created for the features I thought I wanted to add, but at the end of the project, decided to drop the issue. Some of the Issues that was also added at the "Maybe Add" was moved to the "Dropped" column.

![User Stories](/docs/readme/user-stories.png)

## Site Owner Stories
30. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.
31. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured.
32. As the site owner, I would want to have the ability to remove posts and posts comments so that I can keep the app clean and friendly.
33. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.
34. As the site owner, I would want to use the app search function so that I can search for particular post by their title, camera_type, photo_type and Username.

# Technical Design
[Back to top ⇧](#quackygraphy---a-platform-for-sharing-your-masterpiece-shots) <br />
[Table Of Contents ⇧](#table-of-content)

## Colors
The Color Scheme was based of the Main Dukky Icon. I started with the Yellow and used [Coolers Palette generator](https://coolors.co/) to generate complementary colors.

![Color Scheme](/docs/readme/color-scheme.png)

## Fonts
Google Fonts were implemented on the website and [FontJoy](https://fontjoy.com/) was used to generate compatible fonts that will work well together.
- Coiny - Used for importand text and Big Fonts
- Shadows Into Light - For Big Main Fonts (To make a statement)
- Varela Round - Was used for all other fonts

## Wireframes
CorelDraw was used to create wireframes of the sites pages, as I am personally more use to using This application.
After starting with the website, I made a few changes like the design but the color scheme and base design stayed the same more or less. There wasn't really a design for the mobile devices, but It was kept in mind while development. The design for the comment section also came to me while developing the website, I knew that I wanted to have a chat bubble effect that changes color for every second comment. This was the final design for the comments:

![Comments Section](/docs/wireframes/comment-section.png)

<details>
<summary>Wireframes</summary>

## Register Page
![Register Page](/docs/wireframes/register-page.png)
## Login Page
![Login Page](/docs/wireframes/login-page.png)
## Home Page
![Home Page](/docs/wireframes/home-page.png)
## Add Post Page
![Add Post Page](/docs/wireframes/add-post.png)
## Liked Page
![Liked Page](/docs/wireframes/liked-page.png)
## Account/Profile Page
![Account/Profile Page](/docs/wireframes/account-page.png)
## Edit Profile Page
![Edit Profile Page](/docs/wireframes/edit-profile.png)
## Edit Password Page
![Edit Password Page](/docs/wireframes/edit-password.png)
## Edit Username Page
![Edit Username Page](/docs/wireframes/edit-username.png)

</details>

# Technologies Used
[Back to top ⇧](#quackygraphy---a-platform-for-sharing-your-masterpiece-shots) <br />
[Table Of Contents ⇧](#table-of-content)

## Coding Languages

- HTML
- CSS
- Javascript
- React

## Frameworks and Tools

- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - Library to decode JSON Web token. Justification: I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered with.
- [React 18](https://react.dev/blog/2022/03/29/react-v18) - JavaScript library for building user interfaces. Justification: To be able to showcase my newly learnt skills and for building interactive user interfaces quickly.
- [React-Bootstrap 2.7.2](https://react-bootstrap.github.io/) - CSS framework. Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Justification: I used this component to load content (tasks/comments/users) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Javascript framework for routing. Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser.
- [Am I Responsive](http://ami.responsivedesign.is/) - Website responsive test site. I used this to create the multi-device mock-up at the top of this README.md file
- [CorelDraw](https://www.coreldraw.com/en/?link=wm) - Designers Application. I used this to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - I used this for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) - File storage. I used this to store static files
- [Font Awesome](https://fontawesome.com/) - Icon library. I used this to style the site with icons.
- [Google Fonts](https://fonts.google.com/) - Font library. I used this to import fonts
- [GitHub](https://github.com/) - Cloud based hosting service. I used this as a remote repository to store project code
- [Gitpod](https://gitpod.io) - Cloud development environment. I used this to host a virtual workspace
- [Code Anywhere](https://codeanywhere.com/) - Cloud development environment, it is simular to Gitpod. Used this when my credits ran out on GitPod
- [VS Code](https://code.visualstudio.com/) A Source Editor. When Code Anywhere failed me (Like many others) I decided to move all mo code to VS Code.
- Validation:
  - [WC3 Validator](https://validator.w3.org/) - HTML Validator. I used this to validate the applications HTML code
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - CSS Validator. I used this to validate the applications CSS code
  - [ESLint](https://eslint.org/) - JavaScript Validator. I used this to validate applications JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Site auditing tool. I used this to validate performance, accessibility, best practice and SEO of the application
- [Gif Creator](https://imgflip.com/gif-maker) This website was used to make my image, that is on the "Page not Found", from 3 png images to 1 gif image.
- [Background Generator](https://app.haikei.app/) This website was used to generate the page background and the button's backgrounds.
- [CSS Box Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html) This website was used to generate a box shadow that was used through out the code.
- [StackOverflow](https://stackoverflow.com/) This website was used to help fix bug and errors that showed up during development.

## NPM Packages / Dependencies
There was a few dependencies that was installed during development, but was not used because I changed my mind on the feature.

| Package | Version | Used |
| --- | --- |---
| axios |1.3.6 | ![Check](/docs/readme/check.svg)
| bootstrap | 5.2.3 | ![Check](/docs/readme/check.svg)
| jwt-decode | 3.1.2 | ![Check](/docs/readme/check.svg)
| emoji-picker-react | 3.1.2 | ![Nope](/docs/readme/nope.svg)
| react-bootstrap | 1.6.3 | ![Check](/docs/readme/check.svg)
| react | 18.2.0 |![Check](/docs/readme/check.svg)
| react-dom | 18.2.0 |![Check](/docs/readme/check.svg)
| react-infinite-scroll-component | 6.1.0 |![Check](/docs/readme/check.svg)
| react-infinite-scroller | 1.2.6 | ![Nope](/docs/readme/nope.svg)
| react-loader-spinner | 5.3.4 |![Check](/docs/readme/check.svg)
| react-password-checklist | 1.4.3 | ![Nope](/docs/readme/nope.svg)
| react-password-strength-bar | 0.4.1 |![Check](/docs/readme/check.svg)
| react-router-dom | 6.10.0 |![Check](/docs/readme/check.svg)
| react-scripts | 5.0.1 |![Check](/docs/readme/check.svg)
| web-vitals | 2.1.4 |![Check](/docs/readme/check.svg)

# Features and Pages
[Back to top ⇧](#quackygraphy---a-platform-for-sharing-your-masterpiece-shots) <br />
[Table Of Contents ⇧](#table-of-content)

In its entirety the website consists of a variety of features across the many site pages as listed below.

## Navigation
The Navigation bar in the mobile size has an offcanvas design for the menu bar instead of the deafult dropdown feature. The Offcanvas feature will also close when a user choose any of the tabs.
<details>
<summary>Navigation Bar On Desktop - Not Signed In</summary>

![Navbar Desktop](/docs/features/navbar-desktop.png)
</details>
<details>
<summary>Navigation Bar On Desktop - Signed In</summary>

![Navbar Desktop](/docs/features/navbar-loggin-desktop.png)
</details>
<details>
<summary>Navigation Bar On Mobile - Not Signed In</summary>

![Navbar Mobile](/docs/features/navbar-mobile.png)
![Navbar Mobile](/docs/features/navbar-offcanvas.png)
</details>
<details>
<summary>Navigation Bar On Mobile - Signed In</summary>

![Navbar Mobile](/docs/features/navbar-loggin-mobile.png)
</details>


## Register Page

This Page will give the user the option to create an account. The Registration Page has a "Password Strength bar".

<details>
<summary>Password Too Short</summary>
This will show while the password is under 8 characters.

![Too Short Password](/docs/features/pass-short.png)
</details>
<details>
<summary>Password Weaksause</summary>

![Weaksause Password](/docs/features/pass-weaksause.png)
</details>
<details>
<summary>Password Still Weak</summary>

![Still Weak Password](/docs/features/pass-still-weak.png)
</details>
<details>
<summary>Password A Little Better</summary>

![Little Better Password](/docs/features/pass-little-better.png)
</details>
<details>
<summary>Password Guess That Will Do</summary>

![Guess It'll Do Password](/docs/features/pass-guess-itll-do.png)
</details>
<details>
<summary>Password Unbreakable</summary>

![Unbreakable Password](/docs/features/pass-unbreakable.png)
</details>

## Sign In

When the user Log In, after creating an account, Their user user details should be saved and the browser will remeber the user so they don't have to sign in everytime.

## Home page

Home page is where users, Signed in or not, can view all the posts that users have posted. If the user is not Signed In, they will not be able to like, comment, reate a post or Follow/Unfollow other Users.

<details>
<summary>Home Page Image - Signed Out</summary>

![Home Page - Signed Out](/docs/features/home-signed-out.png)
</details>
<details>
<summary>Home Page Image - Signed Out - Like Icon</summary>

![Home Page - Signed Out](/docs/features/home-like-signed-out.png)
</details>
<details>
<summary>Home Page Image - Signed In</summary>

![Home Page - Signed Out](/docs/features/home-signed-in.png)
</details>
<details>
<summary>Home Page Image - Signed In - Like Icon</summary>

![Home Page - Signed Out](/docs/features/home-like-signed-in.png)
</details>
<details>
<summary>Home Page Image - Liked</summary>
When the user is signed in and likes another users post, there will be a pop message on the top right corner of the page, letting the user know that they have liked a post.

![Home Page - Signed Out](/docs/features/home-liked.png)
</details>
<details>
<summary>Home Page Image - Signed In - Follow/Unfollow</summary>
When the user is signed in, they will also have the option to follow and unfollow other users.

![Home Page - Signed Out](/docs/features/Follow-Unfollow.png)
</details>

## FYP (For You Page)

The FYP Page can only be viewed if the user is signed in. This is the page where users can few all the posts of poeple they follow.
<details>
<summary>FYP (For You Page)</summary>

![FYP](/docs/features/fyp.png)
</details>

## Liked Page

The Liked page can only be viewed by signed in users. This page Is for users to see all the posts that that liked.  
<details>
<summary>Liked Page</summary>

![Liked Page](/docs/features/liked-page.png)
</details>

## Profile Page

The Account page is where the user (If logged in) can view and edit their profile. It is also where they can change their Username and Password. Users that Aren't Signed In can also view other profiles, but they would not be able to follow/unfollow that user.
<details>
<summary>Profile Page - Signed In</summary>

![Profile Page Signed In](/docs/features/profile-page-logged-in.png)
</details>
<details>
<summary>Other Users Page - Signed In</summary>

![Other Users Page - Signed In](/docs/features/other-profile-signed-in.png)
</details>
<details>
<summary>Profile Page - Edit Menu</summary>

![Profile Page Edit Menu](/docs/features/profile-edit-dropdown.png)
</details>
<details>
<summary>Profile Page - Edit Page</summary>

![Profile Page Edit Page](/docs/features/profile-edit-page.png)
</details>
<details>
<summary>Profile Page - Username Change</summary>

![Profile Page Username Change](/docs/features/profile-username-edit.png)
</details>
<details>
<summary>Profile Page - Password Change</summary>

![Profile Page Password Change](/docs/features/profile-password-edit.png)
</details>
<details>
<summary>Profile Page - Signed Out</summary>

![Profile Page Signed Out](/docs/features/other-users-profiles.png)
</details>

## Posts

This is where the User (Logged In) Will be able to create a post. The user will also be able to edit and delete the post, there will be a Warning Modal to ask if the user is sure they want to delete the post.

<details>
<summary>Add A Post</summary>

![Add Post](/docs/features/add-post.png)
</details>
<details>
<summary>Create A Post Post</summary>

![Add Post](/docs/features/create-post-page.png)
</details>
<details>
<summary>Edit/Delete Post Button</summary>

![Add Post](/docs/features/edit-post.png)
</details>
<details>
<summary>Edit Post Page</summary>

![Add Post](/docs/features/edit-post-page.png)
</details>
<details>
<summary>Delete Post Warning</summary>

![Add Post](/docs/features/post-delete.png)
</details>

## Comments

Non-Logged in users will be able to few the comments but will not be able to create, edit or delete any comments. Users that are logged in will be able to Add, Edit and Delete their own Comments. Before a comment is deleted, the user will be asked if they are surethey want to delete the comment with a pop-up modal.

<details>
<summary>Comment Button On Post</summary>

![Comment Button](/docs/features/comment-button.png)
</details>
<details>
<summary>Comment View - Non Logged In</summary>

![Comment Button](/docs/features/comments-non-users.png)
</details>
<details>
<summary>Comment View - Logged In User</summary>

![Comment Button](/docs/features/comments-logged-user-active.png)
</details>
<details>
<summary>Comment View - Logged In User - Active</summary>
When the user start typing a comment, the "Post" button will activate.

![Comment Button](/docs/features/comments-logged-user.png)
</details>
<details>
<summary>Comment Edit - Edit Dropdown</summary>

![Comment Button](/docs/features/comments-edit-dropdown.png)
</details>
<details>
<summary>Comment - Edit</summary>

![Comment Edit](/docs/features/comments-editing.png)
</details>
<details>
<summary>Comment - Delete</summary>

![Comment Delelte](/docs/features/comment-edit.png)
</details>

## Posts Search

This Search Feature is on the Home, FYP and Liked Pages. This feature allow the user to search for a post, or posts, my Username, Post Title, Camera Type or Photo Type.

<details>
<summary>Search Bar - None</summary>

![Search Non](/docs/features/search-non.png)
</details>
<details>
<summary>Search Bar - Username</summary>

![Search Username](/docs/features/search-username.png)
</details>
<details>
<summary>Search Bar - Title</summary>

![Search Title](/docs/features/search-title.png)
</details>
<details>
<summary>Search Bar - Camera Type</summary>

![Search Camera Type](/docs/features/search-camera-type.png)
</details>
<details>
<summary>Search Bar - Photo Type</summary>

![Search Photo Type](/docs/features/search-photo-type.png)
</details>

## Page does not exist

When the user tried to access a page that doesn't exist, they will get a "Page Does not exist" page.
<details>
<summary>Page Not Found</summary>

![Page Not Found](/docs/features/page-not-found.png)
</details>
<br/>

# Validation
[Back to top ⇧](#quackygraphy---a-platform-for-sharing-your-masterpiece-shots) <br />
[Table Of Contents ⇧](#table-of-content)

## JSX Validation

The JSX code was validated during the development process and corrected as the project proceeded. 

## CSS Validation

I Checked the CSS syntax at the W3C CSS Validator Service and the results revealed no errors

## Chrome Dev Tools Lighthouse Validation

### Desktop 
<details>
<summary>Results</summary>

<details>
<summary>Home Page</summary>
</details>

</details>



#### Mobile 

<details><summary>Results</summary>

<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-main-page-auth.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-task-create-page.png">
</details>

<details><summary>Task edit page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-task-edit-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-pack-create-page.png">
</details>

<details><summary>Pack edit page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-pack-edit-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-profile-page.png">
</details>

<details><summary>Profile edit page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-profile-edit-page.png">
</details>

<details><summary>Change password page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-change-password-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-404-page.png">
</details>
</details>




### Wave Validation

The WAVE WebAIM web accessibility evaluation tool was used to test the websites accessibility.

<details><summary>Results</summary> 
<details><summary>Main page (not logged in)</summary> 
<img src="docs/validation/wave/wave-validation-main-page.png"> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src="docs/validation/wave/wave-validation-main-page-logged-in.png"> 
</details> 

<details><summary>Signup page</summary> 
<img src="docs/validation/wave/wave-validation-signup-page.png"> 
</details>

<details><summary>Login page</summary> 
<img src="docs/validation/wave/wave-validation-login-page.png"> 
</details>

<details><summary>Tasks page</summary>
<img src="docs/validation/wave/wave-validation-tasks-page.png">
</details>

<details><summary>Task create page</summary>
<img src="docs/validation/wave/wave-validation-task-create-page.png">
</details>

<details><summary>Task edit page</summary>
<img src="docs/validation/wave/wave-validation-task-edit-page.png">
</details>

<details><summary>Task detail page</summary>
<img src="docs/validation/wave/wave-validation-task-detail-page.png">
</details>

<details><summary>Watched page</summary>
<img src="docs/validation/wave/wave-validation-watched-page.png">
</details>

<details><summary>Pack page</summary>
<img src="docs/validation/wave/wave-validation-packs-page.png">
</details>

<details><summary>Pack create page</summary>
<img src="docs/validation/wave/wave-validation-pack-create-page.png">
</details>

<details><summary>Pack edit page</summary>
<img src="docs/validation/wave/wave-validation-pack-edit-page.png">
</details>

<details><summary>Pack detail page</summary>
<img src="docs/validation/wave/wave-validation-pack-detail-page.png">
</details>

<details><summary>Contact page</summary>
<img src="docs/validation/wave/wave-validation-contact-page.png">
</details>

<details><summary>Users page</summary>
<img src="docs/validation/wave/wave-validation-users-page.png">
</details>

<details><summary>Profile page</summary>
<img src="docs/validation/wave/wave-validation-profile-page.png">
</details>

<details><summary>Profile edit page</summary>
<img src="docs/validation/wave/wave-validation-profile-edit-page.png">
</details>

<details><summary>Change password page</summary>
<img src="docs/validation/wave/wave-validation-change-password-page.png">
</details>

<details><summary>404 page</summary>
<img src="docs/validation/wave/wave-validation-404-page.png">
</details>
</details>



##### Back to [top](#tick-it)


## Testing

### Device Testing

This site was tested on the following devices:
- Windows 10 PC with a 24" MSI Curved gaming monitor
- Raspberry Pi 4 with a 24" MSI Curved gaming monitor
- Xiaomi Redmi Note 10 Pro

### Browser compatibility

The website was tested on the following web browsers:
- Google Chrome (Version 112.0.5615.121)
- DuckDuckGo
 
### Manual testing

<summary>See Testing User Stories</summary>

#### Testing User Stories - Users

To avoid unnecessary repetition of images, only the feature being referred to will have screenshots. Information on how to navigate to the feature referred to will be described within its relevant table reference. 

1. As a new user, I can register an account with Tick It so that I can become a member and use the app as intended.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the sign up page, fill in the required fields and submit the sign up form  | An account which requires authentication will be created upon a successful account creation  | Works as expected |
|  Sign Up  |  Navigate to the sign up page, fill in the required fields and submit the sign up form |  User to navigate to the sign up page, enter all required fields and upon account creation be redirected to the log in page | Works as expected |
|  Input Validation  | Enter values into the sign up form fields  | Fields requiring input will be validated and make the user aware if any validation errors occur  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/1-testing-user-story-1.png">
<img src="docs/testing-manual/1-testing-user-story-2.png">
<img src="docs/testing-manual/1-testing-user-story-3.png">
</details>

2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Nav Bar  | Locate the nav bar located at the top of each page and select the relevant link, if on smaller devices click on the burger dropdown button to access the same icons / links  | User to be able to find the nav bar located at the top of each page and use to navigate their way through the site  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/2-testing-user-story-1.png">
</details>

3. As a user, I can see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/3-testing-user-story-1.png">
</details>

4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watch / Unwatch task  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right, click on the icon to watch / unwatch a task  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/4-testing-user-story-1.png">
<img src="docs/testing-manual/4-testing-user-story-2.png">
</details>

5. As a user, I can view a list of my watched tasks so that I can focus on content I wish to view. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched list  | Navigate to the watched list page via the link in the nav bar. View the list of currently watched tasks.  | User to be presented with the list of all their currently watched task   | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/5-testing-user-story-1.png">
</details>

6. As a user, I can use the search bar on the Task list section so that I can find particular tasks easier. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Search Bar   | Navigate to the task lists page via the icon / link in the nav bar. At the top of the page find the search bar, enter desired characters / keywords and be shown the results.   | Users to be presented with a list of relevant tasks based on their search query and if there is no results a no results found image will display. | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/6-testing-user-story-1.png">
<img src="docs/testing-manual/6-testing-user-story-2.png">
</details>

7. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the delete button to delete the task  | User to click the delete button and the task to be deleted from the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/7-testing-user-story-1.png">
<img src="docs/testing-manual/7-testing-user-story-2.png">
</details>

8. As a user, I can edit my tasks so that I can correct spelling mistakes I may have entered into the task information fields.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/8-testing-user-story-1.png">
<img src="docs/testing-manual/8-testing-user-story-2.png">
<img src="docs/testing-manual/8-testing-user-story-3.png">
<img src="docs/testing-manual/8-testing-user-story-4.png">
</details>

9. As a user, I can view task comments so that I can obtain more information on the task in question. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task Comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed  | User to be able to view their own and other users comments on the currently displayed task.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/9-testing-user-story-1.png">
</details>

10. As a user, I can comment on other tasks so that I can interact with other users.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Enter comment into the comment box and click post to add the comment | User to be able to post a comment that will show their name, profile image and how long ago the comment was posted  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/10-testing-user-story-1.png">
<img src="docs/testing-manual/10-testing-user-story-2.png">
</details>

11. As a user, I can edit or delete my comment on a task incase of input error. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to edit and click on the three dots icon. Enter updated comment and click save  | User to be able to edit and update their owned comments  | Works as expected |
|  Delete task comment  |  Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to delete and click on the three dots icon. Click on the delete button to delete the comment | User to be able to edit and update their owned comments  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/11-testing-user-story-1.png">
<img src="docs/testing-manual/11-testing-user-story-2.png">
<img src="docs/testing-manual/11-testing-user-story-3.png">
<img src="docs/testing-manual/11-testing-user-story-4.png">
<img src="docs/testing-manual/11-testing-user-story-5.png">
<img src="docs/testing-manual/11-testing-user-story-6.png">
<img src="docs/testing-manual/11-testing-user-story-7.png">
</details>

12. As a user, I can manage my tasks so that I can add, edit or delete tasks as needed. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task  | Click on the Create task button which is located at the top of the task list page or from your own profile. Fill in the form with the relevant information into the form fields and click save.  | User to be able to successfully create a task which will be added to the database and all relevant pages on the site  | Works as expected |
|  Delete task  | Navigate to the task detail page by clicking on the relevant task on the task list, or from a users profile. Click on the 3 dots icon in the top right corner of the task. Click on the delete button  | User to click the delete button and the task to be deleted from the database  | Works as expected |
|  Edit task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/12-testing-user-story-1.png">
<img src="docs/testing-manual/12-testing-user-story-2.png">
<img src="docs/testing-manual/12-testing-user-story-3.png">
<img src="docs/testing-manual/12-testing-user-story-4.png">
<img src="docs/testing-manual/12-testing-user-story-5.png">
<img src="docs/testing-manual/12-testing-user-story-6.png">
<img src="docs/testing-manual/12-testing-user-story-7.png">
<img src="docs/testing-manual/12-testing-user-story-8.png">
<img src="docs/testing-manual/12-testing-user-story-9.png">
<img src="docs/testing-manual/12-testing-user-story-10.png">
</details>

13. As a user, I can request a password so that I can log back into my account if I have forgotten my password. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Change Password  | From any page, click on the Contact icon in the Nav Bar. Fill out the form stating a password has been forgotten and submit the form  | User will be giving a feedback message on successful contact message post and the admin will reset the password from the back end | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/13-testing-user-story-1.png">
<img src="docs/testing-manual/13-testing-user-story-2.png">
</details>

14. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected |
|  Log in  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected  |
|  Input validation  | From the log in page enter information to the username and password fields  |  User to be informed if entered values to not meet validation criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/14-testing-user-story-1.png">
<img src="docs/testing-manual/14-testing-user-story-2.png">
<img src="docs/testing-manual/14-testing-user-story-3.png">
<img src="docs/testing-manual/14-testing-user-story-4.png">
</details>

15. As a user, I can log out so that other users using the same device cannot access my account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Log out  | From the nav bar click on the log out icon  | User to be successfully logged out and return to the home page  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/15-testing-user-story-1.png">
<img src="docs/testing-manual/15-testing-user-story-2.png">
</details>

16. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Profile section  | Sign up to the site and then navigate to the profile page from the nav bar  | User to be presented with their profile page which displays all relevant information of the user  | Works as expected |
|  Profile tabs  | Navigate to the profile page. Using the tabs click on each one to display the desired information such as tasks, packs and assigned items.  | User to be able to view all information related to their profile and prescence on the site.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/16-testing-user-story-1.png">
<img src="docs/testing-manual/16-testing-user-story-2.png">
<img src="docs/testing-manual/16-testing-user-story-3.png">
</details>

17. As a user, I can update my profile so that my profile can stay up to date with my latest information. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Profile  | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. Enter new values for fields and click submit  | Users profile to be updated with values entered to form fields.  | Works as expected |
|  Task count  | Navigate to the users profile by clicking on the profile icon on the nav bar. View the task count located in the middle of the profile information panel  | Users to be provided with the currently viewed profiles task count  | Works as expected |
|  Change Password  | Navigate to the profile page by clicking on the profile button on the nav bar or the icon of posted by avatar on a task. Click the 3 dots icon in the top right corner of the profile. Click on edit profile, from the edit profile form click on the change password button. Enter new password and confirm password then submit.  | User should be able to update their password and be presented with a modal to confirm on successfull update | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/17-testing-user-story-1.png">
<img src="docs/testing-manual/17-testing-user-story-2.png">
<img src="docs/testing-manual/17-testing-user-story-3.png">
<img src="docs/testing-manual/17-testing-user-story-4.png">
<img src="docs/testing-manual/17-testing-user-story-5.png">
<img src="docs/testing-manual/17-testing-user-story-6.png">
<img src="docs/testing-manual/17-testing-user-story-7.png">
</details>

18. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Edit profile   | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. add image by clickon on the chose file button. Once image has been selected click save button  | User to have the ability to update their profile image to whatever they select from their drive  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/18-testing-user-story-1.png">
<img src="docs/testing-manual/18-testing-user-story-2.png">
<img src="docs/testing-manual/18-testing-user-story-3.png">
<img src="docs/testing-manual/18-testing-user-story-4.png">
</details>

19. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Home page  | Navigate to the Tick It site in your internet browser. View the landing page.  | User to view the landing page and be able to understand what the website is about  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/19-testing-user-story-1.png">
</details>

20. As a user, I can display basic info on my profile page so that other members can learn more about me. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Profile section   | Navigate to the users profile by clicking on the users icon from the nav bar and then searching for the user from the user list clicking on the desired profile to view  | Users profile to be updated with values entered to form fields.  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/20-testing-user-story-1.png">
<img src="docs/testing-manual/20-testing-user-story-2.png">
</details>

21. As a user, I can search for tasks via a task list or search bar so that I can find specific tasks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Task list   | When logged in, navigate to the task lists page from the nav bar. Scroll down the page to view all tasks that are on that database  | User to be presented with list of all tasks  | Works as expected |
| Task search   | When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/21-testing-user-story-1.png">
<img src="docs/testing-manual/21-testing-user-story-2.png">
<img src="docs/testing-manual/21-testing-user-story-3.png">
</details>

22. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Contact  | Click on the Contact icon from the nav bar which is available to annonymous and authenticated users. Enter the relevant information to the form fields and click on submit  | Users and visitors to the site to have the ability to post a contact query and be presented with feedback on successful posting of query  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/22-testing-user-story-1.png">
<img src="docs/testing-manual/22-testing-user-story-2.png">
<img src="docs/testing-manual/22-testing-user-story-3.png">
</details>

23. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Site feedback  | Perform various tasks for example a form to be sent which would require some form of feedback  | User to be provided feedback regarding the sucess status of the performed task  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/23-testing-user-story-1.png">
</details>

24. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task list  | Log in and navigate to the task list page by clicking on the task list icon in the nav bar. Scroll the list of tasks.  | Users to be able to scroll through all tasks that are on the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/24-testing-user-story-1.png">
</details>

25. As a user, I can browse a list of user accounts so that I can view that particular account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Users list  | Log in and from the nav bar click on the users icon. View the list of all users on the platform  | Users to be able to view a list of all users on the platform and also use the search bar to help aid finding users  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/25-testing-user-story-1.png">
</details>

26. As a user, I can create tasks so that I can partake in the main purpose of the site.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create Task  | From the Nav bar click on the add task button or from the Tasks page, Watched page or profile page click on the create task button  | User to be presented with a form to create a task and upon submission create a task object | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/26-testing-user-story-1.png">
<img src="docs/testing-manual/26-testing-user-story-2.png">
<img src="docs/testing-manual/26-testing-user-story-3.png">
</details>

27. As a user, I can create packs so that I can group tasks together.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create Pack  | From packs page or profile page click on the create pack button  | User to be presented with a form to create a pack and upon submission create a pack object | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/27-testing-user-story-1.png">
<img src="docs/testing-manual/27-testing-user-story-2.png">
<img src="docs/testing-manual/27-testing-user-story-3.png">
</details>

28. As a user, I can delete my packs so that I can permanently remove packs I do not wish to keep.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete pack  | Navigate to the pack detail page by clicking on the relevant pack on the pack list, or from a users profile. Click on the 3 dots icon in the top right corner of the pack. Click on the delete button  | User to click the delete button and the pack to be deleted from the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/28-testing-user-story-1.png">
<img src="docs/testing-manual/28-testing-user-story-2.png">
</details>

29. As a user, I can edit my packs so that I can correct spelling mistakes or I may have entered into the pack information fields.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit pack  | Navigate to the pack in questions pack detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the pack edit form to be displayed in which the user can update the packs information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/29-testing-user-story-1.png">
<img src="docs/testing-manual/29-testing-user-story-2.png">
<img src="docs/testing-manual/29-testing-user-story-3.png">
</details>

#### Testing User Stories - Site Owner

30. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Input validation   | Navigate to the Tick It site. Click on the log in icon in the nav bar. Enter username and password to the relevant fields.   | User input to be validated again the database and signed in if valid and presented with error messages relevant to the validation failing  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/30-testing-user-story-1.png">
</details>

31. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Authentication   | Create code which authenticates if the current user is the owner of items within the site prior to allowing them to edit or delete such items  | Users can only edit or delete tasks and packs they own or their own profile and not others  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/31-testing-user-story-1.png">
<img src="docs/testing-manual/31-testing-user-story-2.png">
</details>

32. As the site owner, I would want to have the ability to remove tasks and task comments so that I can keep the app clean and friendly. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete task  | Access the task objects in the back end API with Djangos admin panel and delete the neccessary tasks  | Admin to have the ability to delete any database task  | Works as expected |
|  Delete task comment  |  Access the comment objects in the back end API with Djangos admin panel and delete the neccessary comments | Admin to have the ability to delete any database comment  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/32-testing-user-story-1.png">
<img src="docs/testing-manual/32-testing-user-story-2.png">
<img src="docs/testing-manual/32-testing-user-story-3.png">
<img src="docs/testing-manual/32-testing-user-story-4.png">
<img src="docs/testing-manual/32-testing-user-story-5.png">
<img src="docs/testing-manual/32-testing-user-story-6.png">
</details>

33. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Responsiveness  | Use the site on a range of devices and screen sizes  | Users will have a pleasant and enjoyable experience on the website regardless of their screen or device size  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/33-testing-user-story-1.png">
<img src="docs/testing-manual/33-testing-user-story-2.png">
</details>

34. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task search  |When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/34-testing-user-story-1.png">
<img src="docs/testing-manual/34-testing-user-story-2.png">
</details>

35. As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Error pages  | Navigate to any page that does not exist  | User to be presented with 404 error page and a button to return home  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/35-testing-user-story-1.png">
</details>


##### Back to [top](#tick-it)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| Pack not submitting the tasks array to the database | Although the database has been created in such way to accept a list of tasks, it didn't seem to work when passing a list of task id's in the form. Tests were conducted which proved that a single entry could be entered, i decided to try and create a for loop to pass in each task to the pack one a time and this achieved the desired outcome |
| Task edit form wont submit if due_date is not set a value | Update due_date to be an empty string and a conditional if statement was placed in the form append which checked if due_date was left empty or null and if true it wouldn't append this field. This fixed the issue as the field in the database has blank and null set to True |
| Profile list only displaying the first 10 results in Infinite Scroll | fetchMoreData was properly implemented  |
| assigned to tasks wouldn't display in the assigned to tab | A filter was added that would filter tasks based on if the assigned_to id matched that of the profile owners |
| Tab active colour would revert to the default | Documentation for react bootstrap didn't mention that the CSS has to be over written by using activeClassName property. Once this was used the issue was resolved |
| Searching for tasks if the single letter Y is entered, tasks with a title that only includes a number will be displayed | I could not work out why this was the case therefore this has had to be left in as a known bug |
| When editing a pack, the data is not correctly pulled from the database thus resulting in the user having to remove all tasks and re select them | Due to time constraints i was unable to find a solution to this bug so i had to be left as a know bug. This bug still allows functionality although the user experience is slightly impacted due to this |
| Pack details not displaying list of associated tasks due to 500 error | Due to not having control over the status of elephant SQLs servers I had to leave this as a known bug. I did implement code to retry if a 500 error is returned however sometimes this exceeds the max retry of 3 times. This bug still allows functionality although the user experience is slightly impacted due to having to refresh the page manually in the occasional instances in which this happens |


##### Back to [top](#tick-it)


## Deployment

### Heroku

This project was deployed to [Heroku](https://www.heroku.com) in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

The website was deployed with Heroku by following these steps:

1. Use the "pip freeze -> requiremnts.txt" command in the terminal to save any libraries that need to be installed in the file.
2. The app uses Cloudinary to host the post images therefore a Cloudinary account will be required. 
3. Log in to [Cloudinary](https://cloudinary.com/) or create an account for free.
4. Navigate to the Dashboard on Cloudinary
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/cloudinary-dashboard.png">
</details>

5. Copy and store the value of the 'API Environment Variable" beginning at cloudinary:// until the end, this will be used in the Heroku Config Vars. 
6. The app also uses ElephantSQL to host the database
7. Log in to [ElephantSQL](https://www.elephantsql.com/) or create an account for free.
8. Click on Create a new instance
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-instance.png">
</details>

9. Set up your plan. Give the 'plan' the desired name, select the Tiny Turtle (free) plan and leave tags blank.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-plan.png">
</details>

10. Select the region and choose the nearest data centre to your location.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-region.png">
</details>

11. Click 'review' and if happy with the details presented click on the create instance button.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-create.png">
</details>

12. From the instances section click on the instance with the name that was just created.
13. Get the ElephantSQL database URL from the instance details page and copy, this will be used in the Heroku Config Vars
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-url.png">
</details>

14. Navigate to https://www.heroku.com/ and login or create an account. 
15. Click the "new" button in the upper right corner and select "create new app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/new-app.png">
</details>

16. Choose an app name and your region and click "Create app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/app-name.png">
</details>

17. Reveal Config Vars and store the required config var names and values as below:

- `CLOUDINARY_URL`: *your Cloudinary URL as obtained above*
- `DATABASE_URL`: *your ElephantSQL postgres database URL as obtained above*
- `PORT`: `8000`
- `SECRET_KEY`: *your secret key*

<details>
<summary>Screenshot</summary>
<img src="docs/deployment/config-vars.png">
</details>

18. Go to the "deploy" tab and pick GitHub as a deployment method.
19. Search for a repository to connect to and select the branch you would like to build the app from.
20. If preferred, enable automatic deploys and then deploy branch.
21. Wait for the app to build and then click on the "View" link which will redirect you to the deployed link.

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your GitHub account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.
   
### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone` and paste the previously copied URL at Step 4.
8. `$ clone https://github.com/jkingportfolio/ci_pp5_tick_it_react`
9. Now press enter and the local clone will be created at the desired local location

##### Back to [top](#tick-it)


## Credits

### Tutorials

- Real Python Django redirects tutorial - [The Ultimate Guide to Django Redirects](https://realpython.com/django-redirects/)
- React-multi-select-component video by [Monsterlessons Academy](https://www.youtube.com/@MonsterlessonsAcademy) - [React Select Example | React Dropdown Menu - Fully Customizable](https://www.youtube.com/watch?v=3u_ulMvTYZI)


### Code

 Code from external sources were used as a basis and built on top of in this project, they are credited below:

 - The basis of this project was inspired by the 'Moments' social media platform walk-through project with Code Institute. Using this a a basis for user log in, profile creation and posting to the API I have built my own app and added extra functionality, such as creating task packs and assigning tasks to users.

 - Password criteria tooltip component was inspired by my mentors previous student [aleksandracodes](https://github.com/aleksandracodes). The file for this component can be found [here](https://github.com/aleksandracodes/ci_pp5_snapfood/blob/main/src/components/PasswordCriteria.js).

  - LandingPage component was inspired by my mentors previous student [aleksandracodes](https://github.com/aleksandracodes). The file for this component can be found [here](https://github.com/aleksandracodes/ci_pp5_snapfood/blob/main/src/components/Landing.js).

### Literature

The use of reference books were used throughout the creation of this project and are credited below:

- React Key Concepts - Roy Derks, published by Packt Publishing

### Misc

The source of where I learned how to produce a GitHub fork and clone was from the following pages of the GitHub Documentation. Although I did not use a fork or clone in this project it is something I hope to implement to future projects now I have the knowledge to do so.

- https://docs.github.com/en/get-started/quickstart/fork-a-repo
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Images such as no results found image used in this site were created by myself using Affinity Designer.


## Acknowledgements

I would like to also thank the following:
- My wife and family for their support and feedback whilst doing this project
- Code Institute tutor support who helped with the many issues I had during this project.
- My Code Institute mentor Mo Shami for his guidance through this project.


[Back to Top](#tick-it)