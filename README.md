### My Wedding Website

Visit the live site!
[akyandrew2022.com](http://akyandrew2022.com)

![Homepage](#.png)

A website for my wedding.
A collaboration between Aky Mac Donald (Front End) and [Kevin Bernfeld](https://github.com/myopicmage) (Back End)
Guests can RSVP, view event details, and find information about travel and the gift registry.

## RSVP Feature

![RSVP Search](#.png)

Reusable forms with validation were built with Formik and Yup, including elements from Chakra UI mixed with bespoke CSS. The forms use a fuzzy search to grab parties from the database. React's components are used to achieve a seamless experience for the user, and keep code DRY for the developer.

![RSVP party view](#.png)
The names of each guest in the party are pre-filled in the RSVP form. Based on the type of guest, child or adult, the forms will pre-fill, assuring each guest can choose the correct meal options. If the user types their name incompletely or incorrectly, there is the option to start over. Validation is used precisely to ensure the correct data is entered for each guest and nothing is missing. Nothing worse than showing up to a wedding and getting the chicken when you asked for the beef, am I right?

## Tech Stack
# Front End
- Typescript
- React
- Sass
- Chakra UI
- Formik
- Yup

# Back End
[The backend repo is found here](https://github.com/doginasweater/akywedding-backend)
- C#
- .NET
- Entity Framework