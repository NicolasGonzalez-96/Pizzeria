const NotAPizza = ({wrongPizzaName}) => {
    return (
      <div className="baseCenter">
        <h1>Eh?</h1>
        <h4>Lo sentimos, no tenemos ninguna pizza llamada "{wrongPizzaName}".</h4>
      </div>
    );
  };
  export default NotAPizza;