function setLowerCaseEmail(formData: HTMLFormElement) {
  const emailInput = formData.get('email') as string;
  const emailToLowerCase = emailInput.toLowerCase();

  return formData.set('email', emailToLowerCase);
}

function formatUserDataFrom(form: HTMLFormElement) {
  const formData = new FormData(form) as unknown as HTMLFormElement;

  setLowerCaseEmail(formData);

  return Object.fromEntries(formData.entries());
}

export default formatUserDataFrom;
