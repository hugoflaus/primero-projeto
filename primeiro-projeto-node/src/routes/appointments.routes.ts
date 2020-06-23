import { Router } from 'express';
import { startOfHour, parseISO, parse, isEqual } from 'date-fns';
import Appointment from './models/Appointment';

const appointmentsRouter = Router();

const appoitments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppoitmentInSameDate = appoitments.find(appoitment =>
    isEqual(parsedDate, appoitment.date),
  );

  if (findAppoitmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appoitment = new Appointment(provider, parsedDate);

  appoitments.push(appoitment);

  return response.json(appoitment);
});

export default appointmentsRouter;
