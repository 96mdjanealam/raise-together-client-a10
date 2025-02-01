const FAQSection = () => {
  const faqs = [
    {
      question: "What is the purpose of this donation website?",
      answer:
        "This website aims to connect donors with communities in need, ensuring your contributions directly impact those who require help.",
    },
    {
      question: "How can I make a donation?",
      answer:
        "You can donate by clicking on the 'Donate Now' button, selecting a cause, and completing the payment process through our secure portal.",
    },
    {
      question: "Are donations tax-deductible?",
      answer:
        "Yes, all donations are tax-deductible. After completing your donation, you will receive a receipt via email for tax purposes.",
    },
    {
      question: "Can I choose where my donation goes?",
      answer:
        "Absolutely! You can select specific causes or campaigns during the donation process to ensure your funds go where you want.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use advanced encryption and secure payment gateways to protect your personal and financial information.",
    },
    {
      question: "Can I get updates on how my donation is used?",
      answer:
        "Yes, we provide regular updates and reports on how donations are allocated and the impact they have made.",
    },
  ];

  return (
    <div className="bg-green-200">
      <div className="max-w-4xl mx-auto px-4 py-20 ">
        <h2 className="text-3xl  text-center mb-10 text-green-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-green-300 bg-green-100 rounded-box"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg text-gray-700 font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
