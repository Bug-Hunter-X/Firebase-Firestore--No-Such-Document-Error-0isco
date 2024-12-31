const db = getFirestore();

const docRef = doc(db, "collection", "documentId");

try {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // If the document doesn't exist, it's likely because the docRef is incorrect.
    // Check the collection name, document ID, and Firestore instance.
    console.error("No such document!");
  }
} catch (error) {
  console.error("Error getting document:", error);
  // Handle errors appropriately. Some potential causes are network issues, invalid docRef, and permission problems.
}