import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {defineNuxtPlugin} from '#app'
import {getFirestore} from "@firebase/firestore";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
        apiKey: config.firebaseApiKey,
        authDomain: config.firebaseAuthDomain,
        databaseURL: config.firebaseDatabaseURL,
        projectId: config.firebaseProjectId,
        storageBucket: config.firebaseStorageBucket,
    }
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = getFirestore(app);
    return {
        provide: {
            firebaseApp: app,
            firebaseAuth: auth,
            firebaseDb: db
        },
    }
})
