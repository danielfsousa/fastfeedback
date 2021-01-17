import db from '#lib/firebase-admin'

export default async function handler(req, res) {
  const snapshot = await db.collection('sites').get()
  const sites = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  res.status(200).json(sites)
}
