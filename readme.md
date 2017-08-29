harbor-compose-wrapper
======================

An npm wrapper around the [harbor-compose](https://github.com/turnerlabs/harbor-compose) cli.

### installation

```bash
npm install --save-dev harbor-compose-wrapper
```

### usage examples (`package.json`)

```json
"scripts": {
  "devDependencies": {
    "harbor-compose-wrapper": "0.13.0"
  },  
  "harbor-ps": "harbor-compose ps",
  "harbor-logs": "harbor-compose logs",
  "harbor-up": "harbor-compose up"
}
```

or use with more automation...

```json
"version": "1.0.0",
"scripts": {
  "devDependencies": {    
    "harbor-compose-wrapper": "0.13.0",
    "jq-cli-wrapper": "*",
    "randomstring": "^1.1.5"
  },  
  "unique-version": "echo VERSION=$(jq -r .version package.json)-$(randomstring) > .env",
  "docker-build": "npm run unique-version && docker-compose build",
  "harbor-deploy": "npm run docker-build && docker-compose push && harbor-compose up && harbor-compose ps"
}
```

```yaml
version: '2'
services:
  app:
    build: .
    image: quay.io/turner/app:${VERSION}
    ports:
      - "80:5000"
    environment:
      PORT: 5000
      HEALTHCHECK: /health
```

...allows you to change code and redeploy a unique image based on your package.json version (e.g., `quay.io/turner/app:1.0.0-XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT`), by running:

```
npm run harbor-deploy
```
