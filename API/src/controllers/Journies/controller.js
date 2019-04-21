import Journies from '../../models/Journies';
import { SEND } from '../response';

export const fetchAll = (req, res, next) => {
  Journies.find({})
    .populate('bus')
    .exec((err, journies) => {
      if (err) {
        SEND(res, true, { message: err });
      } else {
        SEND(res, false, { journies });
      }
    });
};
