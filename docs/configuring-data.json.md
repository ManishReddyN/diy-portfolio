---
description: >-
  The data.json file present in src/config folder is the configuration file to
  fill the portfolio content.
---

# ⚙ Configuring \`data.json\`

## JSON Configuration Documentation

This documentation provides guidelines and examples for filling in the JSON configuration file. Follow the explanations and examples to customize the content based on your personal information. A sample JSON file can be found [here](../src/config/data.json).

### Display Picture

* **fileName**: File name of your display picture (e.g., "avatar.webp"). Place the file in the `public/assets` folder. Do not place it inside any subfolders.
  * **Recommendations for the display picture: Square Shape, Preferred Size: 300×300.**
* **alt**: Alt text for the display picture (e.g., "Display Picture").

**Example:**

```json
"displayPicture": {
  "fileName": "avatar.webp",
  "alt": "Display Picture",
},
```

### Home Section

* **name**: Your first name.
* **intro**: Brief introduction or bio.
*   **socialLinks:** Array of social link objects. Each social link object has a `name, link, and icon` fields. All are mandatory. All items in `mainLinks` will be displayed on the home page.&#x20;

    * Replace the links with your own. If you don't have a profile, delete the element.&#x20;
    * Copy from [Example social links page](example-social-links.md) if you find any usable example. For missing websites, find an icon [here](https://react-icons.github.io/react-icons/) and paste the name (e.g. FaHome) in the icon section.
    * **Suggestion**: Limit to 5 social links.&#x20;
    * **Example**:

    ```json
    "home": {
      "name": "First Name",
      "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "socialLinks": [
        {
          "name": "Github",
          "link": "https://github.com",
          "icon": "IoLogoGithub"
        },
        {
          "name": "LinkedIn",
          "link": "https://www.linkedin.com",
          "icon": "IoLogoLinkedin"
        },
        {
          "name": "Twitter",
          "link": "https://twitter.com",
          "icon": "IoLogoTwitter"
        },
        {
          "name": "Blog",
          "link": "https://username.com",
          "icon": "IoReader"
        },
        {
          "name": "Appointment",
          "link": "https://calendly.com",
          "icon": "IoCalendar"
        }
      ]
    }
    ```

### Profile Section

* **profilePictureFileName**: File name of your profile picture (e.g., “Profile.webp”). Place the image in the `public/assets/profile` folder.
  * **Recommendations for the profile picture: Landscape, Preferred Size: 600×450.**
* **profilePictureAlt**: Alt text for the profile picture.
* **name**: Your full legal name.
* **bio**: Brief biography about yourself.
*   **details**: Additional details including nationality, location, experience start date, current role, open to collaboration, core competencies, personal pursuits.&#x20;

    * The **`experienceStartDate`** value will be used to calculate your experience in the field. Hence, add the date from which you started working in your current field.

    > No new details can be added, but existing details can be deleted if they do not apply. To add new details, change the code in src/components/profile/profile.tsx or raise a request in the issues section [here](https://github.com/ManishReddyN/diy-portfolio/issues).&#x20;


* **resume**: File name of your resume, including the extension (PDF preferred). Place the file in the `public/assets/profile` folder.

**Example:**

```json
"profile": {
  "profilePictureFileName": "Profile.webp",
  "profilePictureAlt": "Profile Image",
  "name": "John Doe",
  "bio": "Passionate web developer with a strong background in front-end technologies...",
  "details": {
    "explanation": "Remove those which don't apply...",
    "nationality": "American",
    "location": "New York, USA",
    "experienceStartDate": "2020-01-01",
    "currentRole": "Role",
    "openToCollaboration": "Yes/No",
    "coreCompetencies": "Core competencies",
    "personalPursuits": "Personal pursuits"
  },
  "resume": "Resume_Sample.pdf"
},
```

### Bio Section

Has 3 subsections:

* Work Experience - represented with the `workExperience` field.
* Education - represented with the `education` field.
* Volunteer Experience - represented with the `volunteerExperience` field.

Example:

```json
"bio":{
  "workExperience":{
  ...
  },
  "education":{
  ...
  },
  "volunteerExperience":{
  ...
  }
}
```

#### Work Experience

Provide details about your work experience, including company name, roles, role titles, descriptions, and years.

`workExperience`: This is an array where you can list multiple work experiences. Each work experience is represented as an object within the array.

* `company`: Replace "Company1" with the actual name of the company where you gained work experience.
*   `roles: [...]`: This is an array where you can list multiple roles you had within the specified company. Each role is represented as an object within the array.

    * `title`: Replace "Frontend Developer" with the actual title of the role you held.
    * `description`: Provide a brief description of the responsibilities and tasks associated with the role. Replace "Lorem ipsum dolor sit amet..." with the actual description.
    * `year`: Specify the duration of the role. Replace "Dec 2021 - Present" with the actual timeframe during which you held this role.

    > **Add more role objects within the array if you had multiple roles within the same company.**
* `companyURL`: Replace "[https://company1.com](https://company1.com)" with the actual URL of the company's website.

You can repeat this structure for each work experience entry, providing details about the roles, their descriptions, and the respective company URLs.

```json
"workExperience": [
  {
    "company": "Company1",
    "roles": [
      {
        "title": "Frontend Developer",
        "description": "Lorem ipsum dolor sit amet...",
        "year": "Dec 2021 - Present"
      },
      ...
    ],
    "companyURL": "https://company1.com"
  },
  ...
],
```

#### Education

Details about your education, including institution name, degrees, degree titles, years, and descriptions.&#x20;

> **Same structure as work experience. `company` replaced with `institution`, and `roles` replaced with `degrees`.**

**Example:**

```json
"education": [
  {
    "institution": "Institution1",
    "degrees": [
      {
        "title": "Master",
        "year": "Dec 2021 - Present",
        "description": "Lorem ipsum dolor sit amet..."
      },
      ...
    ],
    "institutionURL": "https://institution1.com"
  },
  ...
],
```

#### Volunteer Experience

Information about your volunteer experience, including organization name, roles, role titles, descriptions, and years.

> **Same structure as work experience. `company` replaced with `organization`.**

&#x20;**Example:**

```json
"volunteerExperience": [
  {
    "organization": "Organization1",
    "roles": [
      {
        "title": "Role1",
        "description": "Lorem ipsum dolor sit amet...",
        "year": "Dec 2021 - Present"
      },
      ...
    ],
    "organizationURL": "https://organization1.com"
  },
  ...
],
```

### Interests Section

List your interests, each with title, description, and icon.

Represented as an array of interest objects, each with the 3 fields, all mandatory.

The icon name should refer to an icon in the [react-icons](https://react-icons.github.io/react-icons/) library. Search for your suitable icon there and copy the icon name to use it in the icon field.

**Example:**

```json
"interests": [
  {
    "title": "Interest 1",
    "description": "Lorem ipsum dolor sit amet...",
    "icon": "MdHome"
  },
  ...
],
```

### Portfolio Section

#### Portfolio Items

Details about your portfolio items, including titles, descriptions, project links, image file names, image alt texts, and technologies used. All fields are mandatory.

**Place the images in the `public/assets/portfolio` folder and mention the image file name including extension in the `imageName` field of each portfolio item. Preferred Image Size: 600x400**

**Example:**

```json
"portfolio": {
  "explanation": "Replace the content here with your information...",
  "portfolioItems": [
    {
      "title": "Project 1",
      "description": "Lorem ipsum dolor sit amet...",
      "link": "https://github.com",
      "imageName": "Project 1.webp",
      "imageAlt": "Project 1 Image",
      "technologies": ["Technology 1", "Technology 2", "Technology 3"]
    },
    ...
  ]
},
```

### Archive Section

The section to fill the archive page of the site.

#### Archive Items

Array containing all the items, where each archive item is a blog article/paper published/any other content. All the fields are mandatory.

**Place the images in the `public/assets/archive` folder and mention the image file name including extension in the `imageName` field of each archive item. Preferred Image Size: 570x310**



**Example:**

```json
"archive": {
  "archiveItems": [
    {
      "title": "Blog 1",
      "date": "Jan 2020",
      "imageName": "Blog 1.webp",
      "imageAlt": "Blog Image",
      "link": "https://medium.com"
    },
    ...
  ]
},
```

### Contact Section

Your contact information, including phone number, email address, and physical address, with a link to Google Maps. All fields are mandatory.

**Example:**

```json
"contact": {
  "phone": "1234567890",
  "emailID": "email@example.com",
  "address": "123 Main St, Anytown USA 12345",
  "addressLink": "https://www.google.com/maps"
},
```

Feel free to use the provided examples as templates and replace the placeholder information with your own details. The structure and explanations in this documentation aim to guide you in creating a personalized JSON configuration file for your portfolio or personal website.

