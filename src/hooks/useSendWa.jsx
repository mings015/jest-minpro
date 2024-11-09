import { useState } from "react";

const UseSendWa = () => {
  const whatsappNumber = "6281342400303";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  const linkMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.9547654072285!2d119.50619920795273!3d-5.1373485639023535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefcac8ff6d28f%3A0x71a75740f01747c0!2sJl.%20Kejayaan%20Utara%2012%20No.L.406%2C%20RT.001%2FRW.01%2C%20Tamalanrea%2C%20Kec.%20Tamalanrea%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan%2090245!5e0!3m2!1sid!2sid!4v1728922894842!5m2!1sid!2sid";

  return {
    formData,
    handleChange,
    handleSubmit,
    linkMap,
  };
};

export default UseSendWa;
