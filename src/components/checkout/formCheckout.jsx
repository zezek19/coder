import "./checkout.css";

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <div className="data">
        <label>Nombre completo</label>
        <input
          type="text"
          name="fullname"
          value={dataForm.fullname}
          onChange={handleChangeInput}
        />
      </div>

      <div className="data">
        <label>Telefono</label>
        <input
          type="number"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
        />
      </div>

      <div className="data">
        <label>Ingresar Email</label>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="data">
        <label>Confirmar Email</label>
        <input
          type="email"
          name="emailConfirmation"
          value={dataForm.emailConfirmation}
          onChange={handleChangeInput}
        />
      </div>

      <button className="send-order" type="submit">
        Enviar mi orden
      </button>
    </form>
  );
};
export default FormCheckout;
