import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ngo.css';

function Ngo() {
  const [foodDetails, setFoodDetails] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [emailLink, setEmailLink] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.auth}`;
    axios
      .get('http://localhost:8080/fooddetails/getfooddetails')
      .then((response) => {
        setFoodDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food details:', error);
      });
  }, []);

  const handleRequestFood = (foodId) => {
    const selected = foodDetails.find((food) => food.id === foodId);
    setSelectedFood(selected);

    
    const subject = 'Food Donation Request';
    const body = `I am interested in your food donation offer:\n\nFood Type: ${selected.foodType}\nQuantity: ${selected.quantity} kg\nPreferred Pickup Time: ${selected.pickupTime}\nAddress: ${selected.address}\n\nPlease reply to discuss further details.`;
    setEmailLink(`mailto:${selected.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleReportUser = (adminEmail, foodType, userEmail) => {
    const subject = 'Report for Food Donation';
    const body = `User ${userEmail} has been reported for the following food donation:\n\nFood Type: ${foodType}`;
    const reportEmail = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = reportEmail; 
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodDetails.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(foodDetails.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bol">
      <div className="food-details-list-container">
        <div className="food">
          <h1>FOOD DONATION DETAILS</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Food Type</th>
              <th>Quantity (kg)</th>
              <th>Preferred Pickup Time</th>
              <th>Address</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((food, index) => (
              <tr key={index}>
                <td>{food.foodType}</td>
                <td>{food.quantity}</td>
                <td>{food.pickupTime}</td>
                <td>{food.address}</td>
                <td>
                  <div className="request">
                    <button
                      onClick={() => handleRequestFood(food.id)}
                      className={selectedFood ? '' : 'active'}
                    >
                      Request Food
                    </button>
                  </div>
                </td>
                <td>
                
                  <div className="request">
                    <button
                      onClick={() => handleReportUser('indhusaru19@gmail.com', food.foodType, food.email)}
                      className={selectedFood ? '' : 'active'}
                    >
                      Report
                    </button>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </span>
          ))}
        </div>
      </div>

      {selectedFood && (
        <div className="food-details-popup active">
          <h2>Food Details</h2>
          <p>Food Type: {selectedFood.foodType}</p>
          <p>Quantity (kg): {selectedFood.quantity}</p>
          <p>Mobile No: {selectedFood.mobileNo}</p>
          <p>Preferred Pickup Time: {selectedFood.pickupTime}</p>
          <p>Address: {selectedFood.address}</p>
          <p>Email: <a href={emailLink}>{selectedFood.email}</a></p>
          <p>BestContactTime: {selectedFood.bestContactTime}</p>
          <p>NearestLandmark: {selectedFood.nearestLandmark}</p>
          <p>PreferredContactMethod: {selectedFood.preferredContactMethod}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Ngo;
