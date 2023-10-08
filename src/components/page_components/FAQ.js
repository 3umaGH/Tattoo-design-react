import Faq from "react-faq-component";

import "./FAQ.css";
import "../../variables.css";

const data = {
  rows: [
    {
      title: "How do i book an appointment?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, optio. Doloremque molestiae incidunt, quia a cum debitis inventore eos quam voluptatem quis exercitationem quaerat quas alias, pariatur ipsum voluptate perspiciatis!Sint blanditiis veniam corporis. Laboriosam quis voluptatibus veniam modi quas sed maxime ratione quasi inventore deleniti harum ipsam asperiores, voluptas neque sit obcaecati ab quisquam laudantium, sunt doloremque expedita esse. Iure exercitationem dolorum quas assumenda quam corporis cupiditate facilis temporibus itaque. Voluptas assumenda dolorum, laboriosam tempora vitae qui dignissimos tenetur expedita quibusdam non? Vero beatae molestias, officiis fugiat praesentium cum?",
    },
    {
      title: "Does it hurt?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, optio. Doloremque molestiae incidunt, quia a cum debitis inventore eos quam voluptatem quis exercitationem quaerat quas alias, pariatur ipsum voluptate perspiciatis!Sint blanditiis veniam corporis. Laboriosam quis voluptatibus veniam modi quas sed maxime ratione quasi inventore deleniti harum ipsam asperiores, voluptas neque sit obcaecati ab quisquam laudantium, sunt doloremque expedita esse. Iure exercitationem dolorum quas assumenda quam corporis cupiditate facilis temporibus itaque. Voluptas assumenda dolorum, laboriosam tempora vitae qui dignissimos tenetur expedita quibusdam non? Vero beatae molestias, officiis fugiat praesentium cum?",
    },
    {
      title: "How old do i have to be to get a tattoo?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, optio. Doloremque molestiae incidunt, quia a cum debitis inventore eos quam voluptatem quis exercitationem quaerat quas alias, pariatur ipsum voluptate perspiciatis!Sint blanditiis veniam corporis. Laboriosam quis voluptatibus veniam modi quas sed maxime ratione quasi inventore deleniti harum ipsam asperiores, voluptas neque sit obcaecati ab quisquam laudantium, sunt doloremque expedita esse. Iure exercitationem dolorum quas assumenda quam corporis cupiditate facilis temporibus itaque. Voluptas assumenda dolorum, laboriosam tempora vitae qui dignissimos tenetur expedita quibusdam non? Vero beatae molestias, officiis fugiat praesentium cum?",
    },
  ],
};

const styles = {
  bgColor: "#131315",
  rowTitleColor: "#ffffff",
  rowTitleTextSize: "26px",
  rowContentColor: "#C6CACE",

  rowContentTextSize: "17px",
  transitionDuration: "0.1s",
  // timingFunc: "ease"
};

const config = {
  // animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  // tabFocus: true
};

const FAQ = () => {
  return (
    <div className="FAQWrapper">
      <h1 className="FAQTitle">FAQ</h1>

      <div className="FAQComponent">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default FAQ;
