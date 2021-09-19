import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>Parking Lot System</h2>
        <p>Object Oriented Design (TypeSript)</p>
      </div>

      <details>
        <summary>Problem statement overview</summary>
        <p>
          In this exercise, we will design an in memory software for a parking
          system using object oriented programming.
        </p>
        <h4>Overview</h4>
        <ul>
          <li>
            A parking system consists of n floors, and each floor has m parking
            spots.
          </li>
          <li>
            To enter the premise, driver can press a button which issues a
            parking ticket. <br />
            NOTE: No spot is assigned at the time of issuing the ticket.
          </li>
          <li>
            To exit the premise, driver can enter his ticket and press a button
            to exit.
          </li>
        </ul>
        <h4>Features</h4>
        <ul>
          <li>
            At entrance, driver can see floor wise availability on signage
            board: <br />
            As an example:
          </li>
          <ul>
            <li>Floor 1 has 5 out of 30 available</li>
            <li>Floor 2 has 20 out of 50 available</li>
          </ul>
          <li>
            At the time of exit, driver can see parking charges associated with
            the ticket. (hint: calculation hourly basis)
          </li>
        </ul>
      </details>
      <hr />
      <h3> Solution </h3>
      <div>
        <p>
          All the entities can be found inside <code>src/models</code> directory
        </p>
        <p>
          unit tests cases can be found inside <code>src/models/__test__</code>{" "}
          directory
        </p>
      </div>
    </div>
  );
}
