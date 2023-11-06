import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Greeting, MyFavFood, OdinTestList} from './Greeting';
import React from 'react' /* Need this import to add reacts */
import ReactDOM from 'react-dom/client'

/* Basic function to trun a single li of a animal */
function ListItem(props){
  return <li>{props.animal}</li>
}

/* A nested function of a list
Return 1: a ul list of animal
Return 2: A for each element of animal, return a listItem function with animal key and animal name */
function List(props){
  return (
    <ul>
      {props.animals.map((animal) => { return animal.startsWith("L") ? <ListItem key={animal} animal={animal}/> : null; 
      //The variable passed to component (animal =) has to be the identical name to the declared name in the component above Listitem
      //CONDITIONALS: User ternary operator to either display li or not depending on string start letter
      })}
    </ul>
  );
}


export default function Home() {
  const animals = ["Lion", "Cow", "Snake", "Lizard","Wolf"];
/*   const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>) */
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        
        <div>
        <h2>Animal Array List</h2>
        <List animals={animals}/>  
        </div>
        <React.StrictMode>
          </React.StrictMode>


      </main>

      <footer>
     
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
