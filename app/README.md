# Initialise a Next.js project with typescript

```sh
echo "
.DS_Store
.env
.next
node_modules
" >> .gitignore

git init
cd app
npm init -y
npm i react react-dom next

npm i -D typescript \
	@types/react \
	@types/react-dom \
	@types/node

touch tsconfig.json
mkdir pages
```

### `package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## The next line will populate the tsconfig.json file

```sh
npm run dev
```

## Add absolute imports from root directory

### `tsconfig.json`

```json
"compilerOptions": {

"baseUrl": "."

}
```

## Server side

```sh
mkdir api
cd api
npm init -y
npx tsc --init

npm i   typescript \
	graphql \
	type-graphql \
	reflect-metadata \
	@typegoose/typegoose \
	mongoose \
	connect-mongo \
	express \
	jsonwebtoken
	
npm i -D @types/node \
	@types/mongoose \
	@types/express \
	@types/jsonwebtoken
	
```

