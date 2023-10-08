export const questions = [
  {
    questionType: 'html',
    question: 'What does HTML stand for?',
    options: [
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Hyper Technology Markup Language',
      'Hyper Text Makeup Language',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'html',
    question: 'Which HTML tag is used for creating an unordered list?',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'html',
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<br>', '<lb>', '<break>', '<newline>'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'html',
    question: 'What is the purpose of the "alt" attribute in an image tag?',
    options: [
      'To provide alternative text when the image cannot be displayed',
      'To specify the alignment of the image',
      'To set the background color for the image',
      'To define the image source',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'html',
    question: 'Which HTML tag is used for creating a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<anchor>'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'html',
    question: 'What is the correct HTML element for the largest heading?',
    options: ['<h6>', '<header>', '<heading>', '<h1>'],
    correctOptionIndex: 3,
  },
  {
    questionType: 'html',
    question: 'Which attribute is used to define inline styles in HTML?',
    options: ['class', 'style', 'id', 'inline'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'html',
    question: 'What is the purpose of the "doctype" declaration in HTML?',
    options: [
      'To define the document type',
      'To declare a function',
      'To set the page title',
      'To create a comment',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'html',
    question:
      'What is the correct HTML element for inserting a horizontal rule?',
    options: ['<line>', '<hr>', '<rule>', '<horizontal>'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'html',
    question: 'Which HTML tag is used for creating a table?',
    options: ['<table>', '<tab>', '<tr>', '<td>'],
    correctOptionIndex: 0,
  },

  {
    questionType: 'css',
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheet',
      'Colorful Style Sheet',
      'Computer Style Sheet',
      'Creative Style Sheet',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'css',
    question:
      'Which CSS property is used to change the text color of an element?',
    options: ['color', 'text-color', 'font-color', 'text-style'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'css',
    question:
      'What is the correct CSS syntax for applying a red border to all paragraphs?',
    options: [
      'p {border-color: red;}',
      'p {border: red;}',
      'p {border-style: red;}',
      'p {border-width: red;}',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'css',
    question:
      'Which CSS property is used to control the spacing between elements?',
    options: ['margin', 'spacing', 'padding', 'border'],
    correctOptionIndex: 2,
  },
  {
    questionType: 'css',
    question:
      'What is the correct CSS syntax for changing the font size of a paragraph to 20 pixels?',
    options: [
      'p {font-size: 20px;}',
      'p {text-size: 20px;}',
      'p {size: 20;}',
      'p {font: 20px;}',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'css',
    question:
      'Which CSS property is used to set the background color of an element?',
    options: ['color', 'background-color', 'bgcolor', 'bg-color'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'css',
    question:
      'What is the correct CSS syntax for centering an element horizontally?',
    options: [
      'align: center;',
      'center: horizontal;',
      'text-align: center;',
      'position: center;',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'css',
    question: 'Which CSS property is used to make text bold?',
    options: ['text-style', 'font-weight', 'bold', 'text-bold'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'css',
    question:
      'What is the correct CSS syntax for applying a class selector to an element?',
    options: [
      'class {color: blue;}',
      '.classname {color: blue;}',
      '#classname {color: blue;}',
      'element {color: blue;}',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'css',
    question:
      'Which CSS property is used to create rounded corners on an element?',
    options: [
      'border-radius',
      'rounded-corners',
      'corner-style',
      'corner-radius',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'javascript',
    question: 'What is the result of the following expression? 2 + 2 * 3',
    options: ['8', '10', '6', '12'],
    correctOptionIndex: 2,
  },
  {
    questionType: 'javascript',
    question: 'Which keyword is used to declare a variable in JavaScript?',
    options: ['var', 'let', 'const', 'int'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'javascript',
    question: 'What is the output of console.log(typeof [])?',
    options: ['object', 'array', 'string', 'undefined'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'javascript',
    question: 'What does the "this" keyword refer to in JavaScript?',
    options: [
      'The current function',
      'The global object',
      'The parent object',
      'The element that triggered the event',
    ],
    correctOptionIndex: 3,
  },
  {
    questionType: 'javascript',
    question: 'Which method is used to add an element to the end of an array?',
    options: ['push()', 'unshift()', 'pop()', 'shift()'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'javascript',
    question: 'What does the "===" operator do in JavaScript?',
    options: ['Equality', 'Identity', 'Assignment', 'Comparison'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'javascript',
    question:
      'What is the purpose of the "use strict" directive in JavaScript?',
    options: [
      'To enable strict mode',
      'To indicate that the code is in strict mode',
      'To prevent variable declaration',
      'To avoid memory leaks',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'javascript',
    question: 'What is the output of console.log(3 + "2")?',
    options: ['5', '6', '32', 'Error'],
    correctOptionIndex: 2,
  },
  {
    questionType: 'javascript',
    question: 'Which built-in method is used to sort an array in JavaScript?',
    options: ['sort()', 'order()', 'arrange()', 'sortBy()'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'javascript',
    question:
      'What is the purpose of the "querySelector" method in JavaScript?',
    options: [
      'To select multiple elements',
      'To select elements by class name',
      'To select elements by tag name',
      'To select an element by CSS selector',
    ],
    correctOptionIndex: 3,
  },

  {
    questionType: 'react',
    question: 'What is React?',
    options: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
      'A server-side framework',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'react',
    question: 'Which method is used to change the state of a React component?',
    options: ['setState()', 'changeState()', 'updateState()', 'modifyState()'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'react',
    question: 'What is a React component in terms of user interface?',
    options: [
      'A building block for UI elements',
      'A data structure',
      'A user interface design tool',
      'An external CSS file',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'react',
    question: 'In React, what does "JSX" stand for?',
    options: [
      'JavaScript XML',
      'JavaScript Xcode',
      'Java Syntax Extension',
      'JSON XML',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'react',
    question: 'What is the entry point for all React applications?',
    options: ['index.html', 'app.js', 'main.js', 'index.js'],
    correctOptionIndex: 3,
  },
  {
    questionType: 'react',
    question:
      'Which lifecycle method is called after a component has been rendered to the screen?',
    options: [
      'componentDidUpdate',
      'componentWillUnmount',
      'componentDidMount',
      'componentWillUpdate',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'react',
    question: 'What is the purpose of "props" in React?',
    options: [
      "To store component's state",
      'To handle component events',
      'To pass data from parent to child components',
      'To handle component routing',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'react',
    question: 'What is the virtual DOM in React?',
    options: [
      'A lightweight version of the actual DOM',
      'A container for CSS styles',
      'A JavaScript module',
      'A testing library',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'react',
    question: 'How can you prevent a component from rendering in React?',
    options: [
      'By using the "noRender" attribute',
      'By setting the state to "no-render"',
      'By returning "null" from the render method',
      'By using CSS display property',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'react',
    question: 'In React, which package is used for routing?',
    options: [
      'react-router',
      'react-router-dom',
      'react-route',
      'react-routing',
    ],
    correctOptionIndex: 1,
  },

  {
    questionType: 'nextjs',
    question: 'What is Next.js?',
    options: [
      'A JavaScript library for building user interfaces',
      'A server-side framework based on Node.js and React',
      'A database management system',
      'A styling framework for CSS',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nextjs',
    question: 'What command is used to create a new Next.js project?',
    options: [
      'create-react-app',
      'npm init',
      'next init',
      'npm create next-app',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nextjs',
    question:
      'What is the purpose of the "pages" directory in a Next.js project?',
    options: [
      'To store CSS files',
      'To store JavaScript modules',
      'To define the routing and pages of the application',
      'To store image assets',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nextjs',
    question: 'What is "Server-Side Rendering" (SSR) in Next.js?',
    options: [
      'Rendering HTML on the client side',
      'Rendering HTML on the server side before sending it to the client',
      'A package for handling server requests',
      'A package for managing server configurations',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nextjs',
    question: 'Which file is used to add global CSS styles in Next.js?',
    options: ['styles.css', '_app.js', '_document.js', 'global.css'],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nextjs',
    question:
      'What is the purpose of the "getStaticProps" function in Next.js?',
    options: [
      'To fetch data from an external API',
      'To render dynamic routes on the server side',
      'To statically generate props for a page',
      'To handle form submissions',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nextjs',
    question: 'How do you create a dynamic route in Next.js?',
    options: [
      'By using the "getStaticPaths" function',
      'By creating a folder with the page name',
      'By defining a custom server',
      'By using "params" in the page URL',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'nextjs',
    question: 'Which command is used to start a development server in Next.js?',
    options: ['npm start', 'next dev', 'next start', 'npm run dev'],
    correctOptionIndex: 3,
  },
  {
    questionType: 'nextjs',
    question: 'What is the purpose of the "_document.js" file in Next.js?',
    options: [
      'To define the layout and structure of the application',
      'To handle API requests',
      'To define the global styles',
      'To render the initial HTML document',
    ],
    correctOptionIndex: 3,
  },
  {
    questionType: 'nextjs',
    question: 'Which package is used for server-side routing in Next.js?',
    options: ['react-router-dom', 'next-router', 'next-link', 'react-link'],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nodejs',
    question: 'What is Node.js?',
    options: [
      'A front-end JavaScript library',
      'A back-end JavaScript runtime environment',
      'A CSS preprocessor',
      'A database management system',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nodejs',
    question: 'What is npm?',
    options: [
      'Node Package Manager',
      'Node Program Manager',
      'Node Project Manager',
      'Node Package Module',
    ],
    correctOptionIndex: 0,
  },
  {
    questionType: 'nodejs',
    question: 'Which method is used to include modules in Node.js?',
    options: ['require()', 'import', 'include()', 'importModule()'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'nodejs',
    question: 'What is the primary use of Node.js?',
    options: [
      'Creating and manipulating databases',
      'Handling client-side logic in the browser',
      'Building scalable network applications',
      'Creating user interfaces',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nodejs',
    question: 'What is the event-driven architecture in Node.js?',
    options: [
      'A pattern for handling synchronous operations',
      'A pattern for handling database queries',
      'A pattern for handling user interface events',
      'A pattern for handling asynchronous operations',
    ],
    correctOptionIndex: 3,
  },
  {
    questionType: 'nodejs',
    question:
      'Which global object provides information about the current process in Node.js?',
    options: ['process', 'global', 'node', 'window'],
    correctOptionIndex: 0,
  },
  {
    questionType: 'nodejs',
    question: 'What is the purpose of the `fs` module in Node.js?',
    options: [
      'To provide functionality for web servers',
      'To handle file system operations',
      'To manage the event loop',
      'To execute child processes',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nodejs',
    question: 'Which Node.js method is used to read environment variables?',
    options: [
      'process.getEnv()',
      'process.readEnv()',
      'process.env()',
      'process.readEnvironment()',
    ],
    correctOptionIndex: 2,
  },
  {
    questionType: 'nodejs',
    question: 'What is the purpose of the `http` module in Node.js?',
    options: [
      'To create and manage databases',
      'To handle HTTP requests and responses',
      'To manage file system operations',
      'To manage user authentication',
    ],
    correctOptionIndex: 1,
  },
  {
    questionType: 'nodejs',
    question: 'Which Node.js method is used to exit the current process?',
    options: [
      'process.exit()',
      'process.kill()',
      'process.end()',
      'process.terminate()',
    ],
    correctOptionIndex: 0,
  },
];
