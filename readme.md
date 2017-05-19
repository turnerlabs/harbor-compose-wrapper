harbor-compose-wrapper
======================

An npm wrapper around the [harbor-compose](https://github.com/turnerlabs/harbor-compose) cli.

### installation

```bash
npm install --save-dev harbor-compose-wrapper
```

### usage example (`package.json`)

```json
"scripts": {
  "devDependencies": {
    "harbor-compose-wrapper": "0.10.1"
  },  
  "harbor-deploy": "harbor-compose up",
  "harbor-ps": "harbor-compose ps",
  "harbor-logs": "harbor-compose logs"
}
```

or use with `jq`...

```json
"scripts": {
  "devDependencies": {
    "jq-cli-wrapper": "*",
    "harbor-compose-wrapper": "0.10.1"
  },  
  "docker-build": "VERSION=$(jq -r .version package.json) docker-compose build",
  "docker-push": "VERSION=$(jq -r .version package.json) docker-compose push",
  "harbor-up": "VERSION=$(jq -r .version package.json) harbor-compose up",
  "harbor-deploy": "npm run docker-build && npm run docker-push && npm run harbor-up",
  "harbor-ps": "harbor-compose ps",
  "harbor-logs": "harbor-compose logs"
}
```