import React from "react";
import { FAQTableContainer } from "./style";

const FAQTable = () => {
  const data = [
    {
      title: "SELLER",
      faqs: [
        {
          question: "How do i become a seller",
          answer:
            "Simply click on the register link and register with us. After registration you automatically get a store created for you.",
        },
        {
          question: "How do i Upload my Products",
          answer:
            "Login to your dashboard and simply go to the products page. Click the add product button and fill the next form accordingly.",
        },
      ],
    },
    {
      title: "BUYERS",
      faqs: [
        {
          question: "How do i get a product i like.",
          answer:
            "Simply click on the product to view it. Once you're taken to the product page, you see the store contact detail at the top of the page. Alternatively, just click on the view store direct to see view the store and ultimately get the store contact detail.",
        },
        {
          question: "How do i make payment",
          answer:
            "Payment and every other seller-buyer interaction has been taken away from the platform. But you can get a seller contact detail from viewing their store, thereby having more control on how your goods are delivered.",
        },
      ],
    },
  ];
  return (
    <FAQTableContainer>
      {data.map(({ title, faqs }, i) => {
        return (
          <tbody key={i}>
            <tr>
              <td rowSpan={faqs.length} className="__table-header">
                {title}
              </td>
              <td className="__table-question">{faqs[0].question}</td>
              <td className="__table-answer">{faqs[0].answer}</td>
            </tr>
            {faqs.length > 1 &&
              faqs.map(({ question, answer }, i) =>
                i > 0 ? (
                  <tr key={i}>
                    <td className="__table-question">{question}</td>
                    <td className="__table-answer">{answer}</td>
                  </tr>
                ) : null
              )}
          </tbody>
        );
      })}
    </FAQTableContainer>
  );
};

export default FAQTable;
