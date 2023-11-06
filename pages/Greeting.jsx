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

export { Greeting, MyFavFood, OdinTestList };