# KAEC Clone Project

This project aims to build a clone version of [KAEC Website](http://www.kaec.net/). This is only for educational purpose as I'm so interested in the design and aethestics of the website. No copyright infringment intended.

Some screenshots of the current verion are shown below:

![Screenshot 1](/assets/images/sc1.png "The Image Slider is created using React")
![Screenshot 1](/assets/images/sc2.png)
![Screenshot 1](/assets/images/sc3.png "The images are arranged using CSS Grid Layout")
![Screenshot 1](/assets/images/sc4.png "The green shade appeared on image hover is created by manipulating :before and :after pseudoelement in CSS3")
---
## Backend

### 1. Environment variables
First thing first, we need to set some environment variables. Please take a look at `secret.example.properties` file for a list of required environment variables. You should keep a copy of this file with real values out of version control.

In addition, you need to have database (PostgreSQL preferred) ready in your development machine.

### 2. Django project settings
It's a good practice to separate different settings for different environments that the project will be run on. Settings for this project lie in directory `kaec/config/settings`, where:

* **`base.py`**: Settings common to all instances of the project
* **`local.py`**: This setting file is used to work on the project locally. Local development-specific settings include `DEBUG` mode, log level and activation of developer tools such as django-debug-toolbar. 
* **`staging.py`**: This setting file is used to run a semi-private version of the site on *Heroku*.
* **`test.py`**: Settings for running tests including test-runners, in-memory database definitions, and log settings.
* **`production.py`**: This is used for real production server that hosts our real site.

The `DJANGO_SETTINGS_MODULE` should be set in accordance with the version of the project. Default value is `config.settings.local`

To run the project with a specific setting file, use the following command:
```
python manage.py runserver --setings=config.settings.test
```

---
## Frontend

[TODO]