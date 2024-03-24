
import './Community.css';
import React ,{ useState} from 'react';
export default function Community() {
    const [expandedFAQs, setExpandedFAQs] = useState([]);

    
    const faqs = [
      {
        question: 'How do I donate?',
        answer: 'You can donate online or by calling our Donor Services team .You can also donate by mail by sending our mail .',
      },
      {
        question: 'Is my online donation secure?',
        answer: 'DoNate uses third-party services to ensure that your donation and information are secure. You can read more in our Privacy Policy about the information received from you. Also, we are a PCI-compliant organization..',
      },
      {
          question: 'Will I get a receipt for my donation?',
          answer: ' If you make an online gift using DoNate website, we will automatically send a receipt to the email you used to make your donation.',
      },
      {
          question: 'Will my Donation used wisely?',
          answer: 'DoNate was recognized for its commitment to transparency, accountability, and financial responsibility by Charity Navigator, GuideStar, and Forbes..',
      },
      {
          question: 'How do I change my address information?',
          answer: 'You can call our Donor Services team  to update your payment information, gift amount, or contact information. You can also use the Account Center to update your contact information. We do not recommend you send changes or updates to your credit card by postal mail for security reasons.',
      },
      {
          question: 'Can I save my favorite locations for quick access to their information?',
          answer: 'Yes, you can save and organize your favorite locations in the app for easy access to their weather forecasts.',
      },
      {
          question: 'Who support DoNate?',
          answer: 'The DoNate network relies on Individual, Corporate and Foundation support to fund our hunger-relief efforts nationwide..',
      },
      
    ];
  
    
    const toggleFAQ = (index) => {
      if (expandedFAQs.includes(index)) {
        setExpandedFAQs(expandedFAQs.filter((item) => item !== index));
      } else {
        setExpandedFAQs([...expandedFAQs, index]);
      }
    };
    return (
      <div className='ran'>
      <div className='rectangle88'>
    <div className='ind'>
        
      <div className="faq-container">
     
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${expandedFAQs.includes(index) ? 'expanded' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              {expandedFAQs.includes(index) && <div className="faq-answer">{faq.answer}</div>}
            </div>
          
          ))}
        </div>
      </div>
      </div>
      </div>
      </div>
      
    )
}
