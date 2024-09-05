import React, { useState, useEffect } from 'react';
import '../styles/BookingPage.css';

const BookingPage = ({ movie, onClose }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [reservedSeats, setReservedSeats] = useState([3, 5, 8]); // Example reserved seats
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [price, setPrice] = useState(15); // Example price per seat
    const [totalPrice, setTotalPrice] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    let timerInterval;

    useEffect(() => {
        if (selectedSeats.length > 0) {
            setSelectedSeat(selectedSeats[selectedSeats.length - 1]);
            setTotalPrice(price * selectedSeats.length);
            startCountdown();
        } else {
            setSelectedSeat(null);
            setTotalPrice(0);
            clearInterval(timerInterval);
        }
    }, [selectedSeats]);

    const handleDateChange = (event) => setSelectedDate(event.target.value);
    const handleTimeChange = (event) => setSelectedTime(event.target.value);

    const handleSeatSelect = (seat) => {
        if (reservedSeats.includes(seat)) return;
        setSelectedSeats((prevSelectedSeats) =>
            prevSelectedSeats.includes(seat)
                ? prevSelectedSeats.filter((s) => s !== seat)
                : [...prevSelectedSeats, seat]
        );
    };

    const startCountdown = () => {
        setTimeLeft(600);
        timerInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handlePurchase = () => {
        // Implement purchase logic here
        alert(`Purchased ${selectedSeats.length} seats for $${totalPrice}`);
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="booking-page">
            <div className="movie-info">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <button className="close-button" onClick={onClose}>Close</button>
                
                {selectedSeat && (
                    <div className="seat-info-card">
                        <h3>Selected Seats:</h3>
                        <div className="selected-seats">
                            {selectedSeats.map(seat => (
                                <p key={seat}>Seat {seat}: ${price}</p>
                            ))}
                        </div>
                        <button className="purchase-button" onClick={handlePurchase}>Purchase ${totalPrice}</button>
                        {/* <p className="total-price">Total: ${totalPrice}</p> */}
                        <span className="time-left">Time left: {formatTime(timeLeft)}</span>
                    </div>
                )}
            </div>
            <div className="booking-details">
                <div className="date-time">
                    <h3>Select Date:</h3>
                    <div className="available-days">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
                            <div
                                key={day}
                                className={`day ${selectedDate === day ? 'selected' : ''}`}
                                onClick={() => setSelectedDate(day)}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    <h3>Select Time:</h3>
                    <div className="available-times">
                        {["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"].map(time => (
                            <div
                                key={time}
                                className={`time ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="seats">
                    <h3>Select Seats:</h3>
                    <div className="seats-grid">
                        {Array.from({ length: 30 }, (_, i) => i + 1).map((seat) => (
                            <div
                                key={seat}
                                className={`seat ${reservedSeats.includes(seat) ? 'reserved' : selectedSeats.includes(seat) ? 'selected' : 'available'}`}
                                onClick={() => handleSeatSelect(seat)}
                            >
                                {seat}
                            </div>
                        ))}
                    </div>
                    <div className="seat-label">
                        <div className="label">
                            <div className="color-box" style={{ backgroundColor: '#fff', border: '2px solid #ddd' }}></div>
                            <span>Available</span>
                        </div>
                        <div className="label">
                            <div className="color-box" style={{ backgroundColor: '#ea5a1b' }}></div>
                            <span>Reserved</span>
                        </div>
                        <div className="label">
                            <div className="color-box" style={{ backgroundColor: '#34a853' }}></div>
                            <span>Selected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
