# RaveOS Exporter

## Description

The point of this exporter is to contact the RaveOS api and export out metrics in Prometheus format.

## Getting Started

### Dependencies

* Node (>=v12)
* Npm (>=6.13)
* RaveOS API token

### Installing

* Git clone the repository 
* ```npm install``` the packages
* Create a ```.env``` file in the root of the project
* Get API token from RaveOS UI under account -> security (It is hidden below the Auth History)
* Put the token into ```.env``` file with line ```AUTH_TOKEN=<your-token-here>``` 

### Executing program

```
node index.js
```
### Debugging

Logs are written to two different files, error and combined, based on the log level. These logs are append based and will not be cleared. 

## Authors

Rasmus Rüngenen  
[@TopeltR](https://twitter.com/TopeltR)

## Version History

* 0.1
    * Initial Release
* 0.2
    * Fixes and improvements

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

