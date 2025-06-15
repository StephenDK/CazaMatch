export function convertToSerializedObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}

// export function convertToSerializedObject(leanDocument) {
//   // Return null or an empty object if leanDocument is null or undefined
//   if (!leanDocument || typeof leanDocument !== "object") {
//     return null; // or return {} if you prefer an empty object
//   }

//   for (const key of Object.keys(leanDocument)) {
//     if (
//       leanDocument[key] &&
//       leanDocument[key].toJSON &&
//       leanDocument[key].toString
//     ) {
//       leanDocument[key] = leanDocument[key].toString();
//     }
//   }
//   return leanDocument;
// }
