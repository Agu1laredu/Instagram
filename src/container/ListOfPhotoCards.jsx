import { withPhotos } from '../hoc/withPhotos.jsx';
import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards/index.jsx';

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
