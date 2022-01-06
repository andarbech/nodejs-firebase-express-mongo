// Import the functions you need from the SDKs you need
const admin = require('firebase-admin');
const config = require('../config/config')
// Need finish analytics 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  "type": "service_account",
  "project_id": "chaniteo",
  "private_key_id": "9b513a144cbfc21387b74e5ee42b5af3e9115525",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnu7YBIROXTXGV\nz4NIkKnS/ypeAHSheb8fMksMLRUPFFLB6sDTiIC3o7PKXbXTDTgcdrclQJaggX2S\n4b0dKuuDdf4U18EzUg9g6/ppOhII/xTqye6vhrh7PSI80Vk4q3BXhVZ9pjT+XraU\neMRX7caJXL7pEoW5j49p7AmF8slZuRBbJsB5VUiGLNURb7ILbh07SyEowQcLoCJX\nbPYFEUeAIMR1gP3TJaL1eI//rbHMScC7qkpqTVaEwxMKtsApy6R/fy6x0CLxTh91\nNS4vGcrjAgmTy5sX2Rz9tN48nrLh/ENG/fDR2hSODgN/fjH1ruQvEV0+zte6q1Im\nQovaz+j9AgMBAAECggEAJ+xFC/xCNDlN3306j3dFQJAU1rZvjC6U57k6BR4m3MW2\n0+qK9l5PWsZHSROobyE+mYHFIkP/BhmEGMWLlGlukIXxUacv2EYAHI7WNZ0JhWQn\nZ6HkIpmjh8u7fjPK83LUxLQbK8F3bBMBjJG5E/+niXLOit2qgAn0Nd8lPiFVPPot\nUqbzw4vTH9egWSMGE5nTR9MMM6C+KmRsYAQdWeFiiWbsNKfy7eaKiNeiSVTWB5XH\nUNKHa4IzG5xKeu4nP5IDMFMQ+9SxFMbxpB8xu8JvpXoQF3l2KzAqlPZevDZMhmyY\nz0sn0aqXbhCFXAszrn6gnp/DZ3k/XQ6EyL7wW47BmQKBgQDd+NrEn7PVaSZ9VUKd\nZ/MT+rWtP9zjy8Lkje1fB2nc5LlLcFmlwkcvtjuVqKZnfBaWOJKoDxwQQxFw04FY\n+QLUKl0AaFTpvlbTa7zmUBNQZVFDUxpBBuUY5s2CizsVdQsHBEuaGV/v+Yqnarzg\nJy8EiLx1RnstCDaUSMM3skxc6QKBgQDBckobJaKi/tkVraM2Mr4wrK1llncHXCG2\n2RoUBcDY909FqKjd6Kk8mj3f0tKzobkwTb/CMa1tErab5c4V0HCr0+Nhh53k8lpt\nqLwK2o3x+x/1JODegl45HxCv/mRDbuKVj9G8gQYdmC2FLLHMeMGbue/s3n0I6j/E\niUpAhIxO9QKBgGdKBYK5TdVguKhZpEXauSHy59dWgFL/3hC8elhd+sTvKcoQ3aZk\nYPuysMdTUxuUgm4kpRnO7iAjFVqLEQV12fsgO2aVJe4exAhdeekyGcqvWsEZSn43\n1yNfQwIcB8JUVG1Pcl6isCHa3MpKwNkNYrOZbRilU2wBBmS59x1TunUBAoGAUuki\nO/pod4XVE0aFsoATJheMhgL0ZzIkvRLV64j/u75bupZsMhg7GN9e76STbCw/jCV2\nr8vM8ffYTn8zUgQxlmPNjAqtMOhyu5dbaSd9OR6R9ubkflnP+pmG9HeLD5/h+4pV\nsX53WY3UzMR4PBPxn0YVQCen3X9Q73KMYZSt8lUCgYEAs893e90OkeY0yL6R4pTo\n1XaBeYd0jZWX0ZC3w1XUneXDiO2PH1akKZTBP8hBrAIXYXhYg/x61mkoEMZiVLd4\nMsp6ferCVN1n5od2u3s2Sp/41gD0Y5B4PCCUlnzlDI0aNkL/9pEWfcav0Hwpxz1O\n5DQv8A2nlCU1DUH057/TrTQ=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-e3n40@chaniteo.iam.gserviceaccount.com",
  "client_id": "101763228047502541075",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-e3n40%40chaniteo.iam.gserviceaccount.com"
};

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
  // credential:admin.credential.cert(config.firebase.cert)
}) 
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = admin.auth();

module.exports = {
  admin:admin,
  auth: auth,
  // analytics:analytics,
}

//other way to import an inicialize app


// module.exports=admin