/**
Don't get confused wtih top level index.js
The name should be index.js only

Whenever there's a file named `index.js` inside directory,
if we try to import a directory  WITHOUT specifyting a FILE
it will by defauly pickup the index.js file.

Here, we will import all the common components and then immediately export them

NOTE Whenever you using `export * ...`, you need to change the
    `export default ComponentName` to `export { ComponentNameAsAKey: ComponentNameAsAnObject }`
    Because the key and values have same name, you can just do `export { ComponentName }`

*/

export * from './Button';     //This imports and exports the button component
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './EditText';
export * from './Spinner';
