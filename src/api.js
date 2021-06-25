// Для записи данных в Firebase используем метод firebase.database().ref().push().
// Пример кода:
// async newClient(newClinet) {
//    try {
//        const addClient = await firebase.database().ref('clients').push(newClinet)
//        console.log(addClient)
//    } catch (error) {
//        console.log(error.message)
//        throw error
//    }
// }

// Для получения данных из Firebase используем метод firebase.database().ref().once().
// Пример кода:
// async loadClietsList() {
//    try {
//        const query_clientsList = await firebase.database().ref('clients').once('value')
//        const clientsList = query_clientsList.val()
//        console.log(clientsListArray)
//    } catch (error) {
//        console.log(error.message)
//        throw error
//    }
// }

// Данный метод отвечает за удаление данных из нужного объекта.
// Пример кода:
// firebase.database().ref('clients').remove()
