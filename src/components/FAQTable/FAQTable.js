import React from "react";
import { FAQTableContainer } from "./style";

const FAQTable = () => {
  const data = [
    {
      title: "SHIPPING",
      faqs: [
        {
          question: "What Shipping Methods Are Available",
          answer:
            "All you gotta do is pay the  cash and your good will be delivered to you just in time",
        },
        {
          question: "How do i get My Good",
          answer:
            "All you gotta do is pay the  cash and your good will be delivered to you just in time",
        },
      ],
    },
    {
      title: "PAYMENT",
      faqs: [
        {
          question: "What Payent Methods Are Available",
          answer:
            "All you gotta do is pay the  cash and your good will be delivered to you just in time",
        },
        {
          question: "How do i get My Paymetn",
          answer:
            "All you gotta do is pay the  cash and your good will be delivered to you just in time",
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
