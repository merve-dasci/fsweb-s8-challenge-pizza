import { useState } from "react"
import axios from "axios"
import "./OrderForm.css";

import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

const Toppings = [
   "Pepperoni",
   "Tavuk Izgara",
   "Mısır",
   "Sarımsak",
   "Ananas",
   "Sosis",
   "Soğan",
   "Sucuk",
   "Biber",
   "Kabak",
   "Kanada Jambonu",
   "Domates",
   "Jalepeno",
   "Salam",
]

const sizes = [
  { value: "Küçük", label: "Küçük" },
  { value: "Orta", label: "Orta" },
  { value: "Büyük", label: "Büyük" },
];
const hamurType = [
    {value: "Kalın", label: "Kalın"},
    {value: "İnce", label: "İnce"},
]
export default function OrderForm() {
    const history = useHistory()
    const [form, setForm] = useState({
        isim:"",
        size: "",
        hamur: "",
        ozel: "",
        toppings: [],
    })
    
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value;

        setForm(function(previousForm) {
            const newForm = {...previousForm}
            newForm[name] = value
            return newForm
        })

    }
    
    function handleToppingChange(event) {
        
        const value = event.target.value

        
    setForm(function (previousForm) {
      const currentToppings = previousForm.toppings;
      const alreadySelected = currentToppings.includes(value); 
      if(alreadySelected) {
        const newToppings = currentToppings.filter((toppingName) => toppingName !== value)
        return {...previousForm, toppings: newToppings}
      } 
      if (currentToppings.length >= 10) {
        return previousForm
      }
const newToppings = [...currentToppings, value]
return {...previousForm, toppings: newToppings}
    } )
}

const isNameValid = form.isim.trim().length >= 3
const isSizeValid = form.size !== ""
const isToppingsValid = form.toppings.length >= 4 && form.toppings.length <=10
const isFormValid = isNameValid && isSizeValid && isToppingsValid;

function handleSubmit(event) {
    event.preventDefault()
    if(!isFormValid) return;
     const payload = {
        isim: form.isim.trim(),
        boyut: form.size,
        malzemeler: form.toppings,
        ozel: form.ozel.trim(),
     }
     axios.post("https://reqres.in/api/pizza", payload).then((response) => {
        history.push("/success", response.data)
     })
     .catch((error) => console.error("Hata:", error))
}
const reachedMax = form.toppings.length >= 10


    return (
      <section id="order">
        <Container>
          <h2>Posution Absolute Acı Pizza</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup tag="fieldset">
              <legend>Boyut Seç</legend>

              {sizes.map((sizeOption, index) => (
                <FormGroup check key={sizeOption.value}>
                  <Label check htmlFor={`size-${index}`}>
                    <Input
                      id={`size-${index}`}
                      type="radio"
                      name="size"
                      value={sizeOption.value}
                      checked={form.size === sizeOption.value}
                      onChange={handleChange}
                    />{" "}
                    {sizeOption.label}
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>
            <FormGroup>
              <Label for="hamurSelect">Hamur Kalınlığı</Label>
              <Input
                id="hamurSelect"
                name="hamur"
                type="select"
                value={form.hamur}
                onChange={handleChange}
              >
                <option value="">Hamur Seç</option>
                {hamurType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} Kenar
                  </option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>Ek Malzemeler </legend>
              <div className="toppings-grid">
                {Toppings.map((topping, index) => (
                  <FormGroup
                    check
                    key={`${topping}-${index}`}
                    className={
                      !form.toppings.includes(topping) && reachedMax
                        ? "disabled"
                        : ""
                    }
                  >
                    <Label check>
                      <Input
                        type="checkbox"
                        name="toppings"
                        value={topping}
                        checked={form.toppings.includes(topping)}
                        onChange={handleToppingChange}
                        disabled={
                          !form.toppings.includes(topping) && reachedMax
                        }
                      />{" "}
                      {topping}
                    </Label>
                  </FormGroup>
                ))}
              </div>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="isim">İsim</Label>
              <Input
                id="isim"
                name="isim"
                type="text"
                value={form.isim}
                onChange={handleChange}
                placeholder="Adınızı yazınız"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="ozel">Sipariş Notu</Label>
              <Input
                id="ozel"
                name="ozel"
                type="textarea"
                value={form.ozel}
                onChange={handleChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />{" "}
            </FormGroup>

            <Button type="submit" disabled={!isFormValid}>
              SİPARİŞ VER
            </Button>
          </Form>
        </Container>
      </section>
    );
}