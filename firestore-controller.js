const db = firebase.firestore();

const contactForm = document.querySelector(".formulario");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = contactForm["user-name"].value;
  const phone = contactForm["user-phone"].value;
  const mail = contactForm["user-mail"].value;
  const message = contactForm["user-message"].value;
  var today = new Date();
  var now = today.toLocaleString();

  if (name != "" && phone != "" && mail != "" && message != "") {
    await db
      .collection("clientes")
      .doc()
      .set({ name, phone, mail, message, now });
    contactForm.reset();
  } else {
    alert("No se pueden enviar los datos si algun campo esta vacío");
  }
});
