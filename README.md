# Serverless Monorepo NodeJs API Boilerplate
- The project was configured from scratch using Serverless Framework and serverless-bundle.
- Provides a straighforward workflow for creating, testing and deploying simple backend serverless services

It supports:
- Generating optimized Lambda packages with Webpack
- Using ES6 syntax in handler functions such as `import` and `export`
- DynamoDb access to IAM role for any table in eu-west-1 (can be modified in `serverless.yml`)

TODO:
- Add support for environment variables
- Add ESLint and Prettier configs
- Add serverless-offline for local API Gateway
- Add testing support

## Usage
1. **Install Serverless Framework**

```sh
$ npm install serverless -g
```

2. **Clone this repo**

3. **Install packages**

Go to the root of the project.

```sh
npm install
```

3. **Deploy your service**

Go to one of the services in `/services` dir.

```sh
serverless deploy --stage {dev/prod} --function {function-name} --aws-profile {profile-name}
```

## Other commands

<details>
<summary><b>HOW TO: Interact with resources in a different role (Switch Role) for federated identities</b></summary><p>

After defining your profile in `~/.aws/config` and `~/.aws/credentials` and ensuring your login token is updated (if applicable when logging in with services such as SAML2AWS), run the following commands to ensure Serverless Framework uses your new profile:

```sh
export AWS_PROFILE={{profile-name}}
export AWS_SDK_LOAD_CONFIG = 1
```

This ensures that the `{{profile-name}}` profile previously configured in `/config` is used by the Serverless Framework.

</p>
</details>


<details>
<summary><b>HOW TO: Create a new service</b></summary><p>

You can copy and paste the whole `/services/example-service` package or use the command below as a starting point:

```sh
npm run new-service -- --name {service-name} --path services/{service-name}
```
</details>


<details>
<summary><b>HOW TO: Run a function locally</b></summary><p>

You need to create a mock event similar to `/services/example/service/mocks/create-event.json` and run:

```sh
serverless invoke local --function {function-name} --path mocks/{event-file.json}
```
</p>
</details>

<details>
<summary><b>HOW TO: Remove service once deployed</b></summary><p>

If `profile-name` is not passed, serverless will use the default profile.

```sh
serverless remove --stage {stage-name} --aws-profile {profile-name}
```
</p>
</details>
