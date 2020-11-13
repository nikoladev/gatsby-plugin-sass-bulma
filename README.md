To get the error:

- Run `yarn`
- Run `yarn develop`
- It crashes

To prevent the error:

- In `package.json` revert to the previous minor version: `"gatsby-plugin-sass": "2.3.x",`
- Run `yarn`
- Run `yarn develop`
- It works
