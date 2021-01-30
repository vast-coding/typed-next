# Initialise a Next.js project with typescript

```sh
echo "
.DS_Store
.env
.next
node_modules
" >> .gitignore

npm init -y
git init
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

# graphql
npm i typescript type-graphql graphql reflect-metadata
npm i -D @ types/node 

# mongoose
npm i @typegoose/typegoose mongoose connect-mongo
npm i -D @types/mongoose

# express, JWT
npm i express jsonwebtoken
npm i -D @types/express @types/jsonwebtoken

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
