const Form = (props) => {
  return (
    <div className="body">
      <h1>Création de compte</h1>
      <h2>Nom</h2>

      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Jean Dupont"
          value={props.name}
          onChange={(event) => {
            props.setName(event.target.value);
          }}
        />

        <h2>Adresse mail</h2>
        <input
          type="email"
          name="email"
          placeholder="jeandupont@lereacteur.io"
          value={props.email}
          onChange={(event) => {
            props.setEmail(event.target.value);
          }}
        />
        <h2>Mot de passe</h2>
        <input
          type="text"
          name="password"
          placeholder="LeReacteur2022"
          value={props.password}
          onChange={(event) => {
            props.setPassword(event.target.value);
          }}
        />
        <h2>Confirmer votre mot de passe</h2>
        <input
          type="text"
          name="confirmpassword"
          placeholder="LeReacteur2022"
          value={props.confirmpassword}
          onChange={(event) => {
            props.setConfirmPassword(event.target.value);
          }}
        />

        <div className="register">
          <input type="submit" placeholder="S'enregistrer" />
        </div>
      </form>
    </div>
  );
};

export default Form;
