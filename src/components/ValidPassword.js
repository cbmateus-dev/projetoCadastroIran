const ValidPassword = (password) => {
  const re = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%"^&*]).{6,20}$/gm);
  const teste = (re.test(password));
  return teste;
};

export default ValidPassword;
