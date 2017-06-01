from .base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': get_env("DB_ENGINE"),
        'NAME': get_env("DB_NAME"),
        'USER': get_env("DB_USER"),
        'PASSWORD': get_env("DB_PASSWORD"),
        'HOST': get_env("DB_HOST"),
        'PORT': get_env("DB_PORT"),
    }
}