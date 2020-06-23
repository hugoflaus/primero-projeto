import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, parse, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}

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

  const appoitment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appoitments.push(appoitment);

  return response.json(appoitment);
});

export default appointmentsRouter;
