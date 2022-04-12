class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }

  greetPatron(name, morning = false) {
    if (morning === false) {
      return 'Hello, ' + name + '!'
    } else {
      return 'Good morning, ' + name + '!'
    }
  }

  findBook(bookTitle) {
    const bookGenres = Object.keys(this.library.shelves)

    bookGenres.forEach(shelf => {
      this.library.shelves[shelf].forEach(book => {
        if (book.title === bookTitle) {
          return 'Yes, we have ' + bookTitle
        }
      })
    })
    return 'Sorry, we do not have ' + bookTitle
  }
}

module.exports = Librarian;
//
// export const TaskType = {
//   NewMessage: 'NEW_MESSAGE',
//   MedRequest: 'MED_REQUEST',
//   ExtractMedRecord: 'EXTRACT_MED_RECORD'
// }
//
// export const InsuranceType = {
//   Commercial: 'COMMERCIAL',
//   Medicare: 'MEDICARE',
//   Medicaid: 'MEDICAID',
//   SelfPay: 'SELF_PAY'
// }
//
// export const Licenses = {
//   Tennessee: 'TENNESSEE',
//   Oregon: 'Orgon',
//   NewYork: "NEW YORK"
// }
//
// // take in a list of tasks and assign them to an appropriate owner
// // assign means setting task.ownerId to a provider's ID
// export const assignTasks = (tasks, providers, patients) => {
//   const unassignedTasks = tasks.filter(task => task.ownerId === null)
//
//   unassignedTasks.forEach(task => {
//     const patient = patients.find(patient => patient.id == task.patientId);
//
//     // need to assign to medicaid enabled provider
//     if (patient.insuranceType === InsuranceType.Medicaid) {
//       // const medicaidProvider = providers.find(provider => provider.medicaidEnabled);
//       const medicaidProvider = licensedProviders(task, providers, patients).find(provider => provider.medicaidEnabled);
//       task.ownerId = medicaidProvider.id;
//     } else {
//       task.ownerId = providers[0].id;
//     }
//   })
//
//   return tasks;
// }
//
// const providersAreLicensed = () => {
//   const tasks = [{
//     patientId: 'patient_1',
//     type: TaskType.NewMessage,
//     ownerId: null,
//   }]
//
//   const patients = [{
//     id: 'patient_1',
//     insuranceType: InsuranceType.Medicare,
//     state: 'Tennessee'
//   }]
//
//   const providers = [{
//     id: 'provider_3',
//     medicaidEnabled: false,
//     medicareEnabled: false,
//     licenses: ['Tennessee', 'Oregon']
//   }]
//
//   license = licensedProviders(task, providers, patients)[0].state
//
//   expectAreEqual(license, 'Tennessee', 'providers are licensed for the patient\'s state')
// }
//
// const expectAreEqual = (actual, expected, testName) => {
//   if (actual === expected) {
//     console.log(`✅ test "${testName}" passed`)
// 	@@ -64,3 +89,4 @@ const expectAreEqual = (actual, expected, testName) => {
// © 2022 GitHub, Inc.
// Terms
// Privacy
