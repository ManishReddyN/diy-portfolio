# 👨‍💻 DIY Portfolio

Welcome to DIY Portfolio, a Next.js based website for creating your personalized portfolio with ease. This minimalistic and customizable portfolio allows you to showcase your skills, projects, and experiences hassle-free.

### Features 🌟

- Easy Configuration: Customize your portfolio by updating the data.json file. Follow the official documentation for detailed instructions.
- Project Showcase: Display your projects with details, including titles, descriptions, images, and technologies used.
- Skills Section: Highlight your skills in a dedicated section to make a strong impression.
- Social Media Integration: Provide links to your social media profiles for easy connectivity.
- Responsive Design: Ensure a seamless experience on various devices with a responsive and modern design.
- Contact Form with Notion Integration: Receive and store contact enquiries seamlessly using the Notion API.

## One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FManishReddyN%2Fdiy-portfolio&env=NOTION_API_KEY,NOTION_DB_ID,NOTION_USER_ID&envDescription=Notion%20API%20key%2C%20DB%20ID%20and%20User%20ID%20needed%20for%20the%20contact%20form%20population.%20Click%20on%20Learn%20More%20for%20more%20information.&envLink=https%3A%2F%2Fdocs.nmreddy.me%2Fdiy-portfolio%2Fadding-env-variables&project-name=my-portfolio&repository-name=my-portfolio&redirect-url=https%3A%2F%2Fdocs.nmreddy.me%2Fdiy-portfolio%2F&demo-title=Demo%20Portfolio&demo-description=A%20sample%20portfolio%20deployed%20on%20vercel.&demo-url=https%3A%2F%2Fdiy-portfolio-sample.vercel.app%2F&demo-image=https%3A%2F%2Fi.ibb.co%2FwLrJDLZ%2Fdemo-diy-portfolio.png)

### Getting Started 🛠️

Follow these steps to set up and customize your DIY Portfolio:

#### 0. Fork the Repository 🍴

Fork the GitHub repository to create a copy of your own by clicking on the fork button above or by clicking [here](https://github.com/ManishReddyN/diy-portfolio/fork).

#### 1. Clone the Repository 📋

Clone this forked repository to your local machine:

```bash
git clone https://github.com/<your-github-username>/<fork-repo-name>.git
```

#### 2. Install Dependencies ⏬

Navigate to the project's root directory and install the necessary dependencies:

```bash
cd diy-portfolio
npm ci
```

#### 3. Configure Data & Images ⚙️

Refer to the [official documentation](https://docs.nmreddy.me/diy-portfolio/configuring-data.json) for detailed instructions on configuring the `data.json` file. Customize fields such as:

* **name:** Your full name
* **title:** Your professional title
* **description:** A brief introduction about yourself
* **socialLinks:** Links to your social media profiles
* **projects:** Details about your projects (title, description, image, technologies used, etc.)
* **experience:** List of your experiences

#### 5. Run the Application ▶️

Start the Next.js development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to view your DIY Portfolio.

### Customization 🎨

Feel free to personalize the styling, layout, and content to match your preferences. The website utilizes Next.js components, making it straightforward to modify and expand.

### Deployment 🚚

When you're ready to share your portfolio with the world, deploy it on platforms like Vercel by simply linking your GitHub project with a deployment.

### License 📝

This project is licensed under the Mozilla Public License 2.0 - see the LICENSE file for details.

***

Craft your unique portfolio with DIY Portfolio! If you have any questions or suggestions, refer to the [documentation](https://docs.nmreddy.me/diy-portfolio/) or feel free to reach out. Happy showcasing!
