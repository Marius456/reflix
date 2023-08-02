import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {ILibrary} from '../interfaces/ILibrary';
import {Alert} from 'react-native';

export async function addNewDocument(title: String) {
  try {
    firestore()
      .collection('library')
      .doc(auth().currentUser?.uid + title.toLowerCase().replaceAll(' ', ''))
      .set({
        userID: auth().currentUser?.uid,
        movieTitle: title,
      })
      .then(() => {
        Alert.alert(`Added ${title} to your library.`);
      });
  } catch (error) {
    console.log(title.toLowerCase().replaceAll(' ', ''));
    console.log(error);
    Alert.alert(`Got error while trying to save movie to library: ${error}`);
  }
}

export async function removeDocument(title: String) {
  try {
    firestore()
      .collection('library')
      .doc(auth().currentUser?.uid + title.toLowerCase().replaceAll(' ', ''))
      .delete()
      .then(() => {
        Alert.alert(`Removed ${title} from your library.`);
      });
  } catch (error) {
    Alert.alert(
      `Got error while trying to remove movie from library: ${error}`,
    );
  }
}

export async function queryForDocuments() {
  const querySnapshot = await firestore()
    .collection('library')
    .where('userID', '==', auth().currentUser?.uid)
    .get();

  let movies: ILibrary[] = [];

  querySnapshot.forEach(snap => {
    movies.push(JSON.parse(JSON.stringify(snap.data())));
  });
  return movies;
}

export async function isDocExist(title: string) {
  const isExists = await firestore()
    .collection('library')
    .doc(auth().currentUser?.uid + title.toLowerCase().replaceAll(' ', ''))
    .get()
    .then(doc => {
      return doc.exists;
    });
  return isExists;
}
