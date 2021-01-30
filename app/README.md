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
