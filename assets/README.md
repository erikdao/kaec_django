# Assets: The front-end code for KAEC Django

This directory contains most of the front-end code for KAEC. The purpose of keeping this separated directory is to decouple frontend development from the backend one.

All the front-end codes will be transpiled using Webpack and integrated into the backend code using [`django-webpack-loader`](https://github.com/ezhome/django-webpack-loader)