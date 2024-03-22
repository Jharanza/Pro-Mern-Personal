<h1>Transform</h1>

<p>In this project we install the following dependencies:</p>
<ul>
    <li>babel-cli</li>
    <li>babel-preset-react</li>
</ul>
<p>In the console run:</p>
<hr />
    <p>$ npm i babel-cli babel-preset-react -D</p>
<hr />

<p>Now, we can transform the code .jsx in bare .js. First, we create a new directory <strong>src</strong> and put the .jsx file in this directory.</p>

<p>Then we run the next code to transform the code in the .jsx file in .js</p>
<hr />
    <p>$ node_modules/.bin/babel src --presets react --out-dir public</p>
<hr />
<p>Now, we can delete the script in the html file of babel and delete the type from the script tag</p>
<p>We can add in the package.json a script to run the same command with npm</p>
<p>Also, we can add another script to show the changes with --watch, then we run the command </p>
<hr />
    $ npm run watch
<hr />
<p>this keep listening each change and transform each the file .js</p>
<p>Its necesary have another console to run the command start and each change, refresh the page to show the changes </p>