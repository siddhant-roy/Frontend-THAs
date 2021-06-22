let bookedSeatsElement = document.querySelector(`.booking_seats`);
let remainingSeatsElement = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.seats`);
let bookedSeats = 0;
let remainingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = remainingSeats;

seats.forEach((seat) => {
  seat.addEventListener(`click`, () => {
    seat.classList.toggle(`booked`);
    seat.classList.contains(`booked`) ? unBookSeats(1) : unBookSeats(-1);
  });
});

const unBookSeats = (s) => {
  bookedSeats += 1 * s;
  remainingSeats -= 1 * s;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = reaminingSeats;
};
