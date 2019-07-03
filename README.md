
# Material Angular Dashboard + AWS Lambda

Welcome to the first dark dashboard with Google Material Design and Angular powered with [AWS Lambda](https://aws.amazon.com/lambda/) deployment facility!

<a target="_blank" href="http://material-angular-dashboard.creativeit.io/"><img src="https://trello-attachments.s3.amazonaws.com/55f8466d8f95075bca20dd66/5bf421455ab0f05102cadac9/eee32e50e9fc278b715442a3fc6f65aa/Readme.png"/></a>

# Overview

This bundle contains the [`feature/backend`](https://github.com/CreativeIT/material-angular-dashboard/tree/feature/backend) bundle code and configuration for deployment on AWS Lambda.

AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running.

Its much more fun with the [demo](https://g5ope910kg.execute-api.eu-central-1.amazonaws.com/production/).

Material admin template is absolutely free for commercial usage theme, based on Google Material Design guidelines.

> **Important**: We are still working on the project and there will be much more awesome, check out our [issues](https://github.com/CreativeIT/material-angular-dashboard/issues) to see what features are coming soon.

# SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone our repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

```bash
git clone https://github.com/CreativeIT/material-angular-dashboard.git
```

2. Open your copied repo folder in terminal and checkout `feature/serverless` branch to use bundle with serverless deployment configuration.

```bash
git checkout feature/serverless
```

3. Install necessary modules, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

```bash
npm install
```

4. Install [serverless](https://serverless.com/) globally to use its commands in the terminal:

```bash
npm install --global serverless
```

5. Install [awscli](https://aws.amazon.com/cli/) to manage AWS services (AWS Lambda in our case), make sure that you have installed [pip](https://pip.pypa.io/en/stable/installing/):

```bash
pip install awscli
```

6. [Create IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) for automatic project deployment, make sure that you have [AWS account]([https://aws.amazon.com/console/](https://aws.amazon.com/console/)). Grant it AdministratorAccess policy. Remember its access key pair.

7. [Configure awscli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) with key pair given above:

```bash
aws configure
```

8. Now you are able to deploy the project:

Run `npm run build:serverless:deploy` to build and deploy the project to AWS Lambda. You will get the URL for your project.

Navigate to the given URL. Use the following credentials to sign in the Dashboard: user: _admin@admin.admin_ , password: _admin_

# FEATURES

* Angular

* [Material Design](http://www.google.com/design/spec/material-design/introduction.html)

* TypeScript

* [Passport.js](http://www.passportjs.org/)

* [Express](https://expressjs.com/)

* [AWS Lambda](https://aws.amazon.com/lambda/)

* [Serverless](https://serverless.com/)

* Responsive dark material design. DARK, Carl!

* User experience focused

* [Sass](http://sass-lang.com/)

* [D3](https://d3js.org/) and [NVD3](http://nvd3.org/)

* MIT License

# Additional

Since the project uses [BEM](http://getbem.com) structure with sass, it can be customized in an easy way by editing `src/theme/scss/_variables.scss` file.

Project uses [d3](https://d3js.org/) and [nvd3](http://nvd3.org/) to build charts and chart components.

# Quick start
Do you want to start quickly and don't need all the pages and modules? You can checkout to empty 
[starter-kit branch](https://github.com/CreativeIT/material-angular-dashboard/tree/starter-kit) and get to work!

# Hire us

We are ready to become a strong development partner and bring competitive advantage to your business. Visit our site [creativeit.io](http://creativeit.io/) or drop us a line <hello@creativeit.io>. We will be happy to help you!

# Credits

Material Angular Dashboard was inspired by [html5 material dashboard](https://github.com/CreativeIT/material-dashboard-lite)

Designed with passion and coffee by CreativeIT.

# Support the project

* Star the repo :star:

* Create an issue report or feature request

* Follow us on [Twitter](https://twitter.com/intent/follow?screen_name=CreativeITeam)
