import ListGroup from "./components/ListGroup";
import Button from "./components/Button"
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let items = ["Nigeria", "Ampiano", "Ghana", "South Africa"];

  const handleClick = (item: string) => {
    console.log(item);
  };

  const [visible, setVisible] = useState(false); 
  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Cities"
        onSelecItem={handleClick}
      />{" "}

      {  visible && <Alert onClick={() => { setVisible(false) }}> My Alert</Alert>}

      <Button color="danger" onClick={ () => { setVisible(true);  items.map(item => { console.log(item)})  }}>
        My Button
      </Button>


    </div>
  );
}

export default App;
