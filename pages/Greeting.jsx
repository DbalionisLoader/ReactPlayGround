import '../styles/Home.module.css';
import styles from '../styles/Home.module.css';

function Greeting(){
    return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

function MyFavFood() {
    let food = "Cherry";
    return <p>My favourite food is: {food}</p>;
}

function OdinTestList(){
    return (
    <>
    <h1>Test Title</h1>
    <ol className="test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 2</li>
    </ol>
    <svg> <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
    </svg>
    <form><input type="text"/></form>
    </>
    );
}

/* Card function with children and title props */
function Card({ children, title="default title" }) {
    return (
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    );
  }


export { Greeting, MyFavFood, OdinTestList, Card };