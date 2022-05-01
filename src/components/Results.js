const Results = (props) => {
  return (
    <div className="results">
      <h1>Resultats</h1>

      <div className="informations">
        <p>
          <span>Name :</span> {props.name}
        </p>
        <p>
          <span>Email :</span> {props.email}
        </p>
        <p>
          <span>Password :</span> {props.password}
        </p>
      </div>

      <button
        onClick={() => {
          props.setValid(false);
        }}
      >
        Retour à la création du compte
      </button>
    </div>
  );
};

export default Results;
