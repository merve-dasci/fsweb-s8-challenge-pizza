import { useState } from "react"
import axios from "axios"
import "./OrderForm.css";
axios.defaults.headers.common["x-api-key"] = "reqres-free-v1";


import { Form, FormGroup, Input, Label, Button, Container, Card, CardBody, CardTitle } from "reactstrap";
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
export default function OrderForm({ onOrderSaved }) {
  const history = useHistory();
  const [form, setForm] = useState({
    isim: "",
    size: "",
    hamur: "",
    ozel: "",
    toppings: [],
  });

  const [adet, setAdet] = useState(1);
  const tabanFiyat = 85.5;
  const malzemeFiyat = 5;
  const secilenlerTutar = form.toppings.length * malzemeFiyat;
  const toplamTutar = (tabanFiyat + secilenlerTutar) * adet;

  const azalt = () => setAdet((tane) => Math.max(1, tane - 1));
  const arttir = () => setAdet((tane) => tane + 1);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm(function (previousForm) {
      const newForm = { ...previousForm };
      newForm[name] = value;
      return newForm;
    });
  }

  function handleToppingChange(event) {
    const value = event.target.value;

    setForm(function (previousForm) {
      const currentToppings = previousForm.toppings;
      const alreadySelected = currentToppings.includes(value);
      if (alreadySelected) {
        const newToppings = currentToppings.filter(
          (toppingName) => toppingName !== value
        );
        return { ...previousForm, toppings: newToppings };
      }
      if (currentToppings.length >= 10) {
        return previousForm;
      }
      const newToppings = [...currentToppings, value];
      return { ...previousForm, toppings: newToppings };
    });
  }

  const isNameValid = form.isim.trim().length >= 3;
  const isSizeValid = form.size !== "";
  const isToppingsValid =
    form.toppings.length >= 4 && form.toppings.length <= 10;
  const isFormValid = isNameValid && isSizeValid && isToppingsValid;

  
function handleSubmit(event) {
    event.preventDefault()
    if(!isFormValid) return;
     const payload = {
        isim: form.isim.trim(),
        boyut: form.size,
        hamur: form.hamur,
        malzemeler: form.toppings,
        ozel: form.ozel.trim(),
        adet,
        toplam: toplamTutar.toFixed(2)
     }
     
     axios
       .post("https://reqres.in/api/users", payload,{
       headers: { "x-api-key": "reqres-free-v1" }
       })
       .then((response) => {
        console.log("POST response:", response.data); 
        onOrderSaved?.(response.data);
        history.push("/success", response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
        alert("Sipariş gönderilemedi. Konsolu kontrol edin.");
      });
}


  

  const reachedMax = form.toppings.length >= 10;

  return (
    <section id="order">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>85.50₺</span>
          <span>4.9</span>
          <span>(200)</span>
        </div>
        <p>
          Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarklak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşlan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </p>
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
            <Label for="hamurSelect">Hamur Seç</Label>
            <Input
              id="hamurSelect"
              name="hamur"
              type="select"
              value={form.hamur}
              onChange={handleChange}
            >
              <option value="">Hamur Kalınlığı</option>
              {hamurType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} Kenar
                </option>
              ))}
            </Input>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Ek Malzemeler </legend>
            <p>En fazla 10 malzeme seçebilirsiniz.(5₺)</p>
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
                      disabled={!form.toppings.includes(topping) && reachedMax}
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
          <div
            className="order-footer"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "20px",
            }}
          >
            <FormGroup
              className="sayac-box"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Label className="sayaclar">Adet</Label>
              <div
                className="sayac"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Button
                  type="button"
                  style={{
                    backgroundColor: "#FDC913",
                    borderColor: "#FDC913",
                    color: "black",
                    width: 40,
                    height: 40,
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={azalt}
                >
                  -
                </Button>
                <Input
                  style={{
                    height: 40,
                    width: 50,
                    textAlign: "center",
                    boxSizing: "border-box",
                    MozAppearance: "textfield",
                    padding: "8px 12px",
                  }}
                  type="number"
                  value={adet}
                  readOnly
                />
                <Button
                  type="button"
                  style={{
                    backgroundColor: "#FDC913",
                    borderColor: "#FDC913",
                    color: "black",
                  }}
                  onClick={arttir}
                >
                  +
                </Button>
              </div>
            </FormGroup>
            <Card className="total-card" style={{ minWidth: 240, flex: 1 }}>
              <CardBody>
                <CardTitle tag="h6" className="total-price">
                  Sipariş Toplamı
                </CardTitle>
                <div
                  className="total-amount"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>Seçimler</span>
                  <span>{secilenlerTutar.toFixed(2)}₺</span>
                </div>
                <div
                  className="total-amount"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Toplam</div>
                  <strong>{toplamTutar.toFixed(2)}₺</strong>
                </div>
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  style={{
                    backgroundColor: "#FDC913",
                    marginTop: 10,
                    width: "100%",
                  }}
                >
                  Sipariş Ver
                </Button>
              </CardBody>
            </Card>
          </div>
        </Form>
      </Container>
    </section>
  );
}